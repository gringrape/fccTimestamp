const http = require('http');
const server = http.createServer();

const requestListener = (req, res) => {
  const path = '/api/timestamp';
  if (req.method === 'GET' && req.url.startsWith(path)) {
    const pathVal = req.url.slice(path.length + 1);
    const date = new Date(pathVal);
    res.setHeader('Content-Type', 'application/json'); 
    if (date == 'Invalid Date') {
      res.write(`{"error": "Invalid Date"}`);
    } else {  
      res.write(`{"unix": ${date.getTime()}, "utc": ${date.toUTCString()}}`);
    }
  } else {
    res.statusCode = 404;
    res.statusMessage = 'Not found';
  }
  res.end();
};

server.on('request', requestListener);

server.listen('4242', 'localhost', () => {
  console.log('server listening...');
});