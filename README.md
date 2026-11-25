# ClickBeard

Repositório com frontend e backend do projeto ClickBeard.

## Pré-requisitos

- Docker e Docker Compose
- Node.js (v18+ recomendado)
- npm ou yarn

## Estrutura do projeto
ClickBeard/
- backend/             # API do backend (Express + Prisma)
- clickbeard-frontend/ # Frontend (Next.js)
- Diagrama.png         # Diagrama (Banco de Dados)
- docker-compose.yml   # Configuração do Docker (Postgres)
- README.md

## Passo a passo para rodar o projeto

1. Clone o repositório:

    git clone https://github.com/NeyLeal/ClickBeard_Ney_Leal_O.git

    cd ClickBeard_Ney_Leal_O

2. Configuração das variáveis de ambiente (copie cada arquivo de exemplo e preencha os valores):

    .env.example -> .env
    backend/.env.example -> backend/.env
    clickbeard-frontend/.env.example -> clickbeard-frontend/.env.local

3. Configuração do banco de dados (PostgreSQL), o projeto utiliza Postgres via Docker:

    Na raiz do projeto (ClickBeard/):
    docker-compose up -d

    O Docker vai criar:
    Container: clickbeard_db
    Usuário: admin
    Senha: a que você definir no .env
    Banco: clickbeard
    Porta: 5432

4. Rodar migrations com Prisma:

    No terminal, dentro da pasta backend/:

    cd backend
    npm install
    npx prisma db push

5. Rodando o backend:

    Na pasta backend/:
    cd backend
    npm install
    npm run dev

6. Rodando o frontend:

    Na pasta clickbeard-frontend/:
    cd clickbeard-frontend
    npm install
    npm run dev

7. Criando uma base de testes:

    No botão cadastro crie um usuário administrador (Toggle inserido no cadastro para facilitar os testes)
    Com o usuário administrador logado vá a página Especialidades e cadastre quantas desejar para teste

    Exemplos para agilizar:

    - Nome do serviço: Corte Clássico
    - Descrição: Corte de cabelo masculino tradicional, realizado com máquina e tesoura.
    - Valor: 20

    - Nome do serviço: Corte Infantil
    - Descrição: Serviço de corte de cabelo dedicado a crianças.
    - Valor: 20

    - Nome do serviço: Barba Simples
    - Descrição: Manutenção rápida da barba com máquina e tesoura.
    - Valor: 20

    Com o usuário administrador logado vá a página Nossos Barbeiros e cadastre quantos desejar para teste

    Após cadastrar os barbeiros já está disponível para testar o agendamento administrativo.

    Crie um usuário cliente para visualisar como visa a visão de cliente e os agendamentos.

Caso queira ver as tabelas no prisma studio:

    Na pasta backend
    npx dotenv -e .env -- npx prisma studio
