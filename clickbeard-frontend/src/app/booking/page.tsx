'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Loader2, Calendar, User, ClipboardList, CheckCheck } from 'lucide-react';
import { AxiosError } from 'axios';
import { useAuth } from '@/context/AuthContext';
import api from '@/services/api';
import { Barber, Specialty } from '@/types';

interface AppointmentDetails {
    barberId: string | null;
    specialtyIds: string[];
    date: string | null;
    time: string | null;
}

const formatISODateToBR = (isoDate: string | null): string => {
    if (!isoDate) return 'N/A';
    try {
        const [year, month, day] = isoDate.split('-');
        return `${day}/${month}/${year}`;
    } catch (e) {
        return isoDate;
    }
};

export default function BookingPage() {
    const { isAuthenticated, loading: authLoading } = useAuth() as {
        isAuthenticated: boolean;
        loading: boolean;
    };
    
    const [currentStep, setCurrentStep] = useState(1);
    const [appointment, setAppointment] = useState<AppointmentDetails>({
        barberId: null,
        specialtyIds: [],
        date: null,
        time: null,
    });
    
    const [barbers, setBarbers] = useState<Barber[]>([]);
    const [specialties, setSpecialties] = useState<Specialty[]>([]);
    const [dataLoading, setDataLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const [barbersRes, specialtiesRes] = await Promise.all([
                    api.get('/barbers'),
                    api.get('/specialties'),
                ]);
                setBarbers(barbersRes.data as Barber[]);
                setSpecialties(specialtiesRes.data as Specialty[]);
            } catch (err) {
                setError('Falha ao carregar dados essenciais para o agendamento.');
                console.error('Erro ao buscar dados:', err);
            } finally {
                setDataLoading(false);
            }
        }
        fetchData();
    }, []);

    if (authLoading || dataLoading) {
        return (
            <div className="flex justify-center items-center min-h-[calc(100vh-10rem)]">
                <Loader2 className="w-8 h-8 animate-spin text-gray-900" />
                <p className="ml-3 text-gray-600">Carregando dados...</p>
            </div>
        );
    }

    if (!isAuthenticated) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] p-8">
                <h2 className="text-3xl font-bold text-red-600 mb-4">Acesso Negado</h2>
                <p className="text-gray-700 mb-6">Você precisa estar logado para fazer um agendamento.</p>
                <Link
                    href="/login"
                    className="px-6 py-3 bg-yellow-500 text-gray-900 rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
                >
                    Fazer Login
                </Link>
            </div>
        );
    }

    const nextStep = () => setCurrentStep(prev => prev + 1);
    const prevStep = () => setCurrentStep(prev => prev - 1);
    
    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return <StepSpecialtySelection
                    specialties={specialties}
                    appointment={appointment}
                    setAppointment={setAppointment}
                    onNext={nextStep}
                />;
            case 2:
                return <StepBarberSelection
                    barbers={barbers}
                    specialties={specialties}
                    appointment={appointment}
                    setAppointment={setAppointment}
                    onNext={nextStep}
                    onBack={prevStep}
                />;
            case 3:
                return <StepDateTimeSelection
                    appointment={appointment}
                    setAppointment={setAppointment}
                    onNext={nextStep}
                    onBack={prevStep}
                    isAuthenticated={isAuthenticated}
                />;
            case 4:
                return <StepConfirmation
                    barbers={barbers}
                    specialties={specialties}
                    appointment={appointment}
                    onBack={prevStep}
                />;
            default:
                return <div>Etapa Desconhecida</div>;
        }
    };

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-8 text-center">
                Agendamento Online
            </h1>
            
            {error && (
                <div className="p-4 mb-6 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center">
                    {error}
                </div>
            )}

            <BookingStepIndicator currentStep={currentStep} />

            <div className="mt-8 p-8 bg-white rounded-xl shadow-2xl border border-gray-100">
                {renderStepContent()}
            </div>
        </div>
    );
}

// ====================================================================
// --- Componente: Indicador de Etapas ---
// ====================================================================

