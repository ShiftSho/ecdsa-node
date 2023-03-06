## ECDSA Node

This project is an example of using a client and server to facilitate transfers between different addresses. Since there is just a single server on the back-end handling transfers, this is clearly very centralized. We won't worry about distributed consensus for this project.

However, something that we would like to incoporate is Public Key Cryptography. By using Elliptic Curve Digital Signatures we can make it so the server only allows transfers that have been signed for by the person who owns the associated address.

### Video instructions
For an overview of this project as well as getting started instructions, check out the following video:

https://www.loom.com/share/0d3c74890b8e44a5918c4cacb3f646c4
 
### Client

The client folder contains a [react app](https://reactjs.org/) using [vite](https://vitejs.dev/). To get started, follow these steps:

1. Open up a terminal in the `/client` folder
2. Run `npm install` to install all the depedencies
3. Run `npm run dev` to start the application 
4. Now you should be able to visit the app at http://127.0.0.1:5173/

### Server

The server folder contains a node.js server using [express](https://expressjs.com/). To run the server, follow these steps:

1. Open a terminal within the `/server` folder 
2. Run `npm install` to install all the depedencies 
3. Run `node index` to start the server 

The application should connect to the default server port (3042) automatically! 

_Hint_ - Use [nodemon](https://www.npmjs.com/package/nodemon) instead of `node` to automatically restart the server on any changes.

Here are some example wallet address/private key combinations for testing the addresses stored as "balances" in the index.js file:
"0x3106af1618b6d3255700bd769e6c51b88d5ebcf8": private key: 1b436633d4df92412364e7b43245adc313913de75a09325dc1730f2273b0596c
"0x9d167e7dae24b4e1b2432966334d473dd74862f9": private key: 58822e9d1899c62c0ea7b425831e06897dd9608169194a880da6d287d15adf14
"0xee986c801fb788d40c20aeaad42e4763ae46e7fe": private key: 0dda4ddb137e9c0b87a87de1f30bae068dfd836349a3dc26f43c5801eac852b2

