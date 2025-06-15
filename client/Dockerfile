FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173

# Usar o script dev atualizado que já inclui --host 0.0.0.0
CMD ["npm", "run", "dev"]