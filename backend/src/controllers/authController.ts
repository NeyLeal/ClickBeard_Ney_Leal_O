import { Request, Response } from 'express';
import { prisma } from '../utils/prisma';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'segredo_muito_forte_e_secreto'; 

const generateToken = (user: { id: string, role: string, email: string }) => {
    return jwt.sign(
        { userId: user.id, role: user.role, email: user.email },
        JWT_SECRET,
        { expiresIn: '1d' }
    );
};

export const register = async (req: Request, res: Response) => {
    const { name, email, password, role } = req.body; 

    if (!name || !email || !password) {
        return res.status(400).json({ error: 'Todos os campos (nome, email, senha) são obrigatórios.' });
    }

    try {
        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            return res.status(409).json({ error: 'E-mail já cadastrado.' });
        }
        const passwordHash = await bcrypt.hash(password, 10);
        
        const userRole: 'ADMIN' | 'CLIENT' = (role === 'ADMIN' && process.env.NODE_ENV !== 'production') 
            ? 'ADMIN' 
            : 'CLIENT';

        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                passwordHash,
                role: userRole,
            },
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
            }
        });

        const token = generateToken(newUser);

        return res.status(201).json({
            token,
            user: newUser,
        });

    } catch (error) {
        console.error('Erro no cadastro:', error);
        return res.status(500).json({ error: 'Falha interna ao processar o cadastro.' });
    }
};

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Email e senha são obrigatórios.' });
    }

    try {
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
            return res.status(401).json({ error: 'Credenciais inválidas.' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Credenciais inválidas.' });
        }
        const token = generateToken(user);
        
        res.json({
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
        });

    } catch (error) {
        console.error('Erro no login:', error);
        res.status(500).json({ error: 'Erro interno ao processar o login.' });
    }
};