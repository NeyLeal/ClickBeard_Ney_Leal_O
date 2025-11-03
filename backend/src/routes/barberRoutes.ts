import { Router } from 'express';
import { protect, adminOnly } from '../middlewares/authMiddleware';
import { createBarber, getBarbers, deleteBarber } from '../controllers/barberController';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

const uploadDir = path.resolve('public', 'uploads', 'barbers');

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); 
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + path.extname(file.originalname);
    cb(null, 'barber-' + uniqueSuffix);
  }
});

const upload = multer({ storage: storage });
const router = Router();

router.post('/', protect, adminOnly, upload.single('image'), createBarber); 
router.get('/', getBarbers); 
router.delete('/:id', protect, adminOnly, deleteBarber); 

export default router;