interface StepIndicatorProps {
    currentStep: number;
}
const steps = [
    { step: 1, name: 'Serviços', icon: ClipboardList },
    { step: 2, name: 'Barbeiro', icon: User },
    { step: 3, name: 'Data e Hora', icon: Calendar },
    { step: 4, name: 'Confirmar', icon: CheckCheck },
];
const BookingStepIndicator: React.FC<StepIndicatorProps> = ({ currentStep }) => {
    return (
        <div className="flex justify-between items-center bg-gray-100 p-4 rounded-xl shadow-inner">
            {steps.map((stepItem, index) => (
                <div key={stepItem.step} className="flex-1 flex flex-col items-center relative">
                    {index > 0 && (
                        <div
                            className={`absolute left-[-50%] top-1/2 h-1 -translate-y-1/2 ${
                                currentStep >= stepItem.step ? 'bg-yellow-500' : 'bg-gray-300'
                            } transition-all duration-500`}
                            style={{ width: '100%' }}
                        ></div>
                    )}
                    
                    <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center relative z-10 
                            ${currentStep >= stepItem.step ? 'bg-yellow-500 text-gray-900 shadow-md' : 'bg-gray-300 text-white'}
                            transition-colors duration-500`}
                    >
                        <stepItem.icon className="w-5 h-5" />
                    </div>
                    
                    <span
                        className={`mt-2 text-sm font-medium text-center transition-colors duration-500 
                            ${currentStep >= stepItem.step ? 'text-gray-900' : 'text-gray-500'}`}
                    >
                        {stepItem.name}
                    </span>
                </div>
            ))}
        </div>
    );
};


// ====================================================================
// --- Componente: Etapa 1 - Seleção dos Serviços ---
// ====================================================================

interface StepSpecialtySelectionProps {
    specialties: Specialty[];
    appointment: AppointmentDetails;
    setAppointment: React.Dispatch<React.SetStateAction<AppointmentDetails>>;
    onNext: () => void;
}
const StepSpecialtySelection: React.FC<StepSpecialtySelectionProps> = ({ specialties, appointment, setAppointment, onNext }) => {
    
    const handleToggleSpecialty = (specialtyId: string) => {
        setAppointment(prev => ({
            ...prev,
            specialtyIds: [specialtyId],
            barberId: null,
            date: null,
            time: null,
        }));
    };
    
    const selectedSpecialties = specialties.filter(s => appointment.specialtyIds.includes(s.id));
    const totalDuration = selectedSpecialties.length * 30;
    const totalPrice = selectedSpecialties.reduce((sum, s) => sum + (s.price ?? 0), 0);

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2">1. Selecione o Serviço</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {specialties.map(specialty => {
                    const isSelected = appointment.specialtyIds.includes(specialty.id);

                    return (
                        <div
                            key={specialty.id}
                            onClick={() => handleToggleSpecialty(specialty.id)}
                            className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 shadow-md 
                                ${isSelected
                                    ? 'border-yellow-500 bg-yellow-50 ring-2 ring-yellow-500'
                                    : 'border-gray-200 bg-white hover:border-yellow-300'
                                }`}
                        >
                            <h3 className="font-bold text-gray-900">{specialty.name}</h3>
                            <p className="text-sm text-gray-600 mt-1">{specialty.description.substring(0, 50)}...</p>
                            <p className="text-base font-semibold text-yellow-600 mt-2">
                                R$ {(specialty.price ?? 0).toFixed(2)}
                            </p>
                        </div>
                    );
                })}
            </div>

            {selectedSpecialties.length > 0 && (
                <div className="p-4 bg-gray-100 rounded-lg shadow-inner">
                    <h4 className="font-bold text-gray-800 mb-2">Resumo do Serviço:</h4>
                    <p className="text-sm text-gray-700">Duração Estimada: {totalDuration} minutos</p>
                    <p className="text-lg font-bold text-gray-900 mt-2">Total: R$ {totalPrice.toFixed(2)}</p>
                </div>
            )}


            <div className="flex justify-end mt-8 border-t pt-4">
                <button
                    onClick={onNext}
                    disabled={appointment.specialtyIds.length === 0}
                    className="px-6 py-2 bg-gray-900 text-white rounded-lg font-medium shadow-md hover:bg-yellow-600 disabled:opacity-50 transition duration-300"
                >
                    Próximo: Barbeiro
                </button>
            </div>
        </div>
    );
};


