import { Specialty } from '@/types/index';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { Trash2 } from 'lucide-react';
import { useState } from 'react';
import React from 'react'; 

interface SpecialtyCardProps {
  specialty: Specialty;
  onSpecialtyDeleted: (id: string) => void;
}

export function SpecialtyCard({ specialty, onSpecialtyDeleted }: SpecialtyCardProps) {
  const { isAdmin } = useAuth();
  const [isConfirming, setIsConfirming] = useState(false);

  const startDelete = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsConfirming(true);
  };

  const confirmDelete = () => {
    setIsConfirming(false);
    if (onSpecialtyDeleted) { 
      onSpecialtyDeleted(specialty.id);
    } else {
      console.error("onSpecialtyDeleted callback is missing.");
    }
  };
  
  const cancelDelete = () => {
    setIsConfirming(false);
  };

  return (
    <div className="bg-white border border-gray-100 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden group relative">
      {isAdmin && (
        <button
          onClick={startDelete}
          className="absolute top-2 right-2 p-2 bg-red-600/90 text-white text-center rounded-full hover:bg-red-700 transition duration-200 z-10 shadow-lg"
          title="Excluir Especialidade"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      )}

      <div className="p-5">
        <h3 className="text-2xl font-bold text-gray-900 mb-2 border-b pb-1 border-yellow-500">
          {specialty.name}
        </h3>
        
        <p className="text-gray-600 mb-4 text-sm min-h-10">
          {specialty.description}
        </p>

        <div className="flex justify-between items-center pt-2 border-t">
          <span className="text-lg font-extrabold text-yellow-600">
            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(specialty.price)}
          </span> 
          <Link 
            href="/booking"
            className="text-sm font-semibold text-white bg-gray-900 px-4 py-1.5 rounded-full hover:bg-yellow-600 transition duration-200 shadow-md"
          >
            Agendar
          </Link>
        </div>
      </div>

      {isConfirming && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-sm shadow-2xl border-t-4 border-red-500">
            <h4 className="text-xl font-bold text-red-700 mb-3">Confirmação de Exclusão</h4>
            <p className="text-gray-700 mb-6">
              Tem certeza que deseja excluir o serviço **{specialty.name}**? 
              <br/>Esta ação é irreversível e excluirá todos os agendamentos e atribuições relacionadas.
            </p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={cancelDelete}
                className="px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition duration-150"
              >
                Cancelar
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 transition duration-150"
              >
                Excluir
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
