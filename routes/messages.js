var express  = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var Message = require('../models/message');
var User = require('../models/user');

router.get('/', function(req, res) {
    Message.find()
     .populate('user', 'firstName')
     .exec(function(err, docs) {  //exec is used so multiple queries can be executed.
        if (err) {
            return res.status(404).json({
                title: 'an error occured',
                error: err
            });
        }
        res.status(200).json({
            messages :"Received",
            obj: docs
        });

    });
});

//Middleware to verify token 
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



router.post('/', function (req, res) {
    var decoded =  jwt.decode(req.query.token);
    User.findById(decoded.user._id, function (err, doc) {
        if(err) {
            res.status(404).json({
                title: 'User (id) dont match decoded token',
                error: err
            });
        }
        var message = new Message({ 
                            content: req.body.content, 
                            user: doc 
        });
        message.save(function(err, result) {
            if (err) {
                return res.status(404).json({
                    title: 'An error occured',
                    error: err
                });
            }
            doc.messages.push(result);
            doc.save();
            res.status(201).json({
                message: 'Message saved',
                obj: result
            });
         });
    });
});


router.patch('/:id', function(req, res) {
    var decoded = jwt.decode(req.query.token);
    
    User.findById(decoded.user._id, function(err, doc) {

        if (err) {
            return res.status(404).json({
                title: 'error occured finding user',
                error: err
            });
        }
        // console.log('Decoded Id ' + decoded.user._id)    needs refactoring and below findByIdAndUpdate needs to be broken into findBy Id and Save methods
        // console.log('Callback  ' + doc._id)
        // if (doc._id != decoded.user._id) {
        //     return res.status(401).json({
        //         title: 'Not Authorized',
        //         error: {message: `Message created by other user`}
        //     }); 
        // }
        
        Message.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
            if (err) {
                return res.status(404).json({
                    title: 'An error occured during update',
                    error: err
                });            
            } 
            return res.status(201).json({
                message: 'Message updated',
                obj: result
            });
    });
  });

});

router.delete('/:id', function(req, res) {
    var decoded = jwt.decode(req.query.token);
    var messageResponse = req.body;
    User.findById(decoded.user._id, function(err, doc) {
        if (err) {
            return res.status(404).json({
                title: 'error occured finding user',
                error: err
            });
        }
         Message.findByIdAndRemove(req.params.id, req.body, function(err, result) {
        if (err) {
            return res.status(404).json({
                title: 'An error occured during delete',
                error: err
            });            
        }   if (doc.user !== decoded.user._id) {
            return res.status(401).json({
                title: 'Not Authorized',
                error: {message: `Message created by other user`}
            }); 
        }   
        return res.status(200).json({
            message: 'Message deleted',
            obj: result
        });
      });
    });
});


module.exports = router;
