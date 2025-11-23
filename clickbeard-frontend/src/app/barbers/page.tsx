'use client';

import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import api from '@/services/api';
import { Barber } from '@/types';
import { BarberCard, CorrectedBarber } from '@/components/BarberCard/BarberCard';
import { Loader2, PlusCircle, AlertTriangle, Trash2, Upload, ShieldCheck } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { AxiosError } from 'axios';
import {Specialty} from '@/types'
import Image from 'next/image';

export type { CorrectedBarber };

export default function BarbersPage() {
    const [barbers, setBarbers] = useState<CorrectedBarber[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [specialtiesList, setSpecialtiesList] = useState<Specialty[]>([]);
    const { isAdmin, logout } = useAuth();
    const [deletingBarberId, setDeletingBarberId] = useState<string | null>(null);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        async function fetchBarbersAndSpecialties() {
            try {
                const barbersResponse = await api.get('/barbers');
                setBarbers(barbersResponse.data as CorrectedBarber[]);

                const specialtiesResponse = await api.get('/specialties');
                setSpecialtiesList(specialtiesResponse.data);

            } catch (err: unknown) {
                setError('Não foi possível carregar a lista de barbeiros ou especialidades.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        }
        fetchBarbersAndSpecialties();
    }, [logout]);

    const handleBarberAdded = (newBarber: Barber) => {
        setBarbers(currentBarbers => [newBarber as CorrectedBarber, ...currentBarbers]);
    };

    const handleBarberDelete = async () => {
        if (!deletingBarberId) return;

        setError(null);
        setIsDeleting(true);
        try {
            await api.delete(`/barbers/${deletingBarberId}`);
            setBarbers(currentBarbers =>
                currentBarbers.filter(barber => barber.id !== deletingBarberId)
            );
            setDeletingBarberId(null);

        } catch (err: unknown) {
            let msg = 'Erro ao excluir barbeiro.';
            if (err instanceof AxiosError) {
                if (err.response?.status === 401 || err.response?.status === 403) {
                    msg = 'Sua sessão expirou. Você será redirecionado para o login.';
                    logout();
                } else if (err.response?.data?.error) {
                    msg = err.response.data.error;
                }
            }
            setError(msg);
            console.error(err);
        } finally {
            setIsDeleting(false);
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
            <h1 className="text-4xl font-extrabold text-gray-900 mb-3 text-center">Nossa Equipe</h1>
            <p className="text-xl font-bold text-gray-800 mb-12 text-center max-w-2xl mx-auto">
                Conheça os mestres da tesoura da ClickBeard e escolha seu especialista.
            </p>

            {isAdmin && (
                <AddBarberForm
                    onBarberAdded={handleBarberAdded}
                    onAuthError={logout}
                    specialties={specialtiesList}
                />
            )}

            {loading && (
                <div className="flex justify-center items-center h-40">
                    <Loader2 className="w-8 h-8 animate-spin text-gray-900" />
                    <p className="ml-3 text-gray-600">Buscando nossos Barbeiros...</p>
                </div>
            )}

            {error && (
                <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center">
                    {error}
                </div>
            )}

            {!loading && !error && barbers.length === 0 && (
                <div className="p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded-lg text-center">
                    Nenhum barbeiro cadastrado.
                </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                {barbers.map((barber) => (
                    <BarberCard
                        key={barber.id}
                        barber={barber}
                        isAdmin={isAdmin}
                        onDelete={setDeletingBarberId}
                    />
                ))}
            </div>

            {deletingBarberId && (
                <div className="fixed inset-0 bg-black/60 z-40 flex items-center justify-center p-4 backdrop-blur-sm">
                    <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full z-50">
                        <div className="text-center">
                            <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-5" />
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Excluir Barbeiro</h3>
                            <p className="text-gray-600 mb-8">
                                Tem certeza que deseja excluir este barbeiro? Esta ação é irreversível e
                                todos os agendamentos futuros dele serão perdidos.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <button
                                onClick={() => setDeletingBarberId(null)}
                                disabled={isDeleting}
                                className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-medium shadow-sm hover:bg-gray-300 transition duration-200 disabled:opacity-50"
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={handleBarberDelete}
                                disabled={isDeleting}
                                className="px-6 py-3 bg-red-600 text-white rounded-lg font-medium shadow-md hover:bg-red-700 transition duration-200 disabled:opacity-50 disabled:bg-red-400 flex items-center justify-center gap-2"
                            >
                                {isDeleting ? (
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                ) : (
                                    <>
                                        <Trash2 className="w-5 h-5" />
                                        Sim, excluir
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

interface AddBarberFormProps {
    onBarberAdded: (newBarber: Barber) => void;
    onAuthError: () => void;
    specialties: Specialty[];
}

function AddBarberForm({ onBarberAdded, onAuthError, specialties }: AddBarberFormProps) {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [hireDate, setHireDate] = useState('');
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [selectedSpecialtyIds, setSelectedSpecialtyIds] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSpecialtyChange = (specialtyId: string) => {
        setSelectedSpecialtyIds(prev =>
            prev.includes(specialtyId)
                ? prev.filter(id => id !== specialtyId)
                : [...prev, specialtyId]
        );
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;

        if (previewUrl) {
            URL.revokeObjectURL(previewUrl);
        }

        if (file) {
            setImageFile(file);
            setPreviewUrl(URL.createObjectURL(file));
        } else {
            setImageFile(null);
            setPreviewUrl(null);
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!name || !age || !hireDate) {
            setError('Os campos Nome, Idade e Data de Contratação são obrigatórios.');
            return;
        }

        setIsSubmitting(true);
        setError(null);

        const formData = new FormData();
        formData.append('name', name);
        formData.append('age', age);
        formData.append('hireDate', hireDate);

        selectedSpecialtyIds.forEach(id => {
            formData.append('specialtyIds', id);
        });

        if (imageFile) {
            formData.append('image', imageFile);
        }

        try {
            const response = await api.post('/barbers', formData);

            const newBarber: Barber = {
                ...response.data,
                specialties: response.data.specialties || [],
            };

            setName('');
            setAge('');
            setHireDate('');
            setImageFile(null);
            setPreviewUrl(null);
            if (previewUrl) URL.revokeObjectURL(previewUrl);
            setSelectedSpecialtyIds([]);

            onBarberAdded(newBarber);

        } catch (err: unknown) {
            let msg = 'Erro ao cadastrar barbeiro.';
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

    const specialtiesCheckboxes = specialties.length > 0 ? (
        specialties.map((specialty) => (
            <label key={specialty.id} className="flex items-center space-x-2 p-2 bg-white rounded-lg shadow-sm cursor-pointer hover:bg-yellow-50 transition duration-150">
                <input
                    type="checkbox"
                    checked={selectedSpecialtyIds.includes(specialty.id)}
                    onChange={() => handleSpecialtyChange(specialty.id)}
                    className="form-checkbox h-5 w-5 text-yellow-600 rounded focus:ring-yellow-500 border-gray-300"
                />
                <span className="text-sm font-medium text-gray-700">{specialty.name}</span>
            </label>
        ))
    ) : (
        <p className="text-sm text-yellow-700 col-span-full">Nenhuma especialidade cadastrada. Cadastre uma na página de Serviços.</p>
    );

    return (
        <div className="bg-gray-50 p-6 rounded-xl shadow-lg border border-yellow-300 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <PlusCircle className="w-6 h-6 mr-2 text-yellow-600" />
                Cadastrar Novo Barbeiro
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="age" className="block text-sm font-medium text-gray-700">Idade</label>
                        <input
                            type="number"
                            id="age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="hireDate" className="block text-sm font-medium text-gray-700">Data de Contratação</label>
                        <input
                            type="date"
                            id="hireDate"
                            value={hireDate}
                            onChange={(e) => setHireDate(e.target.value)}
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                            required
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Foto do Barbeiro (Opcional)</label>
                    <div className="mt-2 flex items-center gap-4">
                        <div className="w-20 h-20 rounded-full bg-gray-200 border-2 border-gray-300 flex items-center justify-center overflow-hidden">
                            {previewUrl ? (
                                <Image
                                    src={previewUrl}
                                    alt="Preview"
                                    width={80}
                                    height={80}
                                    className="object-cover w-full h-full"
                                />
                            ) : (
                                <Upload className="w-8 h-8 text-gray-500" />
                            )}
                        </div>
                        <label htmlFor="imageUpload" className="cursor-pointer bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 transition">
                            Selecionar Arquivo
                        </label>
                        <input
                            type="file"
                            id="imageUpload"
                            name="imageUpload"
                            className="hidden"
                            onChange={handleFileChange}
                            accept="image/png, image/jpeg, image/webp"
                        />
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                    <label className="block text-lg font-semibold text-gray-800 mb-3">Especialidades do Barbeiro</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                        {specialtiesCheckboxes}
                    </div>
                </div>

                {error && <p className="text-red-600 mt-2 text-sm">{error}</p>}

                <div className="flex justify-end pt-4">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full md:w-auto px-6 py-2 bg-gray-900 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 disabled:opacity-50 flex items-center justify-center transition duration-150"
                    >
                        {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : 'Cadastrar Barbeiro'}
                    </button>
                </div>
            </form>
        </div>
    );
}
