export interface Specialty {
  id: string;
  name: string;
  description: string;
  price: number;
}

export type BarberSpecialty = string | { id?: string; name?: string };

export interface Barber {
  id: string;
  name: string;
  specialties: BarberSpecialty[]; 
  imageUrl?: string;
  age?: number;
  hireDate?: string;
}

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: 'ADMIN' | 'CLIENT';
}

