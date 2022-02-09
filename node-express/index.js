const express = require('express');
const http = require('http');
const morgan = require('morgan')
const bodyParser = require('body-parser');
const dishRouter = require('./routes/dishRouter');

const hostname = 'localhost';
const port = 3001;

const app = express();

app.use('/dishes',dishRouter);

app.use(morgan('dev'));
app.use(bodyParser.json());




// app.get('/dishes/:dishId' , (req,res,next)=>{
//     res.end('Will send details of the dish : '+req.params.dishId+' to you !!');
// });
// app.post('/dishes/:dishId' , (req,res,next)=>{
//     res.statusCode= 403;
//     res.end('POST operation not supported on dishes /dishes/'+req.params.dishId);
// });
// app.put('/dishes/:dishId' , (req,res,next)=>{
//     res.statusCode= 403;
//     res.write('Updating the dish : ' + req.params.dishId)
//     res.end('Will update dish : '+req.body.name+ 'with details ' +req.body.description);
// });
// app.delete('/dishes/:dishId' , (req,res,next)=>{
//     res.end('deleting dish :' +req.params.dishId);
// });

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