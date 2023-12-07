FROM node:20.9.0-alpine

WORKDIR /usr/src/app

COPY ./ffit-1/package*.json . 
COPY ./ffit-1/package-lock.json .
RUN npm i

COPY ./ffit-1 .
RUN rm -rf src/pages/samples
RUN npm run build

CMD ["npm", "run", "start"]