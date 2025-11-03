import { Router, Request, Response } from 'express';
import { protect } from '../middlewares/authMiddleware';
import { prisma } from '../utils/prisma';

const router = Router();

router.get('/me', protect, async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.userId },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
      },
    });

    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    return res.json(user);
  } catch (error) {
    console.error('Erro ao buscar perfil:', error);
    res.status(500).json({ error: 'Erro interno ao buscar perfil.' });
  }
});

export default router;