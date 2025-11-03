import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { UserRole } from '@prisma/client';

declare global {
  namespace Express {
    interface Request {
      userId: string; 
      userRole: UserRole; 
    }
  }
}

const JWT_SECRET = process.env.JWT_SECRET || 'seu_segredo_muito_forte_e_secreto';

interface CustomPayload extends JwtPayload {
  userId: string;
  role: UserRole;
}

export const protect = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Acesso negado. Token não fornecido.' });
  }

  const token = authHeader.split(' ')[1];

  try {
        const decoded = jwt.verify(token, JWT_SECRET) as CustomPayload;
        
        if (!decoded.userId) {
             return res.status(401).json({ error: 'Token inválido: userId ausente.' });
        }
        
        req.userId = String(decoded.userId); 
        req.userRole = decoded.role; 

        next(); 

    } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({ error: 'Token inválido ou expirado.' });
    }
    console.error('Erro no middleware de autenticação:', error);
    return res.status(500).json({ error: 'Erro interno de servidor.' });
  }
};

export const adminOnly = (req: Request, res: Response, next: NextFunction) => {
    if (req.userRole !== 'ADMIN') {
        return res.status(403).json({ error: 'Acesso negado. Requer privilégios de Administrador.' });
    }
    next();
};