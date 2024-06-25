FROM node:16 as build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install 
COPY . .
RUN npm run build

RUN ls /usr/src/app/build

FROM nginx:alpine
#COPY --from=build /usr/src/app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
RUN node server.js 

RUN ls /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
