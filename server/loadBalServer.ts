import express, {
  Express,
  Request,
  Response,
  NextFunction,
  ErrorRequestHandler,
} from 'express';

import proxy from 'http-proxy';

const loadBalancer = proxy.createProxyServer();

// Server Addresses
const serverAddresses: string[] = ['http://localhost:4000','http://localhost:4001', 'http://localhost:4002'];

// Counter to keep track of next server to handle a request
let currentServerIndex: number = 0;

// Create Express server for load balancing
const app: Express = express();

// Route to handle and distribute incoming requests via round-robin
app.use((req, res) => {
  
  // Address of next server
  const nextServer: string = serverAddresses[currentServerIndex];

  console.log(nextServer);

  // Proxy the request to the selected server
  loadBalancer.web(req, res, { target: nextServer});

  // Update the counter for the next request
  currentServerIndex = (currentServerIndex + 1) % serverAddresses.length;
})

const PORT = 3000;

// Listeners
app.listen(PORT, () => console.log('Load balancer server running on port ', PORT));