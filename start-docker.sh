#!/bin/bash

echo "Iniciando o ambiente Docker do Correio Elegante..."

# Verificar se o Docker está instalado
if ! command -v docker &> /dev/null; then
    echo "Docker não encontrado. Por favor, instale o Docker antes de continuar."
    exit 1
fi

# Verificar se o Docker Compose está instalado
if ! command -v docker-compose &> /dev/null; then
    echo "Docker Compose não encontrado. Por favor, instale o Docker Compose antes de continuar."
    exit 1
fi

# Criar arquivos .env a partir dos exemplos, se não existirem
if [ ! -f "./server/.env" ]; then
    echo "Criando arquivo .env para o servidor a partir do exemplo..."
    cp ./server/.env.example ./server/.env
    echo "Arquivo .env criado para o servidor. Por favor, edite-o com suas configurações."
fi

if [ ! -f "./client/.env" ]; then
    echo "Criando arquivo .env para o cliente a partir do exemplo..."
    cp ./client/.env.example ./client/.env
    echo "Arquivo .env criado para o cliente. Por favor, edite-o com suas configurações."
fi

# Iniciar os contêineres
echo "Iniciando os contêineres Docker..."
docker-compose up -d

echo "Ambiente Docker do Correio Elegante iniciado com sucesso!"
echo "Servidor: http://localhost:3000"
echo "Cliente: http://localhost:5173"
echo "Documentação da API: http://localhost:3000/api-docs"