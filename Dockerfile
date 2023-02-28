FROM node:latest

RUN mkdir /app

WORKDIR /app

COPY package*.json ./


RUN npm config set //npm.greensock.com/:_authToken=1ded3c6b-0848-40fd-a209-097c9c59f2ed
RUN npm config set @gsap:registry https://npm.greensock.com
RUN npm install gsap@npm:@gsap/shockingly
RUN npm install gsap --registry https://npm.greensock.com
RUN npm config delete //npm.greensock.com/:_authToken
RUN npm config delete @gsap:registry
RUN npm i

COPY . .

RUN npm run build
RUN npm run generate
RUN scp -r /app/dist/* root@192.168.87.185:/var/www/

ENV PORT=8080

EXPOSE 8080

CMD ["npm", "run", "dev"]