
FROM node:18 as build
WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM nginx:alpine
COPY --from=build /app/dist/quizgame-frontend /usr/share/nginx/html
EXPOSE 80
