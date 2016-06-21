var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var User = require('../models/user');
var Client = require('../models/client');

//Middleware to verify token and user
router.use('/', function( req,res, next) {
    jwt.verify(req.query.token, 'secretmakesureyouchangethis', function(err, decoded) {
        if (err) {
            return res.status(404).json({
                title: 'An errors occured while decoding token',
                error: err
            })
        }
        next();
    });
})

//create new client
router.post('/', function(req, res) {
    var decoded = jwt.decode(req.query.token);
    User.findById(decoded.user_id, function(err, decodedUser){
        if(err) {
            return res.status(401).json({
                title: 'User dont match decoded token',
                error: err
            })
        }
        Client.create(req.body, function(err, newClient) {
            if(err) {
                return res.status(404).json({
                    title: 'Failed to create user',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Client created successfully',
                obj: {firstName: newClient.firstName}
            });
        });
    });
    
});