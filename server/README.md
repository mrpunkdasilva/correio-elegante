<h2 align="center">💌 Servidor do Correio Elegante</h2>

<p>O servidor do Correio Elegante é uma API RESTful que gerencia o envio e armazenamento de mensagens, além de fornecer funcionalidades de autenticação e gerenciamento de usuários.</p>

<p align="center">
  <img alt="Node.js" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white">
  <img alt="Express.js" src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge">
  <img alt="Firebase" src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black">
  <img alt="Jest" src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white">
  <img alt="Swagger" src="https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black">
  <img alt="Docker" src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white">
</p>

<p align="center">
  <img alt="Status" src="https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow">
  <img alt="Versão" src="https://img.shields.io/badge/Versão-1.0.0-blue">
</p>

<p align="center">
  <img src="../.github/correio_elegante_logo.jpg" alt="Servidor Correio Elegante" width="500">
</p>

<h3>🚀 Tecnologias Utilizadas</h3>

<ul>
  <li>Node.js</li>
  <li>Express</li>
  <li>Firebase (para armazenamento de dados)</li>
  <li>Swagger (para documentação da API)</li>
  <li>Jest (para testes)</li>
  <li>Cors</li>
  <li>Dotenv</li>
</ul>

<h3>📁 Estrutura do Projeto</h3>

<pre>
server/
├── configs/         # Configurações da aplicação
├── controllers/     # Controladores da aplicação
├── entities/        # Modelos de dados
├── routes/          # Rotas da API
├── services/        # Serviços e lógica de negócios
├── utils/           # Utilitários e funções auxiliares
├── app.js           # Configuração do Express
├── index.js         # Ponto de entrada da aplicação
├── swagger.js       # Configuração do Swagger
└── package.json     # Dependências e scripts
</pre>

<h3>🔧 Como Executar o Servidor</h3>

<p>Para executar o servidor do Correio Elegante, siga as etapas abaixo:</p>

<ol>
  <li>Certifique-se de ter o Node.js instalado em seu sistema.</li>
  <li>Abra um terminal e navegue até o diretório do servidor:</li>
</ol>

<pre>
cd server
</pre>

<ol start="3">
  <li>Instale as dependências do servidor:</li>
</ol>

<pre>
npm install
</pre>

<ol start="4">
  <li>Configure as variáveis de ambiente:</li>
</ol>

<p>Crie um arquivo <code>.env</code> na raiz do diretório do servidor com as seguintes variáveis:</p>

<pre>
PORT=3000
FIREBASE_API_KEY=sua_chave_api
FIREBASE_AUTH_DOMAIN=seu_dominio.firebaseapp.com
FIREBASE_PROJECT_ID=seu_projeto_id
FIREBASE_STORAGE_BUCKET=seu_bucket.appspot.com
FIREBASE_MESSAGING_SENDER_ID=seu_sender_id
FIREBASE_APP_ID=seu_app_id
</pre>

<ol start="5">
  <li>Inicie o servidor:</li>
</ol>

<pre>
# Para desenvolvimento com recarga automática
npm run dev

# Para produção
npm start
</pre>

<p>O servidor do Correio Elegante será executado na porta especificada no arquivo <code>.env</code> (padrão: 3000).</p>

<h3>📚 Documentação da API</h3>

<p>A documentação da API está disponível através do Swagger. Após iniciar o servidor, acesse:</p>

<pre>
http://localhost:3000/api-docs
</pre>

<p>Lá você encontrará todos os endpoints disponíveis, seus parâmetros, respostas e exemplos de uso.</p>

<h3>🧪 Testes</h3>

<p>Para executar os testes do servidor, use o seguinte comando:</p>

<pre>
npm test
</pre>

<h3>🔄 Endpoints Principais</h3>

<ul>
  <li><code>GET /api/letters</code> - Listar todas as cartas</li>
  <li><code>POST /api/letters</code> - Criar uma nova carta</li>
  <li><code>GET /api/letters/:id</code> - Obter detalhes de uma carta específica</li>
  <li><code>PUT /api/letters/:id</code> - Atualizar uma carta existente</li>
  <li><code>DELETE /api/letters/:id</code> - Excluir uma carta</li>
  <li><code>GET /api/users</code> - Listar todos os usuários</li>
  <li><code>POST /api/users</code> - Criar um novo usuário</li>
  <li><code>GET /api/users/:id</code> - Obter detalhes de um usuário específico</li>
</ul>

<h3>🐳 Docker</h3>

<p>Para executar o servidor em um contêiner Docker, você pode usar o Dockerfile na raiz do projeto ou o docker-compose.yml para executar todo o sistema.</p>

<pre>
# Construir a imagem
docker build -t correio-elegante-server .

# Executar o contêiner
docker run -p 3000:3000 correio-elegante-server
</pre>

<h3>📢 Feedback e Contribuições</h3>

<p>Valorizamos o seu feedback e contribuições para tornar o Correio Elegante ainda melhor! Se você tiver alguma sugestão, relatório de bug ou desejar contribuir com código, fique à vontade para abrir uma issue ou pull request neste repositório.</p>