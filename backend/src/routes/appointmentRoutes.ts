import { Router } from 'express';
import { protect, adminOnly } from '../middlewares/authMiddleware';
import { 
    createAppointment,
    getAvailability,
    getMyAppointments,
    getAdminAppointments,
    cancelAppointment
} from '../controllers/appointmentController';

const router = Router(); 

router.get('/availability', protect, getAvailability); 
router.post('/', protect, createAppointment);
router.get('/my', protect, getMyAppointments);
router.get('/admin', protect, adminOnly, getAdminAppointments); 
router.put('/cancel/:id', protect, cancelAppointment);

export default router;