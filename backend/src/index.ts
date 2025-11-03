import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/authRoutes';
import userRoutes from './routes/userRoutes';
import barberRoutes from './routes/barberRoutes';
import appointmentRoutes from './routes/appointmentRoutes';
import specialtyRoutes from './routes/specialtyRoutes'
import path from 'path';

dotenv.config();

declare global {
  var prisma: any; 
}

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.resolve('public/uploads')));
app.get('/', (req, res) => {
  res.send('API ClickBeard está rodando! Banco OK.');
});
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/barbers', barberRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/specialties', specialtyRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
 