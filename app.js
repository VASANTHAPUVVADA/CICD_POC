const http = require('http');
const port = process.env.PORT || 3000;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, from feature branch!\n');
}).listen(port, () => console.log(`Listening on port ${port}`));
