FROM node:20.9.0-alpine

WORKDIR /usr/src/app

COPY ./ffit-1 .
RUN rm -rf node_modules

RUN npm i

CMD ["npm", "run", "dev"]