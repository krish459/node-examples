const express = require('express');
const http = require('http');
const morgan = require('morgan')
const bodyParser = require('body-parser');
const dishRouter = require('./routes/dishRouter');
const leadersRouter = require('./routes/leadersRouter');
const promotionsRouter = require('./routes/promotionsRouter');

const hostname = 'localhost';
const port = 3001;

const app = express();

app.use('/dishes',dishRouter);
app.use('/dishes/:dishId',dishRouter);
app.use('/leaders',leadersRouter);
app.use('/leaders/:leaderId',leadersRouter);
app.use('/promotions',promotionsRouter);
app.use('/promotions/:promotionId',promotionsRouter);

app.use(morgan('dev'));
app.use(bodyParser.json());






app.use(express.static(__dirname + '/public'));
app.use((req,res, next) =>{
    // console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.end('<html><body><h1>This is an Express server</html></body></h1>');

});

const server = http.createServer(app);

server.listen(port,hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)

});