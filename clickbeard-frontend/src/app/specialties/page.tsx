'use client';

import { useState, useEffect, FormEvent } from 'react';
import api from '@/services/api';
import { Specialty } from '@/types';
import { SpecialtyCard } from '@/components/SpecialtyCard/SpecialtyCard';
import { Loader2, PlusCircle, ShieldCheck } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { AxiosError } from 'axios';

export default function SpecialtiesPage() {
    const [specialties, setSpecialties] = useState<Specialty[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const { isAdmin, logout } = useAuth();

    useEffect(() => {
        async function fetchSpecialties() {
            try {
                const response = await api.get('/specialties');
                setSpecialties(response.data);
            } catch (err: unknown) {
                setError('Não foi possível carregar as especialidades do servidor.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        }
        fetchSpecialties();
    }, []);

    const handleSpecialtyAdded = (newSpecialty: Specialty) => {
        setSpecialties(currentSpecialties => [newSpecialty, ...currentSpecialties]);
    };

    const handleSpecialtyDeleted = async (specialtyId: string) => {
        try {
            if (!isAdmin) {
                setError('Erro: Apenas administradores podem excluir serviços.');
                return;
            }

            await api.delete(`/specialties/${specialtyId}`);

            setSpecialties(currentSpecialties =>
                currentSpecialties.filter(s => s.id !== specialtyId)
            );

        } catch (err: unknown) {
            let msg = 'Falha ao excluir especialidade.';
            if (err instanceof AxiosError) {
                if (err.response?.status === 401 || err.response?.status === 403) {
                    msg = 'Acesso negado. Sua sessão expirou ou você não é administrador.';
                    logout();
                } else if (err.response?.data?.error) {
                    msg = err.response.data.error;
                }
            }
            setError(msg);
            console.error('Erro de exclusão:', err);
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {isAdmin && (
                <div className="flex items-center text-lg font-semibold text-blue-800 bg-blue-100 p-3 rounded-lg border border-blue-300 mb-6">
                    <ShieldCheck className="w-6 h-6 mr-3 shrink-0" />
                    Visão do Administrador
                </div>
            )}
            <h1 className="text-4xl font-extrabold text-gray-900 mb-3 text-center">Nossos Serviços</h1>
            <p className="text-xl font-bold text-gray-800 mb-12 text-center max-w-2xl mx-auto">
                Conheça os cortes, tratamentos e serviços premium oferecidos pela ClickBeard.
            </p>

            {isAdmin && <AddSpecialtyForm onSpecialtyAdded={handleSpecialtyAdded} onAuthError={logout} />}

            {loading && (
                <div className="flex justify-center items-center h-40">
                    <Loader2 className="w-8 h-8 animate-spin text-yellow-500" />
                    <p className="ml-3 text-gray-600">Carregando serviços...</p>
                </div>
            )}

            {error && (
                <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center">
                    {error}
                </div>
            )}

            {!loading && !error && specialties.length === 0 && (
                <div className="p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded-lg text-center">
                    Nenhuma especialidade encontrada. O administrador precisa cadastrar os serviços.
                </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {specialties.map((specialty) => (
                    <SpecialtyCard
                        key={specialty.id}
                        specialty={specialty}
                        onSpecialtyDeleted={handleSpecialtyDeleted}
                    />
                ))}
            </div>
        </div>
    );
}

interface AddSpecialtyFormProps {
    onSpecialtyAdded: (newSpecialty: Specialty) => void;
    onAuthError: () => void;
}

function AddSpecialtyForm({ onSpecialtyAdded, onAuthError }: AddSpecialtyFormProps) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const parsedPrice = parseFloat(price.replace(',', '.'));

        if (!name || isNaN(parsedPrice) || parsedPrice <= 0) {
            setError('O nome e um preço válido (maior que zero) são obrigatórios.');
            return;
        }

        setIsSubmitting(true);
        setError(null);

        try {
            const response = await api.post('/specialties', {
                name,
                description,
                price: parsedPrice,
            });

            setName('');
            setDescription('');
            setPrice('');

            onSpecialtyAdded(response.data);

        } catch (err: unknown) {
            let msg = 'Erro ao cadastrar especialidade.';
            if (err instanceof AxiosError) {
                if (err.response?.status === 401 || err.response?.status === 403) {
                    msg = 'Sua sessão expirou. Você será redirecionado para o login.';
                    onAuthError();
                } else if (err.response?.data?.error) {
                    msg = err.response.data.error;
                }
            }
            setError(msg);
            console.error(err);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-gray-50 p-6 rounded-xl shadow-lg border border-yellow-300 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <PlusCircle className="w-6 h-6 mr-2 text-yellow-600" />
                Cadastrar Novo Serviço
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="spec-name" className="block text-sm font-medium text-gray-700">Nome do Serviço</label>
                        <input
                            type="text"
                            id="spec-name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="spec-price" className="block text-sm font-medium text-gray-700">Preço (R$)</label>
                        <input
                            type="number"
                            id="spec-price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            min="0.01"
                            step="0.01"
                            placeholder="Ex: 50.00"
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="spec-desc" className="block text-sm font-medium text-gray-700">Descrição (Opcional)</label>
                    <textarea
                        id="spec-desc"
                        rows={2}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                    />
                </div>
                {error && <p className="text-red-600 text-sm">{error}</p>}
                <div className="flex justify-end">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full md:w-auto px-6 py-2 bg-gray-900 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 disabled:opacity-50 flex items-center justify-center transition duration-150"
                    >
                        {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : 'Cadastrar Serviço'}
                    </button>
                </div>
            </form>
        </div>
    );
}