import { Router } from 'express';
import { protect, adminOnly } from '../middlewares/authMiddleware';
import { createSpecialty, getSpecialties, assignSpecialtyToBarber, deleteSpecialty } from '../controllers/specialtyController'; // Importado deleteSpecialty

const router = Router();

router.post('/', protect, adminOnly, createSpecialty);
router.get('/', getSpecialties); 
router.delete('/:id', protect, adminOnly, deleteSpecialty); 
router.post('/assign', protect, adminOnly, assignSpecialtyToBarber); 

export default router;
