// Certifique-se de que todas as suas importações estão corretas (ex: PrismaClient, bcrypt, jwt)
import { Request, Response } from 'express';
import { prisma } from '../utils/prisma';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'segredo_muito_forte_e_secreto'; 

// Função auxiliar para gerar token
const generateToken = (user: { id: string, role: string, email: string }) => {
    return jwt.sign(
        { userId: user.id, role: user.role, email: user.email },
        JWT_SECRET,
        { expiresIn: '1d' }
    );
};

// ====================================================================
// --- REGISTER USER (AGORA ACEITA ROLE E FAZ LOGIN AUTOMÁTICO) ---
// ====================================================================
export const register = async (req: Request, res: Response) => {
    // Captura a role enviada pelo frontend (será 'ADMIN' ou 'CLIENT' por padrão)
    const { name, email, password, role } = req.body; 

    if (!name || !email || !password) {
        return res.status(400).json({ error: 'Todos os campos (nome, email, senha) são obrigatórios.' });
    }

    try {
        // 1. Verificar se o usuário já existe
        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            return res.status(409).json({ error: 'E-mail já cadastrado.' });
        }

        // 2. Hash da Senha
        const passwordHash = await bcrypt.hash(password, 10);
        
        // 3. Definir a Role. 
        // Se a role for passada como 'ADMIN' E o ambiente NÃO for produção, use 'ADMIN'. Caso contrário, 'CLIENT'.
        const userRole: 'ADMIN' | 'CLIENT' = (role === 'ADMIN' && process.env.NODE_ENV !== 'production') 
            ? 'ADMIN' 
            : 'CLIENT';

        // 4. Criar o Usuário no DB
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

        // 5. Gerar Token e Responder (para login automático no frontend)
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

// ====================================================================
// --- LOGIN USER (AJUSTADO PARA USAR generateToken) ---
// ====================================================================
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
        
        // Gerar o token usando a nova função
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