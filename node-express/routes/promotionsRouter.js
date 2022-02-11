const express = require('express');
const bodyParser = require('body-parser');

const promotionsRouter = express.Router();
promotionsRouter.use(bodyParser.json());
promotionsRouter.route('/')

.all( (req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})

.get((req,res,next)=>{
    res.end('Will send all the promotions to you!!');
})
.post((req,res,next)=>{
    res.end('Will add the promotion : ' + req.body.name);
})
.put((req,res,next)=>{
    res.statusCode= 403;
    res.end('PUT operation not supported on Promotion');
})
.delete((req,res,next)=>{
    res.end('Will delete all the promotion for you!!');
});

promotionsRouter.route('/:promotionsId')
.all( (req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})

.get((req,res,next)=>{
    res.end('Will send details of the promotion : '+req.params.promotionsId +' to you !!');
})
.post((req,res,next)=>{
    res.statusCode= 403;
    res.end('POST operation not supported on /promotion/:'+req.params.promotionsId);
})
.put((req,res,next)=>{
    res.statusCode= 403;
    res.write('Updating the promotion : ' + req.params.promotionsId)
    res.end('Will update promotion : '+req.body.name+ 'with details ' +req.body.description);
})
.delete((req,res,next)=>{
    res.end('deleting promotion :' +req.params.promotionsId);
});

module.exports = promotionsRouter
