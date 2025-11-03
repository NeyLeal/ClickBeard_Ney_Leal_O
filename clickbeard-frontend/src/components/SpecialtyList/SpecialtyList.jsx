import { useState } from 'react';
import { SpecialtyCard } from '../SpecialtyCard/SpecialtyCard';
import { useAuth } from '@/context/AuthContext';

export default function SpecialtyList() {
  const { authState } = useAuth();
  const [specialties, setSpecialties] = useState([]);
  const [error, setError] = useState(null);


  // --- FUNÇÃO QUE IMPLEMENTA A LÓGICA DE EXCLUSÃO ---
  const handleSpecialtyDeleted = async (specialtyId) => {
    console.log(`Tentando excluir a especialidade com ID: ${specialtyId}`);
    
    try {
      const token = authState?.token;
      
      if (!token) {
        console.error('Usuário não autenticado ou não-admin. A exclusão falhará na API.');
        setError('Você precisa ser um administrador autenticado para excluir serviços.');
        return;
      }
      
      const response = await fetch(`/api/barbers/specialties/${specialtyId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.status === 204) {
        console.log(`Especialidade ${specialtyId} excluída com sucesso no backend.`);
    
        setSpecialties(prevSpecialties => 
          prevSpecialties.filter(s => s.id !== specialtyId)
        );
      } else if (response.status === 404) {
        const errorData = await response.json();
        console.error('Erro 404:', errorData.error);
        setError(`Erro: ${errorData.error}`);
      } else if (response.status === 401 || response.status === 403) {
        const errorData = await response.json();
        setError(errorData.error || 'Acesso negado. Você deve ser Admin.');
      } else {
        const errorText = await response.text();
        console.error('Falha ao excluir especialidade:', response.status, errorText);
        setError('Falha na exclusão. Tente novamente mais tarde.');
      }
    } catch (err) {
      console.error('Erro de rede ao excluir especialidade:', err);
      setError('Erro de conexão. Verifique sua rede.');
    }
  };

  if (loading) return <div className="text-gray-600 p-4">Carregando especialidades...</div>;
  if (error) return <div className="text-red-500 font-bold p-4">Erro ao carregar ou excluir: {error}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      <h2 className="col-span-full text-3xl font-bold text-gray-800 mb-4">Nossos Serviços</h2>
      {specialties.map((specialty) => (
        <SpecialtyCard
          key={specialty.id}
          specialty={specialty}
          onSpecialtyDeleted={handleSpecialtyDeleted} 
        />
      ))}
      {specialties.length === 0 && <p className="col-span-full text-gray-500">Nenhuma especialidade cadastrada.</p>}
    </div>
  );
}
