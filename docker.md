//Building from Dockerfile
docker build -t kastholm/musikmekanikeren:test .

//Run portforwarding
docker run -p 8080:8080  kastholm/musikmekanikeren:test

//Docker login
docker login

//Use the following command to push your Docker image to Docker Hub:
docker push kastholm/musikmekanikeren:test

//Pull the entire Docker down
docker pull kastholm/musikmekanikeren:test


docker build --tag="npm_app:latest" -f Dockerfile . 
