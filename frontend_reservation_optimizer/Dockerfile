FROM node:16 as build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install 
COPY . .
RUN npm run build
RUN node server.js

EXPOSE 3000
