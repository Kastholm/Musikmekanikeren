//Building from Dockerfile
docker build -t kastholm/musikmekanikeren:main .

//Run portforwarding
docker run -p 8080:8080  kastholm/musikmekanikeren:main

//Docker login
docker login

//Use the following command to push your Docker image to Docker Hub:
docker push kastholm/musikmekanikeren:main

//Pull the entire Docker down
docker pull kastholm/musikmekanikeren:main


docker build --tag="npm_app:latest" -f Dockerfile . 
