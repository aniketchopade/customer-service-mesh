FROM node:12-slim

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

EXPOSE 3003

ENTRYPOINT npm start