// ====================================================================
// --- Componente: Etapa 2 - Seleção do Barbeiro ---
// ====================================================================
interface StepBarberSelectionProps {
    barbers: Barber[];
    specialties: Specialty[];
    appointment: AppointmentDetails;
    setAppointment: React.Dispatch<React.SetStateAction<AppointmentDetails>>;
    onNext: () => void;
    onBack: () => void;
}
const StepBarberSelection: React.FC<StepBarberSelectionProps> = ({ barbers, specialties, appointment, setAppointment, onNext, onBack }) => {
    
    const selectedSpecialty = specialties.find(s => s.id === appointment.specialtyIds[0]);

    const availableBarbers = useMemo(() => {
        if (!selectedSpecialty) {
            return [];
        }
        
        const specialtyNameLower = selectedSpecialty.name.toLowerCase();

        return barbers.filter(barber => {
            return (barber.specialties || [])
                .filter(Boolean)
                .map(s => (typeof s === 'string' ? s : s.name || ''))
                .some(name => name.toLowerCase() === specialtyNameLower);
        });
    }, [barbers, selectedSpecialty]);

    const handleSelectBarber = (barberId: string) => {
        setAppointment(prev => ({
            ...prev,
            barberId,
            date: null,
            time: null
        }));
    };

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2">2. Escolha o Barbeiro</h2>
            
            <p className="text-base text-gray-600 mb-6">
                Mostrando barbeiros que oferecem: <strong className="text-gray-800">{selectedSpecialty?.name || 'N/A'}</strong>
            </p>

            {availableBarbers.length === 0 ? (
                <div className="p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded-lg text-center">
                    Nenhum barbeiro disponível para este serviço. Por favor, volte e escolha outro serviço.
                </div>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {availableBarbers.map(barber => (
                        <button
                            key={barber.id}
                            onClick={() => handleSelectBarber(barber.id)}
                            className={`p-4 rounded-xl border-4 transition-all duration-200 shadow-lg
                                ${appointment.barberId === barber.id
                                    ? 'border-yellow-500 bg-yellow-50 ring-2 ring-yellow-500'
                                    : 'border-gray-200 bg-white hover:border-yellow-300'
                                }`}
                        >
                            <div className="w-16 h-16 mx-auto mb-2 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-lg font-bold">
                                {barber.name.split(' ')[0][0]}{barber.name.split(' ').length > 1 ? barber.name.split(' ')[1][0] : ''}
                            </div>
                            <p className="font-bold text-gray-900">{barber.name}</p>
                        </button>
                    ))}
                </div>
            )}

            <div className="flex justify-between mt-8 border-t pt-4">
                <button
                    onClick={onBack}
                    className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg font-medium shadow-md hover:bg-gray-300 transition duration-300"
                >
                    Voltar
                </button>
                <button
                    onClick={onNext}
                    disabled={!appointment.barberId || availableBarbers.length === 0}
                    className="px-6 py-2 bg-gray-900 text-white rounded-lg font-medium shadow-md hover:bg-yellow-600 disabled:opacity-50 transition duration-300"
                >
                    Próximo: Data e Hora
                </button>
            </div>
        </div>
    );
};


// ====================================================================
// --- Componente: Etapa 3 - Seleção de Data e Hora ---
// ====================================================================
interface StepDateTimeSelectionProps {
    appointment: AppointmentDetails;
    setAppointment: React.Dispatch<React.SetStateAction<AppointmentDetails>>;
    onNext: () => void;
    onBack: () => void;
    isAuthenticated: boolean;
}
type AvailabilityResponse = {
    date: string;
    availableSlots: string[];
};

const StepDateTimeSelection: React.FC<StepDateTimeSelectionProps> = ({ appointment, setAppointment, onNext, onBack, isAuthenticated }) => {
    
    const [availableTimes, setAvailableTimes] = useState<string[]>([]);
    const [isLoadingTimes, setIsLoadingTimes] = useState(false);
    const [fetchError, setFetchError] = useState<string | null>(null);

    const { barberId, date } = appointment;

    useEffect(() => {
        if (barberId && date) {
            const fetchAvailableTimes = async () => {
                setIsLoadingTimes(true);
                setFetchError(null);
                setAvailableTimes([]);
                
                try {
                    const response = await api.get('/appointments/availability', {
                        params: { 
                            barberId, 
                            date,
                            _cacheBust: Date.now()
                        },
                        headers: {
                            'Cache-Control': 'no-store',
                            'Pragma': 'no-cache',
                            'Expires': '0',
                        }
                    });
                    const data = response.data as AvailabilityResponse;
                    if (data && Array.isArray(data.availableSlots)) {
                        setAvailableTimes(data.availableSlots);
                    } else {
                        console.error("Resposta da API inesperada:", data);
                        setFetchError('Não foi possível processar os horários.');
                    }
                } catch (err: unknown) {
                    console.error('Erro ao buscar horários:', err);
                    let message = 'Falha ao carregar horários. Tente outra data.';
                    const axiosError = err as AxiosError<{ error: string }>;
                    if (axiosError.response && axiosError.response.data && axiosError.response.data.error) {
                        message = axiosError.response.data.error;
                    }
                    setFetchError(message);
                } finally {
                    setIsLoadingTimes(false);
                }
            };
            fetchAvailableTimes();
        } else {
            setAvailableTimes([]);
        }
    }, [barberId, date, isAuthenticated]);

    const handleSelectDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAppointment(prev => ({ ...prev, date: e.target.value, time: null }));
    };

    const handleSelectTime = (time: string) => {
        setAppointment(prev => ({ ...prev, time }));
    };
    
    const today = new Date().toISOString().split('T')[0];
    const formattedDate = formatISODateToBR(appointment.date);

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2">3. Data e Hora</h2>

            <div className="mb-8">
                <label htmlFor="appointment-date" className="block text-lg font-medium text-gray-700 mb-2">Selecione o dia:</label>
                <input
                    id="appointment-date"
                    type="date"
                    min={today}
                    value={appointment.date || ''}
                    onChange={handleSelectDate}
                    className="w-full max-w-sm px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                />
            </div>

            {appointment.date && (
                <div>
                    <h3 className="text-lg font-medium text-gray-700 mb-3">Horários Disponíveis:</h3>
                    
                    {isLoadingTimes && (
                        <div className="flex items-center text-gray-600">
                            <Loader2 className="w-5 h-5 animate-spin mr-2 text-yellow-500" />
                            Buscando horários...
                        </div>
                    )}

                    {fetchError && !isLoadingTimes && (
                        <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                            {fetchError}
                        </div>
                    )}

                    {!isLoadingTimes && !fetchError && availableTimes.length === 0 && (
                        <div className="p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded-lg">
                            Nenhum horário disponível para esta data. Por favor, selecione outro dia.
                        </div>
                    )}

                    {!isLoadingTimes && !fetchError && availableTimes.length > 0 && (
                        <div className="flex flex-wrap gap-3">
                            {availableTimes.map(time => (
                                <button
                                    key={time}
                                    onClick={() => handleSelectTime(time)}
                                    className={`px-4 py-2 border rounded-lg transition-colors duration-200 
                                        ${appointment.time === time
                                            ? 'bg-yellow-500 text-gray-900 font-bold border-yellow-500 shadow-md'
                                            : 'bg-gray-100 text-gray-700 hover:bg-yellow-100 border-gray-300'
                                        }`}
                                >
                                    {time}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            )}


            <div className="flex justify-between mt-8 border-t pt-4">
                <button
                    onClick={onBack}
                    className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg font-medium shadow-md hover:bg-gray-300 transition duration-300"
                >
                    Voltar
                </button>
                <button
                    onClick={onNext}
                    disabled={!appointment.date || !appointment.time || isLoadingTimes}
                    className="px-6 py-2 bg-gray-900 text-white rounded-lg font-medium shadow-md hover:bg-yellow-600 disabled:opacity-50 transition duration-300"
                >
                    Próximo: Revisar
                </button>
            </div>
        </div>
    );
};


// ====================================================================
// --- Componente: Etapa 4 - Confirmação e Envio ---
// ====================================================================

interface StepConfirmationProps {
    barbers: Barber[];
    specialties: Specialty[];
    appointment: AppointmentDetails;
    onBack: () => void;
}
const StepConfirmation: React.FC<StepConfirmationProps> = ({ barbers, specialties, appointment, onBack }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [isSuccess, setIsSuccess] = useState(false);
    
    const selectedBarber = barbers.find(b => b.id === appointment.barberId);
    const selectedSpecialties = specialties.filter(s => appointment.specialtyIds.includes(s.id));
    
    const totalPrice = selectedSpecialties.reduce((sum, s) => sum + (s.price ?? 0), 0);
    const totalDuration = selectedSpecialties.length * 30;
    
    const router = useRouter(); 

    const formattedDate = formatISODateToBR(appointment.date);

    const handleSubmit = async () => {
        if (!selectedBarber || selectedSpecialties.length === 0 || !appointment.date || !appointment.time) {
            setSubmitError('Por favor, preencha todas as etapas antes de confirmar.');
            return;
        }

        setIsSubmitting(true);
        setSubmitError(null);

        try {
            const response = await api.post('/appointments', {
                barberId: appointment.barberId,
                specialtyId: appointment.specialtyIds[0],
                startTime: appointment.time,
                date: appointment.date,
            });

            console.log('Resposta:', response.data);
            setIsSuccess(true);
            
            setTimeout(() => {
                router.push('/');
            }, 3000);

        } catch (err: unknown) {
            let message = 'Erro desconhecido ao processar o agendamento.';
            
            const axiosError = err as AxiosError<{ error: string }>;
            if (axiosError.response && axiosError.response.data && axiosError.response.data.error) {
                message = axiosError.response.data.error;
            } else if (err instanceof Error) {
                message = err.message;
            }
            
            setSubmitError(message);
            console.error('Erro de submissão:', err);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="text-center p-10 bg-green-50 rounded-lg border border-green-300">
                <CheckCheck className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-green-700 mb-2">Agendamento Concluído!</h2>
                <p className="text-gray-600">Seu horário foi reservado com sucesso. Obrigado por escolher a ClickBeard.</p>
                <Link
                    href="/"
                    className="mt-6 inline-block text-yellow-600 hover:text-yellow-700 font-medium"
                >
                    Voltar para a Home
                </Link>
            </div>
        );
    }


    return (
        <div>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2">4. Revisão e Confirmação</h2>

            <div className="space-y-4 mb-8">
                <InfoItem icon={ClipboardList} title={`Serviço (Duração: ${totalDuration} min)`} value={selectedSpecialties.map(s => s.name).join(', ') || 'N/A'} />
                <InfoItem icon={User} title="Barbeiro Selecionado" value={selectedBarber?.name || 'N/A'} />
                <InfoItem icon={Calendar} title="Data e Horário" value={`${formattedDate} às ${appointment.time || 'N/A'}`} />
                <InfoItem icon={Calendar} title="Valor Total" value={`R$ ${totalPrice.toFixed(2)}`} isTotal={true} />
            </div>

            {submitError && (
                <div className="p-3 mb-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                    {submitError}
                </div>
            )}

            <div className="flex justify-between mt-8 border-t pt-4">
                <button
                    onClick={onBack}
                    disabled={isSubmitting}
                    className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg font-medium shadow-md hover:bg-gray-300 transition duration-300"
                >
                    Voltar
                </button>
                <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="px-6 py-2 bg-gray-900 text-white rounded-lg font-medium shadow-md hover:bg-yellow-600 disabled:opacity-50 transition duration-300 flex items-center gap-2"
                >
                    {isSubmitting ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Enviando...
                    </>
                    ) : (
                    'Confirmar Agendamento'
                )}
                </button>
            </div>
        </div>
    );
};

const InfoItem: React.FC<{ icon: React.ElementType, title: string, value: string, isTotal?: boolean }> = ({ icon: Icon, title, value, isTotal = false }) => (
    <div className={`flex items-center p-3 rounded-lg ${isTotal ? 'bg-yellow-50 font-bold text-lg' : 'bg-gray-50 text-base'}`}>
        <Icon className={`w-5 h-5 ${isTotal ? 'text-yellow-600' : 'text-gray-500'} mr-3 shrink-0`} />
        <span className="font-medium text-gray-600 mr-2">{title}:</span>
        <span className={`${isTotal ? 'text-gray-900' : 'text-gray-800'}`}>{value}</span>
    </div>
);