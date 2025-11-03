import { Barber } from '@/types/index';
import Image from 'next/image';
import Link from 'next/link';
import { Trash2 } from 'lucide-react';

export interface CorrectedBarber extends Omit<Barber, 'specialties'> {
    specialties: string[];
    imageUrl?: string;
}

interface BarberCardProps {
    barber: CorrectedBarber;
    isAdmin: boolean;
    onDelete: (barberId: string) => void; 
}

const PLACEHOLDER_IMAGE = "/placeholder-barber.png";

export function BarberCard({ barber, isAdmin, onDelete }: BarberCardProps) {

    const handleDeleteClick = () => {
        onDelete(barber.id);
    };

    return (
        <div className="bg-white border border-gray-100 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 overflow-hidden text-center p-6">
            <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                    src={barber.imageUrl || PLACEHOLDER_IMAGE} 
                    alt={`Foto do Barbeiro ${barber.name}`}
                    width={128}
                    height={128}
                    className="rounded-full object-cover border-4 border-yellow-500 shadow-md"
                    onError={(e) => {
                        if (e.currentTarget && e.currentTarget.src !== PLACEHOLDER_IMAGE) {
                            e.currentTarget.src = PLACEHOLDER_IMAGE;
                        }
                    }}
                />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{barber.name}</h3>
            <p className="text-sm font-semibold text-yellow-600 mb-4">Especialista em:</p>
            <div className="flex flex-wrap justify-center gap-2 min-h-8">
                {barber.specialties.length > 0 ? (
                    barber.specialties.map((specialtyName, index) => (
                        <span 
                            key={index} 
                            className="px-3 py-1.5 text-xs font-medium text-gray-900 bg-yellow-100 rounded-full"
                        >
                            {specialtyName} 
                        </span>
                    ))
                ) : (
                    <span className="text-sm text-gray-500">Nenhum serviço cadastrado.</span>
                )}
            </div>

            <div className="mt-6 flex flex-col gap-2">
                <Link 
                    href={`/booking?barberId=${barber.id}`} 
                    className="inline-block w-full py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-yellow-600 transition duration-300"
                >
                    Agendar com {barber.name.split(' ')[0]}
                </Link>
                {isAdmin && (
                    <button
                        onClick={handleDeleteClick}
                        className="w-full py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 disabled:opacity-50 transition duration-300 flex items-center justify-center"
                    >
                        <Trash2 className="w-4 h-4 mr-2" />
                        Excluir Barbeiro
                    </button>
                )}
            </div>
        </div>
    );
}
