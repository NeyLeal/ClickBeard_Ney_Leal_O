'use client';

import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { usePathname } from 'next/navigation';

const footerNav = [
  { name: 'Home', href: '/' },
  { name: 'Agendamento', href: '/booking' },
  { name: 'Meus Agendamentos', href: '/my-appointments' },
  { name: 'Especialidades', href: '/specialties' },
  { name: 'Nossos Barbeiros', href: '/barbers' },
];

export function Footer() {
  const pathname = usePathname();
  const { isAuthenticated } = useAuth();
  const filteredNavItems = footerNav.filter(item => {
    if (item.name === 'Meus Agendamentos' && !isAuthenticated) return false;
    return true;
  });
  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-10">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:justify-between md:items-center">
          
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
          <div className="mt-8 md:mt-0">
            <p className="text-center text-sm text-gray-500">
              © {new Date().getFullYear()} ClickBeard. Todos os direitos reservados.
            </p>
            <p className="text-center text-xs text-gray-600 mt-1">
              Desenvolvido com Next.js, TypeScript e Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}