const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Promotion = require('../models/promotions');
const { response } = require('../app');

const promotionsRouter = express.Router();
promotionsRouter.use(bodyParser.json());
promotionsRouter.route('/')
.get((req,res,next)=>{ 
    Promotion.find({})
    .then((Promotions) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(Promotions);
    }, (err) => next(err))
    .catch((err) => next(err));
    
})
.post((req,res,next)=>{
    Promotion.create(req.body)
    .then((Promotions)=>{
        console.log('Promotions Created', Promotions);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(Promotions);
    }, (err) => next(err))
    .catch((err) => next(err));
    
})

.put((req,res,next)=>{
    res.statusCode= 403;
    res.end('PUT operation not supported on Promotion');
})
.delete((req,res,next)=>{
    Promotion.remove({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

promotionsRouter.route('/:promotionsId')
.get((req,res,next)=>{
    Promotion.findById(req.params.promotionsId)
    .then((promotions)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(promotions);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req,res,next)=>{
    res.statusCode= 403;
    res.end('POST operation not supported on Promotion /Promotion/'+req.params.promotionsId);
})
.put((req,res,next)=>{
    Promotion.findByIdAndUpdate(req.params.promotionsId, {
        $set: req.body
    },{new: true})
    .then((promotions)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(promotions);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete((req,res,next)=>{
    Promotion.findByIdAndRemove(req.params.promotionsId)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

module.exports = promotionsRouter
