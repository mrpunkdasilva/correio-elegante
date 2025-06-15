<h1 align="center">Correio Elegante :love_letter:</h1>

<p align="center">
  <img src=".github/correio_elegante_logo.jpg" alt="Correio Elegante Logo" width="200">
</p>

<p align="center">Um sistema de envio de cartas elegantes</p>

<p align="center">
  <img alt="Status" src="https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow">
  <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/MrNullus/correio-elegante?color=green">
  <img alt="GitHub license" src="https://img.shields.io/github/license/MrNullus/correio-elegante">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/MrNullus/correio-elegante">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/MrNullus/correio-elegante">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/MrNullus/correio-elegante">
  <img alt="GitHub issues" src="https://img.shields.io/github/issues/MrNullus/correio-elegante">
  <img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/MrNullus/correio-elegante">
</p>

<p align="center">
  <img alt="Node.js" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white">
  <img alt="React" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
  <img alt="Express.js" src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge">
  <img alt="Firebase" src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black">
  <img alt="Docker" src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white">
</p>

<p align="center">
  <a href="#visão-geral">Visão Geral</a> •
  <a href="#recursos">Recursos</a> •
  <a href="#estrutura-do-projeto">Estrutura do Projeto</a> •
  <a href="#tecnologias">Tecnologias</a> •
  <a href="#instalação">Instalação</a> •
  <a href="#docker">Docker</a> •
  <a href="#uso">Uso</a> •
  <a href="#licença">Licença</a>
</p>

## :scroll: Visão Geral

O Correio Elegante é um sistema que permite o envio de cartas elegantes para destinatários especiais. Com este sistema, você pode criar e enviar mensagens personalizadas, escolher a cor do bilhete e até mesmo selecionar a forma da cartinha.

## :sparkles: Recursos

- Envio de cartas personalizadas
- Escolha da cor do bilhete
- Seleção da forma da cartinha
- Registros de envio de mensagens
- Gerenciamento de usuários
- Interface amigável e responsiva
- API RESTful documentada com Swagger
- Autenticação e autorização
- Armazenamento de dados com Firebase

## :file_folder: Estrutura do Projeto

O projeto está organizado em duas partes principais:

- **client**: Frontend da aplicação desenvolvido com React e Vite
- **server**: Backend da aplicação desenvolvido com Node.js e Express

Cada parte possui seu próprio README com instruções específicas.

## :computer: Tecnologias

### Frontend
- React 18
- Vite
- React Router
- Axios
- SASS
- React Icons

### Backend
- Node.js
- Express
- Firebase
- Swagger para documentação da API
- Jest para testes

## :wrench: Instalação

### Instalação Manual

Para instalar e executar o Correio Elegante localmente, siga estas etapas:

1. Clone o repositório:
```bash
git clone https://github.com/MrNullus/correio-elegante.git
cd correio-elegante
```

2. Instale e execute o backend:
```bash
cd server
npm install
npm run dev
```

3. Em outro terminal, instale e execute o frontend:
```bash
cd client
npm install
npm run dev
```

## :whale: Docker

Para facilitar a configuração do ambiente, você pode usar Docker:

1. Certifique-se de ter o Docker e o Docker Compose instalados em seu sistema.

2. Execute o seguinte comando na raiz do projeto:
```bash
docker-compose up
```

Isso iniciará tanto o frontend quanto o backend em contêineres separados.

## :rocket: Uso

Após a instalação, você pode acessar:

- Frontend: http://localhost:5173
- Backend API: http://localhost:3000
- Documentação da API (Swagger): http://localhost:3000/api-docs

## :memo: Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para obter mais detalhes.