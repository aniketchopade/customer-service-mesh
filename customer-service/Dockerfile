FROM node:12-slim

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

EXPOSE 3001

ENTRYPOINT npm start