//Building from Dockerfile
docker build -t kastholm/musikmekanikeren:docker .

//Run portforwarding
docker run -p 8080:8080  kastholm/musikmekanikeren:docker

//Docker login
docker login

//Use the following command to push your Docker image to Docker Hub:
docker push kastholm/musikmekanikeren:docker

//Pull the entire Docker down
docker pull kastholm/musikmekanikeren:docker


docker build --tag="npm_app:latest" -f Dockerfile . 




RUN npm config set //npm.greensock.com/:_authToken=1ded3c6b-0848-40fd-a209-097c9c59f2ed
RUN npm config set @gsap:registry https://npm.greensock.com
RUN npm install gsap@npm:@gsap/shockingly
RUN npm install gsap --registry https://npm.greensock.com
RUN npm config delete //npm.greensock.com/:_authToken
RUN npm config delete @gsap:registry
