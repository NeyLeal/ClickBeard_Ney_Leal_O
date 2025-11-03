'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { ShieldCheck } from 'lucide-react';

export default function LoginPage() {
    const [isRegister, setIsRegister] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAdminRegister, setIsAdminRegister] = useState(false);
    const [error, setError] = useState('');
    
    const { login, register, loading, isAuthenticated } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (isAuthenticated && typeof window !== 'undefined') { 
            router.push('/');
        }
    }, [isAuthenticated, router]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        try {
            if (isRegister) {
                await register(name, email, password, isAdminRegister ? 'ADMIN' : 'CLIENT');
            } else {
                await login(email, password);
            }
        } catch (err) { 
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('Ocorreu um erro desconhecido.');
            }
        }
    };

    if (isAuthenticated) {
        return null;
    }

    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-10rem)] bg-gray-50">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-2xl border border-gray-200">
                
                <h2 className="text-3xl font-extrabold text-center text-gray-900">
                    {isRegister ? 'Crie Sua Conta' : 'Acesse Sua Conta'}
                </h2>
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                    
                    {isRegister && (
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome Completo</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                            />
                        </div>
                    )}

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Senha</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                        />
                    </div>
                    {isRegister && (
                        <div className="pt-2">
                            <label className="flex items-center space-x-3 cursor-pointer p-3 bg-gray-100 rounded-lg border border-gray-200 hover:bg-yellow-50 transition-colors">
                                <ShieldCheck className={`w-5 h-5 transition-colors ${isAdminRegister ? 'text-yellow-600' : 'text-gray-500'}`} />
                                <span className="text-sm font-medium text-gray-700 flex-1">
                                    Criar como Administrador (Apenas para Testes)
                                </span>
                                <input
                                    type="checkbox"
                                    checked={isAdminRegister}
                                    onChange={() => setIsAdminRegister(!isAdminRegister)}
                                    className="h-5 w-5 text-yellow-600 rounded focus:ring-yellow-500 border-gray-300 transition-colors"
                                />
                            </label>
                        </div>
                    )}

                    {error && (
                        <div className="p-3 text-sm font-medium text-red-700 bg-red-100 rounded-md border border-red-300">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-900 bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50"
                    >
                        {loading ? 'Processando...' : isRegister ? 'Cadastrar' : 'Entrar'}
                    </button>
                </form>

                <div className="text-center text-sm">
                    <button
                        onClick={() => {
                            setIsRegister(!isRegister);
                            setError('');
                            setIsAdminRegister(false);
                        }}
                        className="font-medium text-yellow-600 hover:text-yellow-500 transition duration-150"
                    >
                        {isRegister ? 'Já tem uma conta? Faça login' : 'Não tem uma conta? Crie uma agora'}
                    </button>
                </div>
            </div>
        </div>
    );
}