import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen p-12 md:p-24 text-center font-bold bg-transparent">
      <h1 className="text-5xl text-gray-900 mb-8 font-serif tracking-wide">ClickBeard</h1>
      <div className="text-left text-lg text-gray-800 my-16 max-w-3xl mx-auto space-y-3 ">
        <p>A ClickBeard é uma barbearia moderna que une estilo, precisão e tecnologia.</p>
        <p>Nosso foco é proporcionar uma experiência completa de cuidado masculino — desde o corte clássico até o design de barba personalizado. </p>
        <p className="hidden md:block">Com ambiente acolhedor, atendimento de qualidade e profissionais experientes, a ClickBeard é o lugar ideal para quem valoriza aparência, conforto e praticidade.</p>
        <p className="hidden md:block">Aqui, cada detalhe é pensado para realçar sua melhor versão.</p>
      </div>
      <div className="mt-24">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Faça um agendamento conosco</h2>
        <Link 
          href="/booking"
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-10 rounded-lg shadow-xl text-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Agendar Horário
        </Link>
      </div>
    </main>
  );
}
