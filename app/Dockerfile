# app/Dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

RUN npm run build

# Serve production build
RUN npm install -g serve
EXPOSE 3000

CMD ["serve", "-s", "build", "-l", "3000"]
