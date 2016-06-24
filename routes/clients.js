var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');


var User = require('../models/user');
var Client = require('../models/client');

//Middleware to verify token and user
router.use('/', function(req,res, next) {
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

//Searches multiple fields (indexed) with Or and regex mongodb clause 
router.post('/search', function(req,res) {
    console.log("request-body - " + req.body.searchbox)
    Client.find({ $or: [ {cl_LD_Id: new RegExp(req.body.searchbox, 'i')},
                         {cl_firstName: new RegExp(req.body.searchbox, 'i')}, 
                         {cl_lastName: new RegExp(req.body.searchbox, 'i')} 
                       ] 
                } , function(err, results) {
        if(err) {
            console.log(err)
            return res.status(404).json({
                title: 'Error occured during search',
                error: err

            });
        }
        console.log(results)
        res.status(200).json({
            message: 'Search results found',
            obj: results
        })
    });
});




//get clients
router.get('/', function(req,res) {
    var decoded = jwt.decode(req.query.token);
    User.findById(decoded.user_id, function(err, decodedUser) {
        if(err) {
            return res.status(401).json({
                title: 'User dont match decoded token',
                error: err
            });
        }
        Client.find()
            .populate('user', 'firstName lastName')
            .exec(function(err, clients) {
                if(err) {
                    return res.status(404).json({
                        title: 'Error occured during retieving client',
                        error: err
                    });
                }
                console.log(clients);
                res.status(200).json({
                    message: 'Clients retrieval success',
                    obj: clients    
            });
            });

    });
});


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
                console.log(err);
                return res.status(404).json({
                    title: 'Failed to create user',
                    error: err
                });
            }
            //newClient.cl_LD_Id = decoded.user.FE_Code ? decoded.user.FE_Code + newClient.seq : 'ZZZ' + newClient.seq;
            console.log(decoded);
            var test;
            if (decoded.user.FE_Code != null) {
                 newClient.cl_LD_Id = decoded.user.FE_Code + '_' + newClient.seq;
            } else {
                 newClient.cl_LD_Id =  'ZZZ' + '_' + newClient.seq;
            }
            console.log(newClient);
            newClient.user = decoded.user;
            console.log(newClient.user)
            newClient.save()
            res.status(200).json({
                message: 'Client created successfully',
                obj: {firstName: newClient.cl_firstName}
            });
        });
    });
    
});

module.exports = router;
