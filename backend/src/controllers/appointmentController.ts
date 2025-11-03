import { Request, Response } from 'express';
import { prisma } from '../utils/prisma';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

// Configuração do Dayjs
dayjs.extend(utc);
dayjs.extend(timezone);
const TIMEZONE = 'America/Sao_Paulo';

// --- Constantes de Horário ---
const OPENING_HOUR = 8;
const CLOSING_HOUR = 18;
const SLOT_DURATION_MINUTES = 30;

interface AppointmentTime {
  startTime: string | Date;
}


export const getAvailability = async (req: Request, res: Response) => {
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');

    const { barberId, date } = req.query;

    if (typeof barberId !== 'string' || typeof date !== 'string') {
        return res.status(400).json({ error: 'Barber ID e Data são obrigatórios.' });
    }

    try {
        const targetDate = dayjs(date).tz(TIMEZONE, true).startOf('day');
        if (!targetDate.isValid()) {
            return res.status(400).json({ error: 'Formato de data inválido. Use YYYY-MM-DD.' });
        }
        const startOfDay = targetDate;
        const endOfDay = targetDate.endOf('day');
        const existingAppointments: AppointmentTime[] = await prisma.appointment.findMany({
            where: {
                barberId: barberId,
                status: 'CONFIRMED',
                startTime: {
                    gte: startOfDay.toISOString(),
                    lt: endOfDay.toISOString(),
                },
            },
            select: {
                startTime: true,
            },
        });
        const occupiedSlots = new Set(
            existingAppointments.map(app => {
                return dayjs(app.startTime).tz(TIMEZONE).format('HH:mm');
            })
        );
        const availableSlots: string[] = [];
        let currentSlot = startOfDay.hour(OPENING_HOUR).minute(0).second(0);
        const closingTime = startOfDay.hour(CLOSING_HOUR).minute(0).second(0);

        while (currentSlot.isBefore(closingTime)) {
            const slotTimeFormatted = currentSlot.format('HH:mm');
            if (!occupiedSlots.has(slotTimeFormatted)) {
                availableSlots.push(slotTimeFormatted);
            }
            currentSlot = currentSlot.add(SLOT_DURATION_MINUTES, 'minutes');
        }
        return res.status(200).json({
            date: targetDate.format('YYYY-MM-DD'),
            availableSlots: availableSlots,
        });

    } catch (error) {
        console.error('Erro ao buscar disponibilidade:', error);
        return res.status(500).json({ error: 'Erro interno do servidor ao buscar horários.' });
    }
};

export const createAppointment = async (req: Request, res: Response) => {
    const userId = req.userId;
    if (!userId) {
        return res.status(401).json({ error: 'Usuário não autenticado.' });
    }

    const { barberId, specialtyId, date, startTime } = req.body;

    if (!barberId || !specialtyId || !date || !startTime) {
        return res.status(400).json({ error: 'Dados incompletos para o agendamento.' });
    }

    try {
        const [hour, minute] = startTime.split(':').map(Number);
        const appointmentStart = dayjs(date).tz(TIMEZONE, true)
            .hour(hour)
            .minute(minute)
            .second(0)
            .millisecond(0);
        const startTimeISO = appointmentStart.toISOString();
        const existingSlot = await prisma.appointment.findUnique({
            where: {
                barberId_startTime: {
                    barberId: barberId,
                    startTime: startTimeISO,
                }
            }
        });

        let finalAppointment;

        if (existingSlot) {
            if (existingSlot.status === 'CONFIRMED') {
                return res.status(409).json({ error: 'Este horário já foi reservado. Por favor, escolha outro.' });
            }
            finalAppointment = await prisma.appointment.update({
                where: {
                    id: existingSlot.id
                },
                data: {
                    userId: userId,
                    specialtyId: specialtyId,
                    status: 'CONFIRMED', 
                },
                include: {
                    barber: { select: { name: true } },
                    specialty: { select: { name: true } },
                }
            });

        } else {
            finalAppointment = await prisma.appointment.create({
                data: {
                    userId: userId,
                    barberId: barberId,
                    specialtyId: specialtyId,
                    date: startTimeISO,
                    startTime: startTimeISO,
                    status: 'CONFIRMED',
                },
                include: {
                    barber: { select: { name: true } },
                    specialty: { select: { name: true } },
                },
            });
        }
        return res.status(201).json(finalAppointment);

    } catch (error: any) {
        console.error('Erro ao criar/atualizar agendamento:', error);
        if (error.code === 'P2002') {
             return res.status(409).json({ error: 'Este horário acabou de ser reservado. Tente novamente.' });
        }
        
        if (error.code === 'P2023' || error.name === 'PrismaClientValidationError') {
            return res.status(400).json({ error: 'Dados inválidos fornecidos.' });
        }
        return res.status(500).json({ error: 'Erro interno do servidor.' });
    }
};
export const cancelAppointment = async (req: Request, res: Response) => {
    const userId = req.userId;
    const { id: appointmentId } = req.params;

    if (!userId) {
        return res.status(401).json({ error: 'Usuário não autenticado.' });
    }

    try {
        const appointment = await prisma.appointment.findUnique({
            where: { id: appointmentId },
        });

        if (!appointment) {
            return res.status(404).json({ error: 'Agendamento não encontrado.' });
        }

        if (appointment.userId !== userId && req.userRole !== 'ADMIN') {
            return res.status(403).json({ error: 'Você não tem permissão para cancelar este agendamento.' });
        }

        if (dayjs(appointment.startTime).isBefore(dayjs())) {
             return res.status(400).json({ error: 'Não é possível cancelar um agendamento que já ocorreu.' });
        }

        const cancelledAppointment = await prisma.appointment.update({
            where: { id: appointmentId },
            data: { status: 'CANCELLED' },
        });

        return res.status(200).json(cancelledAppointment);

    } catch (error) {
        console.error('Erro ao cancelar agendamento:', error);
        return res.status(500).json({ error: 'Erro interno do servidor.' });
    }
};

export const getMyAppointments = async (req: Request, res: Response) => {
    const userId = req.userId;
    if (!userId) {
        return res.status(401).json({ error: 'Usuário não autenticado.' });
    }

    try {
        const appointments = await prisma.appointment.findMany({
            where: {
                userId: userId,
                status: 'CONFIRMED',
                startTime: {
                    gte: dayjs().startOf('day').toISOString(),
                },
            },
            include: {
                barber: { select: { name: true } },
                specialty: { select: { name: true, price: true } },
            },
            orderBy: {
                startTime: 'asc',
            }
        });

        return res.status(200).json(appointments);

    } catch (error) {
        console.error('Erro ao buscar meus agendamentos:', error);
        return res.status(500).json({ error: 'Erro interno do servidor.' });
    }
};

export const getAdminAppointments = async (req: Request, res: Response) => {
    try {
        const appointments = await prisma.appointment.findMany({
            where: {
                status: 'CONFIRMED', 
                startTime: {
                    gte: dayjs().startOf('day').toISOString(),
                },
            },
            include: {
                user: { select: { name: true, email: true, id: true } },
                barber: { select: { name: true, id: true } },
                specialty: { select: { name: true, price: true } },
            },
            orderBy: {
                startTime: 'asc',
            }
        });

        return res.status(200).json(appointments);

    } catch (error) {
        console.error('Erro ao buscar agendamentos (Admin):', error);
        return res.status(500).json({ error: 'Erro interno do servidor.' });
    }
};