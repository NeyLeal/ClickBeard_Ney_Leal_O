import { Request, Response } from 'express';
import { prisma } from '../utils/prisma';
import { Prisma } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const BarberWithSpecialtiesInclude = Prisma.validator<Prisma.BarberDefaultArgs>()({
    include: {
        specialties: {
            include: {
                specialty: true,
            },
        },
    },
});

type BarberWithSpecialties = Prisma.BarberGetPayload<typeof BarberWithSpecialtiesInclude>;

const cleanBarberOutput = (barber: BarberWithSpecialties) => ({
    ...barber,
    specialties: barber.specialties.map(bs => bs.specialty.name),
});
    
// --- CADASTRO DE BARBEIRO ---
export const createBarber = async (req: Request, res: Response) => {
    const { name, age, hireDate } = req.body;
    let { specialtyIds } = req.body; 

    if (!name || !age || !hireDate) {
        return res.status(400).json({ error: 'Nome, idade e data de contratação são obrigatórios.' });
    }

    let imageUrl: string | null = null;
    if (req.file) {
      
      const pathSegments = req.file.path.split(path.sep);
      const publicIndex = pathSegments.findIndex(segment => segment === 'public');
      
      if (publicIndex !== -1 && publicIndex < pathSegments.length - 1) {
          imageUrl = '/' + pathSegments.slice(publicIndex + 1).join('/');
      } else {
          const normalizedPath = req.file.path.replace(/\\/g, '/');
          imageUrl = `/${normalizedPath.split('/').slice(1).join('/')}`;
      }
    }

    try {
        const newBarber = await prisma.barber.create({
            data: {
                name,
                age: parseInt(age as string, 10),
                hireDate: new Date(hireDate as string),
                imageUrl: imageUrl,
            },
        });
        
        const barberId = newBarber.id;

        if (specialtyIds) {
          if (!Array.isArray(specialtyIds)) {
              specialtyIds = [specialtyIds];
          }

          const flatSpecialtyIds = specialtyIds.flat(Infinity);

          await prisma.barberSpecialty.createMany({
            data: flatSpecialtyIds.map((id: string) => ({ 
              barberId: barberId,
              specialtyId: id, 
            })),
            skipDuplicates: true, 
          });
        }

        const barberWithSpecialties = await prisma.barber.findUnique({
            where: { id: barberId },
            ...BarberWithSpecialtiesInclude,
        });

        if (!barberWithSpecialties) {
            return res.status(500).json({ error: 'Barbeiro criado, mas erro ao buscar os dados completos.' });
        }

        const cleanedBarber = cleanBarberOutput(barberWithSpecialties);

        res.status(201).json(cleanedBarber);
    } catch (error) {
        console.error('--- ERRO DETALHADO AO CADASTRAR BARBEIRO ---', error); 

        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2003') {
            return res.status(400).json({ error: 'Falha ao atribuir especialidades: Uma ou mais especialidades selecionadas não são válidas.' });
        }
        
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            return res.status(409).json({ 
                error: 'Erro de banco de dados ao criar barbeiro.', 
                prismaCode: error.code, 
                details: error.message 
            });
        }
        
        res.status(500).json({ error: 'Erro interno ao cadastrar o barbeiro.' });
    }
};

// --- LISTAR TODOS OS BARBEIROS ---
export const getBarbers = async (req: Request, res: Response) => {
    try {
        const barbers: BarberWithSpecialties[] = await prisma.barber.findMany(BarberWithSpecialtiesInclude);
        const cleanedBarbers = barbers.map(cleanBarberOutput); 

        res.json(cleanedBarbers);
    } catch (error) {
        console.error('Erro ao listar barbeiros:', error);
        res.status(500).json({ error: 'Erro interno ao listar barbeiros.' });
    }
};

// --- DELETAR BARBEIRO ---
export const deleteBarber = async (req: Request<{ id: string }>, res: Response) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ error: 'ID do barbeiro é obrigatório para exclusão.' });
    }

    try {
        const barber = await prisma.barber.findUnique({
            where: { id },
            select: { imageUrl: true }
        });

        if (!barber) {
            return res.status(404).json({ error: 'Barbeiro não encontrado para exclusão.' });
        }

        await prisma.barberSpecialty.deleteMany({
            where: { barberId: id },
        });

        await prisma.barber.delete({
            where: { id },
        });

        if (barber.imageUrl) {
            const imagePath = path.resolve('public' + barber.imageUrl); 
            
            fs.unlink(imagePath, (err) => {
                if (err) {
                    console.error(`Erro ao excluir arquivo de imagem ${imagePath}:`, err);
                } else {
                    console.log(`Arquivo de imagem ${imagePath} excluído.`);
                }
            });
        }

        res.status(204).send(); 
    } catch (error) {
        if ((error as any).code === 'P2025') {
            return res.status(404).json({ error: 'Barbeiro não encontrado para exclusão.' });
        }
        
        console.error('Erro ao deletar barbeiro:', error);
        res.status(500).json({ error: 'Erro interno ao deletar o barbeiro.' });
    }
};
