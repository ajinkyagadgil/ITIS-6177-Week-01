const http = require('http');
const port = 8080;
const host = '127.0.0.1';

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('content-type', 'text/plain');
    response.end("Hello World");
});

server.listen(port, host, () => {
    console.log(`The server is running on http://${host}:${port}`);
})