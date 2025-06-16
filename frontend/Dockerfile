FROM node:22-alpine3.21 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm i

COPY . .

RUN npm run build