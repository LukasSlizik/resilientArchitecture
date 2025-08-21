const http = require('http');
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end('{"message": "hello world"}');
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end('{"error": "Not Found"}');
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});