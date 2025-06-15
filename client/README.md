<h2 align="center">💌 Cliente do Correio Elegante</h2>

<p>O cliente do Correio Elegante é uma interface amigável e intuitiva que permite aos usuários enviar mensagens personalizadas de forma fácil e rápida.</p>

<p align="center">
  <img alt="React" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
  <img alt="Vite" src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">
  <img alt="React Router" src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white">
  <img alt="Axios" src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white">
  <img alt="SASS" src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white">
  <img alt="Docker" src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white">
</p>

<p align="center">
  <img alt="Status" src="https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow">
  <img alt="Versão" src="https://img.shields.io/badge/Versão-0.0.0-blue">
</p>

<p align="center">
  <img src="../.github/correio_elegante_logo.jpg" alt="Cliente Correio Elegante" width="500">
</p>

<h3>🚀 Tecnologias Utilizadas</h3>

<ul>
  <li>React 18</li>
  <li>Vite</li>
  <li>React Router DOM</li>
  <li>Axios</li>
  <li>SASS</li>
  <li>React Icons</li>
  <li>React Google Charts</li>
</ul>

<h3>📁 Estrutura do Projeto</h3>

<pre>
client/
├── public/          # Arquivos públicos
├── src/             # Código-fonte
│   ├── assets/      # Recursos estáticos (imagens, fontes)
│   ├── components/  # Componentes reutilizáveis
│   ├── contexts/    # Contextos React
│   ├── hooks/       # Hooks personalizados
│   ├── pages/       # Páginas da aplicação
│   ├── services/    # Serviços e chamadas de API
│   ├── styles/      # Estilos globais e temas
│   ├── utils/       # Utilitários e funções auxiliares
│   ├── App.jsx      # Componente principal
│   └── main.jsx     # Ponto de entrada
└── package.json     # Dependências e scripts
</pre>

<h3>🔧 Como Executar o Cliente</h3>

<p>Para executar o cliente do Correio Elegante, siga as etapas abaixo:</p>

<ol>
  <li>Certifique-se de que o servidor do Correio Elegante esteja em execução. Consulte a seção do servidor no README para mais informações.</li>
  <li>Abra um terminal e navegue até o diretório do cliente:</li>
</ol>

<pre>
cd client
</pre>

<ol start="3">
  <li>Instale as dependências do cliente:</li>
</ol>

<pre>
npm install
</pre>

<ol start="4">
  <li>Inicie o cliente:</li>
</ol>

<pre>
npm run dev
</pre>

<p>O cliente do Correio Elegante será executado no navegador, e você poderá acessá-lo através do endereço <code>http://localhost:5173</code>.</p>

<h3>🏗️ Build para Produção</h3>

<p>Para criar uma versão otimizada para produção, execute:</p>

<pre>
npm run build
</pre>

<p>Os arquivos de build serão gerados no diretório <code>dist/</code>.</p>

<h3>🎨 Personalização</h3>

<p>O cliente do Correio Elegante possui estilos predefinidos, mas você pode personalizá-lo de acordo com suas preferências. Os arquivos de estilos estão localizados em <code>src/styles/</code>, onde você pode modificar cores, fontes e outros elementos visuais.</p>

<h3>⚙️ Configurações do Servidor</h3>

<p>Certifique-se de configurar corretamente as informações de conexão com o servidor. Por padrão, o cliente tenta se conectar ao servidor em <code>http://localhost:3000</code>. Se o servidor estiver em execução em um endereço diferente, você precisará ajustar essa configuração.</p>

<h3>🐳 Docker</h3>

<p>Para executar o cliente em um contêiner Docker, você pode usar o Dockerfile na raiz do projeto ou o docker-compose.yml para executar todo o sistema.</p>

<pre>
# Construir a imagem
docker build -t correio-elegante-client .

# Executar o contêiner
docker run -p 5173:5173 correio-elegante-client
</pre>

<h3>🔒 Autenticação e Permissões</h3>

<p>O cliente do Correio Elegante possui recursos de autenticação e permissões para garantir a segurança e privacidade dos usuários. Apenas usuários autenticados têm acesso às funcionalidades completas do sistema.</p>

<h3>📱 Responsividade</h3>

<p>O cliente foi desenvolvido com foco em responsividade, garantindo uma experiência consistente em dispositivos móveis, tablets e desktops.</p>

<h3>📢 Feedback e Contribuições</h3>

<p>Valorizamos o seu feedback e contribuições para tornar o Correio Elegante ainda melhor! Se você tiver alguma sugestão, relatório de bug ou desejar contribuir com código, fique à vontade para abrir uma issue ou pull request neste repositório.</p>

<p>Esperamos que você aproveite a experiência com o cliente do Correio Elegante! 🎉</p>