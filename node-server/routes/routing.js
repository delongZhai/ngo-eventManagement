const express = require ('express');
const router = express.Router();
const bodyParser = require ('body-parser');
const Event = require('../models/Event.js');
const User = require('../models/User.js');

router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json());

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  //get routes
  router.get('/events', function(req,res,next){
    Event.find(req.body,function (err, Event){
        if (err) return next(err);
        res.json(Event);
    });
  });

  router.get('/events/:id', function(req, res, next){
    Event.findById(req.params.id, function (err, Event){
        if (err) return next(err);
        res.json(Event);
    });
  });

  router.get('/users', function(req,res,next){
    User.find(req.body, function (err, User){
        if (err) return next(err);
        res.json(User);
      });
  });

  router.get('/users/:id', function(req, res, next){
    User.findById(req.params.id, req.body, function (err, User){
        if (err) return next(err);
        res.json(User);
    });
  });

  //post routes
  router.post('/events', function(req, res, next){
    Event.create(req.body, function(err, Event){
        if (err) return next(err);
        res.json(Event);
    });
  });

  router.post('/users', function(req, res, next){
      User.create(req.body, function(err, User){
          if (err) return next(err);
          res.json(User);
      });
  });

  //delete routes
  router.delete('/events/:id', function(req,res,next){
      Event.findByIdAndRemove(req.params.id, req.body, function(err, Event){
          if (err) return next(err);
          res.json(Event);
      });
  });

  router.delete('/users/:id', function(req,res,next){
      User.findByIdAndRemove(req.params.id, req.body, function(err, User){
          if(err) return next(err);
          res.json(User);
      });
  });

  //post routes
  router.put('/events/:id', function(req, res, next){
    Event.findByIdAndUpdate(req.params.id, req.body, function(err,Event){
        if(err) return next(err);
        res.json(Event);
    });
  });

  router.put('/users/:id', function(req,res,next){
      User.findByIdAndUpdate(req.params.id, req.body, function(err, User){
        if(err) return next(err);
        res.json(User);
      });
  });

  module.exports = router;