FROM node:16 as build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install 
COPY . .
RUN npm run build
CMD ['node', 'server.js']

EXPOSE 3000


