FROM node:22-alpine3.21 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm i 

COPY . .

RUN npm run build

FROM nginx:stable-alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf