var express = require('express');
var router = express.Router();

var jwt = require('jsonwebtoken');

var User = require('../models/user');

router.post('/', function( req, res, next) {

    var user = new User({
        firstName: req.body.firstName,
        lastName : req.body.lastName,
        password: req.body.password,
        email: req.body.email            
    });
    user.save(function(err, newUser) {
            if (err) {
                return res.status(404).json({
                    title: 'error occured',
                    error: err
                });
            }
            res.status(200).json({
            message: 'User created',
            obj: [{firstName: newUser.firstName, lastName: newUser.lastName }]
        });       
    });
});


router.post('/signin', function(req,res,next) {
    User.findOne({email: req.body.email }, function(err, doc) {
        if (err) {
            return res.status(404).json({
                title: 'Error occured',
                error: err
            });            
        }   if (!doc) {
            return res.status(404).json({
                title: 'No user found',
                error: {message: `User can\'t be found`}
            }); 
        }  
        doc.comparePassword(req.body.password, function(err, isMatched) {
            if (!isMatched) {
                return res.status(404).json({
                    title: 'Check credentials',
                    error: {message: 'Invalid password. try again!'}
                });
            }         
         
            var token = jwt.sign({user: doc}, 'secretmakesureyouchangethis', {expiresIn: 7200} );
            res.status(200).json({
                message: 'Successfully logged in',
                obj: {'token': token, 
                    'userId': doc._id
                    }
            });
        });
    });
});




module.exports = router;