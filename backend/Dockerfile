FROM node:22-alpine3.21 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm i

COPY . .
RUN npm run build

FROM node:22-alpine

WORKDIR /app

COPY --from=builder /app/package*.json ./
RUN npm i --omit=dev

COPY --from=builder /app/dist ./dist

CMD [ "node", "dist/main" ]

EXPOSE 3000
