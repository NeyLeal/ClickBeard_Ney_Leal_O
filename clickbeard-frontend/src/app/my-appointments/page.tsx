'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link'; 
import { Loader2, Calendar, Clock, User, ClipboardList, XCircle, AlertTriangle, ShieldCheck } from 'lucide-react';
import { AxiosError } from 'axios'; 
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import { useAuth } from '../../context/AuthContext';
import api from '../../services/api';

dayjs.locale('pt-br');

interface Specialty {
    id: string;
    name: string;
    description?: string;
}
interface Barber {
    id: string;
    name: string;
}
interface AuthUser {
    id: string;
    name: string;
    email: string;
    role: 'ADMIN' | 'CLIENT';
}

interface AppointmentBase {
    id: string;
    startTime: string;
    status: 'CONFIRMED' | 'COMPLETED' | 'CANCELLED';
    specialty: Specialty;
    barber: Barber;
}

type ClientAppointment = AppointmentBase

interface AdminAppointment extends AppointmentBase {
    user: { id: string; name: string; email: string };
}

export default function MyAppointmentsPage() {
    const { isAuthenticated, loading: authLoading, user } = useAuth() as { 
        isAuthenticated: boolean; 
        loading: boolean; 
        user: AuthUser | null 
    };
    
    const [appointments, setAppointments] = useState<Array<ClientAppointment | AdminAppointment>>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [showCancelModal, setShowCancelModal] = useState<string | null>(null);
    const [isCanceling, setIsCanceling] = useState(false);

    const userRole = user?.role;

    const fetchAppointments = async () => {
        if (!isAuthenticated || !userRole) return;

        setIsLoading(true);
        setError(null);
        try {
            const endpoint = userRole === 'ADMIN' ? '/appointments/admin' : '/appointments/my';
            const response = await api.get(endpoint);
            setAppointments(response.data);
        } catch (err) {
            console.error('Erro ao buscar agendamentos:', err);
            setError('Falha ao carregar agendamentos. Tente novamente mais tarde.');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (!authLoading) {
            fetchAppointments();
        }
    }, [isAuthenticated, userRole, authLoading]);

    const handleCancelClick = (appointmentId: string) => {
        setShowCancelModal(appointmentId);
    };

    const handleConfirmCancel = async () => {
        if (!showCancelModal) return;

        setIsCanceling(true);
        try {
            await api.put(`/appointments/cancel/${showCancelModal}`);
            fetchAppointments(); 
            setShowCancelModal(null);
        } catch (err) {
            let message = 'Erro ao tentar cancelar o agendamento.';
            const axiosError = err as AxiosError<{ error: string }>;
            if (axiosError.response && axiosError.response.data && axiosError.response.data.error) {
                message = axiosError.response.data.error;
            }
            setError(message);
            setShowCancelModal(null);
            console.error('Erro ao cancelar:', err);
        } finally {
            setIsCanceling(false);
        }
    };

    if (authLoading || (isLoading && appointments.length === 0)) {
        return (
            <div className="flex justify-center items-center min-h-[calc(100vh-10rem)]">
                <Loader2 className="w-8 h-8 animate-spin text-gray-900" />
                <p className="ml-3 text-gray-600">Carregando agendamentos...</p>
            </div>
        );
    }

    if (!isAuthenticated) {
        return (
            <div className="text-center p-10 max-w-lg mx-auto bg-white shadow-xl rounded-lg mt-10">
                <h2 className="text-3xl font-bold text-red-600 mb-4">Acesso Negado</h2>
                <p className="text-gray-700 mb-6">Você precisa estar logado para ver seus agendamentos.</p>
                <Link href="/login" className="px-6 py-3 bg-yellow-500 text-gray-900 rounded-lg shadow-md hover:bg-yellow-600 transition">Fazer Login</Link>
            </div>
        );
    }
    
    const title = userRole === 'ADMIN' ? 'Agenda Geral da Barbearia' : 'Meus Próximos Agendamentos';

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {userRole === 'ADMIN' && (
                <div className="flex items-center text-lg font-semibold text-blue-800 bg-blue-100 p-3 rounded-lg border border-blue-300 mb-6">
                    <ShieldCheck className="w-6 h-6 mr-3 shrink-0" />
                    Visão do Administrador
                </div>
            )}
            <h1 className="text-4xl font-extrabold text-gray-900 mb-8 border-b-2 border-gray-100 pb-4">{title}</h1>
            
            {error && (
                <div className="text-center p-6 max-w-lg mx-auto bg-red-50 border border-red-300 shadow-xl rounded-lg mb-6">
                    <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-red-700 mb-3">Ocorreu um Erro</h2>
                    <p className="text-gray-700 mb-5">{error}</p>
                    <button onClick={() => setError(null)} className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">Fechar</button>
                </div>
            )}

            {!isLoading && appointments.length === 0 ? (
                <div className="text-center p-10 border-4 border-dashed border-gray-200 rounded-xl bg-gray-50 mt-8">
                    <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-xl text-gray-600 font-medium">
                        {userRole === 'ADMIN' 
                            ? 'Nenhum agendamento futuro encontrado.' 
                            : 'Você não tem agendamentos futuros.'}
                    </p>
                    {userRole !== 'ADMIN' && (
                         <Link href="/booking" className="mt-4 inline-block text-lg text-yellow-600 hover:text-yellow-700 font-semibold transition">
                            Agendar um novo horário
                        </Link>
                    )}
                </div>
            ) : (
                userRole === 'ADMIN' 
                    ? <AdminView appointments={appointments as AdminAppointment[]} onCancelClick={handleCancelClick} />
                    : <ClientView appointments={appointments as ClientAppointment[]} onCancelClick={handleCancelClick} />
            )}

            {showCancelModal && (
                <div className="fixed inset-0 bg-black/60 z-40 flex items-center justify-center p-4 backdrop-blur-sm">
                    <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full z-50 transform transition-all scale-100">
                        <div className="text-center">
                            <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-5" />
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Confirmar Cancelamento</h3>
                            <p className="text-gray-600 mb-8">
                                Você tem certeza que deseja cancelar este agendamento? Esta ação não pode ser desfeita.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <button
                                onClick={() => setShowCancelModal(null)}
                                disabled={isCanceling}
                                className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-medium shadow-sm hover:bg-gray-300 transition duration-200 disabled:opacity-50"
                            >
                                Não, manter
                            </button>
                            <button
                                onClick={handleConfirmCancel}
                                disabled={isCanceling}
                                className="px-6 py-3 bg-red-600 text-white rounded-lg font-medium shadow-md hover:bg-red-700 transition duration-200 disabled:opacity-50 disabled:bg-red-400 flex items-center justify-center gap-2"
                            >
                                {isCanceling ? (
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                ) : (
                                    'Sim, cancelar'
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

// ====================================================================
// --- Componente de Visualização do CLIENTE ---
// ====================================================================

interface ClientViewProps {
    appointments: ClientAppointment[];
    onCancelClick: (id: string) => void;
}

const ClientView: React.FC<ClientViewProps> = ({ appointments, onCancelClick }) => {
    return (
        <div className="space-y-6">
            {appointments.map(app => {
                const isPast = dayjs(app.startTime).isBefore(dayjs());

                return (
                    <div key={app.id} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center transition duration-300 hover:shadow-xl">
                        
                        <div className="flex-1 min-w-0 mb-4 md:mb-0">
                            <p className="text-lg font-semibold text-yellow-700 flex items-center mb-2 capitalize">
                                <Calendar className="w-5 h-5 mr-2" />
                                {dayjs(app.startTime).format('dddd, D [de] MMMM')}
                            </p>
                            <p className="text-4xl font-bold text-gray-900 mb-4 flex items-center">
                                <Clock className="w-8 h-8 mr-3 text-gray-500" />
                                {dayjs(app.startTime).format('HH:mm')}
                            </p>
                            
                            <div className="border-l-4 border-gray-200 pl-4 space-y-2">
                                <p className="text-lg font-medium text-gray-800 flex items-center">
                                    <User className="w-5 h-5 mr-2 text-gray-500" />
                                    Barbeiro: <span className="font-semibold ml-1.5">{app.barber.name}</span>
                                </p>
                                <p className="text-base text-gray-600 flex items-center">
                                    <ClipboardList className="w-5 h-5 mr-2 text-gray-500" />
                                    Serviço: <span className="font-medium ml-1.5">{app.specialty.name}</span>
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col items-start md:items-end space-y-3 w-full md:w-auto">
                            <span className={`px-4 py-1.5 text-sm font-semibold rounded-full ${
                                isPast ? 'bg-gray-100 text-gray-700' : 'bg-green-100 text-green-800 border border-green-200'
                            }`}>
                                {isPast ? 'Ocorreu' : 'Confirmado'}
                            </span>
                            <button 
                                onClick={() => onCancelClick(app.id)}
                                disabled={isPast}
                                className={`flex items-center justify-center w-full md:w-auto text-sm font-medium px-4 py-2 rounded-lg border transition duration-200 shadow-sm ${
                                    isPast 
                                    ? 'text-gray-500 bg-gray-100 border-gray-200 cursor-not-allowed' 
                                    : 'text-red-600 bg-red-50 border-red-200 hover:bg-red-100 hover:border-red-300'
                                }`}
                            >
                                <XCircle className="w-5 h-5 mr-1.5" />
                                {isPast ? 'Horário Passado' : 'Cancelar'}
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

// ====================================================================
// --- Componente de Visualização do ADMIN ---
// ====================================================================

interface AdminViewProps {
    appointments: AdminAppointment[];
    onCancelClick: (id: string) => void;
}

type GroupedData = {
    barberName: string;
    dates: {
        date: string;
        formattedDate: string;
        appointments: AdminAppointment[];
    }[];
};

const AdminView: React.FC<AdminViewProps> = ({ appointments, onCancelClick }) => {

    const groupedByBarber = useMemo(() => {
        const barbersMap = new Map<string, { barberName: string, dates: Map<string, AdminAppointment[]> }>();

        appointments.forEach(app => {
            const barberId = app.barber.id;
            const dateISO = dayjs(app.startTime).startOf('day').toISOString();

            if (!barbersMap.has(barberId)) {
                barbersMap.set(barberId, { barberName: app.barber.name, dates: new Map() });
            }
            const barberGroup = barbersMap.get(barberId)!;

            if (!barberGroup.dates.has(dateISO)) {
                barberGroup.dates.set(dateISO, []);
            }

            const dateAppointments = barberGroup.dates.get(dateISO)!;
            dateAppointments.push(app);
            dateAppointments.sort((a, b) => dayjs(a.startTime).valueOf() - dayjs(b.startTime).valueOf());
        });

        const result: GroupedData[] = [];
        barbersMap.forEach((barberData) => {
            const sortedDates = Array.from(barberData.dates.entries())
                .map(([dateISO, apps]) => ({
                    date: dateISO,
                    formattedDate: dayjs(dateISO).format('dddd, D [de] MMMM'),
                    appointments: apps
                }))
                .sort((a, b) => dayjs(a.date).valueOf() - dayjs(b.date).valueOf());

            result.push({
                barberName: barberData.barberName,
                dates: sortedDates
            });
        });
        
        result.sort((a, b) => a.barberName.localeCompare(b.barberName));

        return result;

    }, [appointments]);


    return (
        <div className="space-y-12">
            {groupedByBarber.map((barberGroup) => (
                <div key={barberGroup.barberName} className="bg-white p-6 rounded-xl shadow-2xl border border-gray-100">
                    <div className="pb-4 mb-6 border-b-4 border-gray-200">
                        <h2 className="text-3xl font-bold text-gray-900 flex items-center">
                            <User className="w-8 h-8 mr-3 text-yellow-600" />
                            {barberGroup.barberName}
                        </h2>
                    </div>

                    <div className="space-y-8">
                        {barberGroup.dates.map((dateGroup) => (
                            <div key={dateGroup.date} className="pl-2">
                                <h3 className="text-xl text-yellow-800 font-semibold mb-3 capitalize border-l-4 border-yellow-500 pl-3">
                                    {dateGroup.formattedDate}
                                </h3>
                                
                                <div className="space-y-4 ml-4">
                                    {dateGroup.appointments.map(app => {
                                        const isPast = dayjs(app.startTime).isBefore(dayjs());
                                        
                                        return (
                                            <div key={app.id} className="p-4 bg-gray-50 rounded-lg border border-gray-200 flex flex-col sm:flex-row justify-between sm:items-center gap-4 hover:bg-gray-100 transition">
                                                <div className="flex items-center space-x-4">
                                                    <span className="text-2xl font-bold text-gray-900 bg-white px-3 py-1 rounded-md border border-gray-300 shadow-sm">
                                                        {dayjs(app.startTime).format('HH:mm')}
                                                    </span>
                                                    <div className="flex flex-col">
                                                        <p className="text-base font-semibold text-gray-800">{app.specialty.name}</p>
                                                        <p className="text-sm text-gray-600">Serviço</p>
                                                    </div>
                                                </div>

                                                <div className="flex flex-col items-start sm:items-center min-w-[200px]">
                                                    <p className="font-semibold text-gray-800 flex items-center">
                                                        <User className="w-4 h-4 mr-1.5 text-gray-500" />
                                                        {app.user.name}
                                                    </p>
                                                    <p className="text-xs text-gray-500 sm:ml-5">{app.user.email}</p>
                                                </div>

                                                <button 
                                                    onClick={() => onCancelClick(app.id)}
                                                    disabled={isPast}
                                                    className={`flex items-center text-sm font-medium px-3 py-1.5 rounded-lg border transition duration-200 shrink-0 self-start sm:self-center ${
                                                        isPast
                                                        ? 'text-gray-500 bg-transparent border-gray-300 cursor-not-allowed'
                                                        : 'text-red-600 bg-transparent border-red-300 hover:bg-red-50'
                                                    }`}
                                                >
                                                    <XCircle className="w-4 h-4 mr-1" />
                                                    {isPast ? 'Passado' : 'Cancelar'}
                                                </button>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};