import 'dotenv/config';

const jwtSecret = process.env.JWT_SECRET;

if (!jwtSecret) {
  throw new Error('JWT_SECRET não está configurado no .env');
}

export const JWT_SECRET: string = jwtSecret;
