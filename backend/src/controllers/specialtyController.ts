import { Request, Response } from 'express';
import { prisma } from '../utils/prisma';
import { BarberSpecialty } from '@prisma/client';

interface PrismaError {
  code: string;
}

function isPrismaError(e: any): e is PrismaError {
  return e && typeof e === 'object' && 'code' in e;
}

export const assignSingleSpecialty = async (barberId: string, specialtyId: string): Promise<BarberSpecialty> => {
    try {
        const assignment = await prisma.barberSpecialty.create({
            data: { barberId, specialtyId },
        });
        return assignment;
    } catch (error) {
        if (isPrismaError(error) && error.code === 'P2002') {
            const conflictError = new Error('Especialidade já atribuída.');
            (conflictError as any).code = 'P2002';
            throw conflictError;
        }
        throw error;
    }
};

// --- CADASTRO DE ESPECIALIDADE ---
export const createSpecialty = async (req: Request, res: Response) => {
  const { name, description, price } = req.body; 

  if (!name || typeof price !== 'number' || price <= 0) {
    return res.status(400).json({ error: 'O nome e um preço válido (maior que zero) são obrigatórios.' });
  }

  try {
    const newSpecialty = await prisma.specialty.create({
      data: { name, description, price },
    });

    res.status(201).json(newSpecialty);
  } catch (error) {
    if (isPrismaError(error)) { 
        if (error.code === 'P2002') {
            return res.status(409).json({ error: 'Essa especialidade já existe.' });
        }
    }
    console.error('Erro ao cadastrar especialidade:', error);
    res.status(500).json({ error: 'Erro interno ao cadastrar especialidade.' });
  }
};

// --- LISTAR ESPECIALIDADES ---
export const getSpecialties = async (req: Request, res: Response) => {
  try {
    const specialties = await prisma.specialty.findMany(); 
    res.json(specialties);
  } catch (error) {
    console.error('Erro ao listar especialidades:', error);
    res.status(500).json({ error: 'Erro interno ao listar especialidades.' });
  }
};

// --- EXCLUIR ESPECIALIDADE ---
export const deleteSpecialty = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ error: 'O ID da especialidade é obrigatório.' });
  }

  try {
    await prisma.$transaction([
      prisma.appointment.deleteMany({
        where: { specialtyId: id },
      }),

      prisma.barberSpecialty.deleteMany({
        where: { specialtyId: id },
      }),

      prisma.specialty.delete({
        where: { id: id },
      }),
    ]);

    res.status(204).send(); 
  } catch (error) {
    if (isPrismaError(error)) {
      if (error.code === 'P2025') {
        return res.status(404).json({ error: 'Especialidade não encontrada.' });
      }
    }
    console.error('Erro ao deletar especialidade:', error);
    res.status(500).json({ error: 'Erro interno ao deletar especialidade.' });
  }
};

// --- RELACIONAR BARBEIRO A ESPECIALIDADE ---
export const assignSpecialtyToBarber = async (req: Request, res: Response) => {
    const { barberId, specialtyId } = req.body;

    if (!barberId || !specialtyId) {
        return res.status(400).json({ error: 'ID do barbeiro e ID da especialidade são obrigatórios.' });
    }

    try {
        const assignment = await prisma.barberSpecialty.create({
            data: { barberId, specialtyId },
        });
        
        res.status(201).json({ message: 'Especialidade atribuída com sucesso.', data: assignment });

    } catch (error) {
    if (isPrismaError(error)) {
        if (error.code === 'P2002') {
             return res.status(409).json({ error: 'Este barbeiro já possui esta especialidade.' });
        }
    }
    console.error('Erro ao atribuir especialidade:', error);
    res.status(500).json({ error: 'Erro interno ao atribuir especialidade.' });
  }
};
