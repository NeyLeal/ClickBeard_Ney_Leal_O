'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Agendamento', href: '/booking' },
  { name: 'Meus Agendamentos', href: '/my-appointments' },
  { name: 'Especialidades', href: '/specialties' },
  { name: 'Nossos Barbeiros', href: '/barbers' },
];

export function Header() {
  const pathname = usePathname();
  const { isAuthenticated, user, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const filteredNavItems = navItems.filter(item => {
    if (item.name === 'Meus Agendamentos' && !isAuthenticated) return false;
    return true;
  });

  return (
    <header className="bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link 
            href="/"
            className="flex items-center gap-3 text-white text-2xl font-serif font-bold tracking-wider w-fit"
            onClick={() => setIsMobileMenuOpen(false)} 
          >
            <Image
              src="/LogoB.png" 
              alt="ClickBeard Logo"
              width={46}
              height={46}
              priority
            />
            <span>
              ClickBeard
            </span>
          </Link>
          <nav className="hidden lg:flex space-x-6">
            {filteredNavItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    text-sm font-medium transition duration-150 ease-in-out
                    ${isActive ? 'text-yellow-400 border-b-2 border-yellow-400' : 'text-gray-300 hover:text-white'}
                  `}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
          <div className="hidden lg:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <span className="text-sm text-gray-400 hidden sm:inline">
                  Olá, {user?.name.split(' ')[0]}!
                </span>
                <button
                  onClick={logout}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-1.5 px-4 rounded-lg shadow-lg transition duration-300 text-sm"
                >
                  Sair
                </button>
              </>
            ) : (
              <Link 
                href="/login" 
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-1.5 px-4 rounded-lg shadow-lg transition duration-300 text-sm"
              >
                Login / Cadastrar
              </Link>
            )}
          </div>
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-md"
              aria-label="Abrir menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

        </div>
      </div>
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:hidden border-t border-gray-700`}>
        <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {filteredNavItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)} 
                className={`
                  block px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out
                  ${isActive ? 'bg-yellow-500 text-gray-900' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}
                `}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
        <div className="border-t border-gray-700 pt-4 pb-3 px-4">
          {isAuthenticated ? (
            <div className="flex flex-col space-y-3">
              <span className="text-base font-medium text-gray-300">
                Olá, {user?.name.split(' ')[0]}!
              </span>
              <button
                onClick={() => {
                  logout();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-left bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-3 rounded-lg shadow-lg transition duration-300 text-sm"
              >
                Sair
              </button>
            </div>
          ) : (
            <Link 
              href="/login" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300 text-sm"
            >
              Login / Cadastrar
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

