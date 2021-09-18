const http = require('http');
const fs = require('fs');


try {
    const data = fs.readFileSync('hi.txt', 'utf8');
    console.log(data);
} catch (err) {
    console.error(err);
}


const HOSTNAME = "localhost";
const PORT = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(PORT, HOSTNAME, () => {
    console.log('Server runnung at http://localhost:3000/');
});