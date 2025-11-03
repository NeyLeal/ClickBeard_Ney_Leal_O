'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import api from '@/services/api';
import { AxiosError } from 'axios';

type UserRole = 'CLIENT' | 'ADMIN';

interface AuthData {
    token: string;
    user: {
        id: string;
        name: string;
        email: string;
        role: UserRole;
    };
}

interface AuthContextType {
    user: AuthData['user'] | null;
    isAuthenticated: boolean;
    isAdmin: boolean;
    login: (email: string, password: string) => Promise<void>;
    register: (name: string, email: string, password: string, role?: 'ADMIN' | 'CLIENT') => Promise<void>;
    logout: () => void;
    loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<AuthData['user'] | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const storedToken = localStorage.getItem('authToken');
        const storedUser = localStorage.getItem('authUser');

        if (storedToken && storedUser) {
            try {
                const parsedUser = JSON.parse(storedUser);
                setUser(parsedUser);
            } catch (e) {
                console.error("Erro ao parsear dados do usuário:", e);
                localStorage.removeItem('authToken');
                localStorage.removeItem('authUser');
            }
        }
        setLoading(false);
    }, []);

    const handleAuthSuccess = (token: string, userData: AuthData['user']) => {
        // Armazena o token para uso em requisições futuras
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        
        localStorage.setItem('authToken', token);
        localStorage.setItem('authUser', JSON.stringify(userData));
        setUser(userData);
    };

    const login = async (email: string, password: string) => {
        try {
            setLoading(true);
            const response = await api.post('/auth/login', { email, password });
            
            const { token, user: userData } = response.data;
            handleAuthSuccess(token, userData);

            // Redireciona com base na função
            router.push(userData.role === 'ADMIN' ? '/barbers' : '/'); 

        } catch (error) {
            const axiosError = error as AxiosError<{ error: string }>;
            const message = axiosError.response?.data?.error || 'Falha no login. Verifique suas credenciais.';
            throw new Error(message);
        } finally {
            setLoading(false);
        }
    };

    const register = async (name: string, email: string, password: string, role: 'ADMIN' | 'CLIENT' = 'CLIENT') => {
        try {
            setLoading(true);
            // Rota ajustada para o padrão /auth/register
            const response = await api.post('/auth/register', {
                name,
                email,
                password,
                role: role, // NOVO: Envia a role para o backend
            });
            
            // O backend deve retornar o token e os dados do usuário após o cadastro bem-sucedido
            const { token, user: userData } = response.data;
            handleAuthSuccess(token, userData);
            
            // Redireciona com base na função
            router.push(userData.role === 'ADMIN' ? '/barbers' : '/');

        } catch (error) {
            const axiosError = error as AxiosError<{ error: string }>;
            // Retorna a mensagem de erro específica do backend
            const message = axiosError.response?.data?.error || 'Falha no cadastro.';
            throw new Error(message);
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('authUser');
        delete api.defaults.headers.common['Authorization'];
        setUser(null);
        router.push('/login');
    };

    const isAuthenticated = !!user;
    const isAdmin = user?.role === 'ADMIN';

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, isAdmin, login, register, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth deve ser usado dentro de um AuthProvider');
    }
    return context;
};
