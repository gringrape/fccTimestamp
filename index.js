const http = require('http');
const server = http.createServer();

const requestListener = (req, res) => {
  if (req.method === 'GET') {
    res.end('hello world!\n');
  }
  res.end();
};

server.on('request', requestListener);

server.listen('4242', 'localhost', () => {
  console.log('server listening...');
});