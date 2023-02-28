Can you help me, making my Docker not needing a password when it wanna ssh to my Nginx web server

Generate an SSH key pair: The first step is to generate an SSH key pair on your Docker container. You can do this by running the following command on your Docker container:

### ssh-keygen -t rsa
// OBS lav den i /root som den beder som default, derved virker alle kommandoer.

This will generate a public and a private key pair in the .ssh directory of your Docker container.

    Copy the public key to the NGINX server: Next, you need to copy the public key from your Docker container to your NGINX server. You can do this by running the following command on your Docker container:

### ssh-copy-id user@nginx-server-ip

Replace user with the username you use to connect to your NGINX server and nginx-server-ip with the IP address of your NGINX server.

    Test the connection: Finally, you can test the connection by running the following command on your Docker container:



### ssh user@nginx-server-ip

This should log you into your NGINX server without prompting you for a password.

Once you have confirmed that the connection works, you can use SSH in your GitHub Actions workflow to copy files to your NGINX server, without requiring a password.

Note that you should be careful when using SSH keys, as they provide access to your server. You should ensure that your Docker container is secure and that you use strong passwords and follow security best practices to protect your server from unauthorized access.