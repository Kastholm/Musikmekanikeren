FROM node:latest

RUN mkdir /app

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

RUN npm run build

ENV PORT=8080

EXPOSE 8080

CMD ["npm", "run", "dev"]