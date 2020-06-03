const http = require('http');
const server = http.createServer();

const helloListener = (req, res) => {
  console.dir(req);
};

server.on("connection", helloListener);

server.listen('4242', 'localhost');