var express = require('express');
var router = express.Router();

var jwt = require('jsonwebtoken');

var User = require('../models/user');


router.get('/', function(req, res, next) {
    var userList = []
    User.find(function(err, docs) {
        if (err) {
            return res.status(404).json({
                title: 'Users failed to be retrieved',
                error: err
            });
        }
        docs.forEach(doc => userList.push({_id: doc._id, firstName: doc.firstName, lastName: doc.lastName, email: doc.email, FE_Code: doc.FE_Code, admin: doc.admin}));        
        //console.log(userList);
        res.status(200).json({
        message: 'Users successfully retrieved',
        obj: userList
    });
        
    });

});


router.get('/:id', function(req, res, next) {
    console.log(req.params.id);
    User.findById(req.params.id, function(err, doc) {
        if (err) {
            return res.status(404).json({
                title: 'Users failed to be retrieved',
                error: err
            });
        }
        res.status(200).json({
            message: 'User restrieved',
            obj: {firstName: doc.firstName, lastName: doc.lastName, email: doc.email, FE_Code: doc.FE_Code, admin: doc.admin}
        })
        
    });

});




router.post('/', function( req, res, next) {

    var user = new User({
        firstName: req.body.firstName,
        lastName : req.body.lastName,
        password: req.body.password,
        email: req.body.email,
        FE_Code: req.body.FE_Code,
        admin: req.body.admin        
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
            obj: {firstName: newUser.firstName, lastName: newUser.lastName }
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


// //Middleware to verify token and user
// router.use('/', function(req,res, next) {
//     jwt.verify(req.query.token, 'secretmakesureyouchangethis', function(err, decoded) {
//         if (err) {
//             return res.status(404).json({
//                 title: 'An errors occured while decoding token',
//                 error: err
//             })
//         }
//         next();
//     });
// })


router.patch('/:id', function(req, res, next) {
    var decoded = jwt.decode(req.query.token);
    console.log(req.body);

    User.findById(decoded.user._id, function(err, loggedInUser) {
        if(err) {
            return res.status(401).json({
                title: 'Invalid token user request',
                error: err
            })
        }
        if(!loggedInUser.admin) {    //if logged in user is admin only then edit the requested user details
            return res.status(401).json({
                title: 'You need to be admin to edit this user',
                error: 'You need to be admin to edit this user'
            });
        }
        
        User.findByIdAndUpdate(req.params.id, req.body, function(err, updatedUser){
            if(err) {
                return res.status(401).json({
                    title: 'Error retrieving user record or user save operation!!',
                    error: err
                });
            }
            updatedUser.password = req.body.password;   //Additional callback just because mongodb docs state password http://blog.mongodb.org/post/32866457221/password-authentication-with-mongoose-part-1 with bcrypt can only be hashed on save() method and not on update()
            updatedUser.save(function(err, result) {
                if(err) {
                    console.log(err);
                        return res.status(401).json({
                            title: 'Problem with password saving',
                            error: err
                    });
                }
                res.status(200).json({
                    message: 'Successfully edited user record',
                    obj: { email: result.email }
                });

            });


        });

        // });
        
    });
})



module.exports = router;