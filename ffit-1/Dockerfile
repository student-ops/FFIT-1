FROM node:20.9.0-alpine

WORKDIR /usr/src/app

COPY . .
RUN rm -rf node_modules

RUN npm i

CMD ["npm", "run", "dev"]