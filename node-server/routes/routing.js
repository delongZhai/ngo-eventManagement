const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cors = require('cors');

const Event = require('../models/Event.js');
const User = require('../models/User.js');

router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json());

router.use(function(req, res, next)
{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//get routes
router.get('/events', function(req,res,next)
{
    Event.find(req.body,function (err, Event)
    {
        if (err) return next(err);
        res.json(Event);
    });
});

router.get('/users', function(req,res,next)
{
    User.find(req.body, function (err,User)
    {
        if (err) return next(err);
        res.json(User);
    });
});

//post routes
router.post('/events', function(req, res, next)
{
    Event.create(req.body, function(err, Event)
    {
        if (err) return next(err);
        res.json(Event);
    });
});

router.post('/register', function(req, res) {
    var saltRounds = 8;
    console.log(req.body);
    bcrypt.hash(req.body.password, saltRounds, function(err, hash)
    {
        if(err) {return res.status(500).json({error: err});}
        else
        {
            const user = new User(
            {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: hash,
                contactNum: req.body.contactNum,
                address: req.body.address,
                adminRole: req.body.adminRole
            });
            user.save().then(function(result)
            {
                //console.log(result);
                res.status(200).json({success: 'New user has been created'});
            }).catch(error => {res.status(500).json({error: err});});
        }
    });
});

router.post('/login', function(req, res)
{
    User.findOne({email: req.body.email}).then(function(user)
    {
        bcrypt.compare(req.body.password, user.password, function(err, result)
        {
            if(err)
            {
                return res.status(401).json({failed: 'Unauthorized Access'});
            }
            //If the user’s credentials email and password are valid then in response, we need to return a JWT token. 
            //So let us generate the token and return to the user.
            if(result)
            {
                const JWTToken = jwt.sign
                (
                    {
                        email: user.email,
                        _id: user._id,
                        adminRole: user.adminRole
                    },
                    'secret',
                    {
                        expiresIn: '2h'
                    }
                );
                var mess = "Welcome";
                if(user.adminRole)
                {
                    mess = "Welcome admin";
                }
                else
                {
                    mess = "Welcom user";
                }
                return res.status(200).json
                ({
                    success: mess,
                    token: JWTToken
                });
            }
            return res.status(401).json({failed: 'Unauthorized Access'});
        });
    })
    .catch(error => {
       res.status(500).json({
          error: error
       });
    });;
});

//delete routes
router.delete('/events/:id', function(req,res,next)
{
    Event.findByIdAndRemove(req.params.id, req.body, function(err, Event)
    {
          if (err) return next(err);
          res.json(Event);
    });
});

router.delete('/users/:id', function(req,res,next)
{
    User.findByIdAndRemove(req.params.id, req.body, function(err, User)
    {
        if(err) return next(err);
        res.json(User);
    });
});

  //post routes
router.put('/events/:id', function(req, res, next)
{
    Event.findByIdAndUpdate(req.params.id, req.body, function(err,Event)
    {
        if(err) return next(err);
        res.json(Event);
    });
});

router.put('/users/:id', function(req,res,next)
{
    User.findByIdAndUpdate(req.params.id, req.body, function(err, User)
    {
        if(err) return next(err);
        res.json(User);
    });
});

module.exports = router;