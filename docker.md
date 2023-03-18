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


      - name: copy file via ssh key
        uses: appleboy/scp-action@master
        with:
          host: 192.168.87.185
          username: root
          port: 22
          password: Kastholm95
          source: "/app/dist/*"
          target: "/var/www/"


          scp -r /app/dist/* root@192.168.87.185:/var/www/

                - name: Copy files to server
        run: scp -r /app/.output/public/* root@192.168.87.185:/var/www/webtify.website/musikmekanikeren

        scp -r ./.output/public/* root@192.168.87.185:/var/www/webtify.website/musikmekanikeren



         - name: Checks the action code from GitHub
        uses: actions/checkout@v2
      - name: Login to Docker Hub using username and pass
        uses: docker/login-action@v1
        with:
          username: ${{ secrets.DOCKER_USER }}
          password: ${{ secrets.DOCKER_PASS }}
      - name: Build and tag Docker image
        run: |
          docker build . -t kastholm/musikmekanikeren:docker
          docker push kastholm/musikmekanikeren:docker




                - name: executing remote ssh commands using ssh key
        uses: appleboy/ssh-action@v0.1.8
        with:
          host: 192.168.87.185
          username: root
          key: ${{ secrets.SSH_KEY }}
          script: |
            whoami
            ls -al

      - name: executing remote ssh commands using ssh key
        uses: appleboy/ssh-action@v0.1.8
        with:
          host: 192.168.87.185
          username: root
          key: ${{ secrets.SSH_KEY }}
          script: |
            cd /app/dist
            scp -r ./* root@192.168.87.185:/var/www/


            ScrollTrigger.refresh()