FROM node:22-alpine as builder

WORKDIR /app

COPY package.json .
RUN npm install

COPY . .
RUN npm run build

FROM nginx:latest as server

EXPOSE 80

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist /var/www/html

CMD ["nginx", "-g", "daemon off;"]