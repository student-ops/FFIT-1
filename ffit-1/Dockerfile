FROM node:20.9.0-alpine

WORKDIR /usr/src/app

COPY . .
RUN rm -rf node_modules

RUN npm install -g npm@latest && npm install create-next-app

RUN npm install -g npm@latest && npm install -g @line/create-liff-app