const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
res.end('Hei maailma!');
});

server.listen(PORT, () => {
console.log(`Palvelin käynnissä osoitteessa http://localhost:${PORT}`);
});