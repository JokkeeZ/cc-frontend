FROM node:24 as build

WORKDIR /node/home/app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

FROM nginxinc/nginx-unprivileged

COPY --from=build /node/home/app/dist /usr/share/nginx/html

EXPOSE 8080
