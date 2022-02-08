const express = require('express');
const http = require('http');

const hostname = 'localhost';
const port = 3001;

const app = express();

app.use((req,res, next) =>{
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.end('<html><body><h1>This is an Express server</html></body></h1>');

});

const server = http.createServer(app);

server.listen(port,hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)

});