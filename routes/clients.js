var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var json2csv = require('json2csv');
var fs = require('fs');


var User = require('../models/user');
var Client = require('../models/client');

//Middleware to verify token and user
router.use('/', function(req,res, next) {
    jwt.verify(req.query.token, 'secretmakesureyouchangethis', function(err, decoded) {
        if (err) {
            console.log(err.name);
            if (err.name == 'TokenExpiredError') {
                return res.status(403).json({
                    title: 'Re-login',
                    error: err
                });
            }
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
                } , 
                function(err, results) {
        if(err) {
            console.log(err)
            return res.status(404).json({
                title: 'Error occured during search',
                error: err

            });
        }
        // console.log("Show me Keys " +  Object.keys(Client.schema.paths) + '/n');
        // console.log(results);
        res.status(200).json({
            message: 'Search results found',
            obj: results
        })
    });
});

//Download or export clients
router.get('/download-clients', function(req, res) {
    console.log("request received");
    var decoded = jwt.decode(req.query.token);
    User.findById(decoded.user._id, function(err, loggedInUser) {    //get logegd in user
        if(err) {
            return res.status(401).json({
                title: 'Invalid token user request',
                error: err
            });
        }   
        console.log("clients found")
        Client.find({}, function(err, clients) {
            if (err) {
                return res.status(404).json({
                    title: 'Error occured during finding clients',
                    error: err
                });

             } 
             console.log(Object.keys(Client.schema.paths));
             json2csv({ data: clients, fields: Object.keys(Client.schema.paths) }, function(err, csvData) {
                    if(err) {
                        return res.status(404).json({
                            title: 'Error occured during json2csv',
                            error: err
                        });
                    }
                    console.log("csv-data" + csvData);
                    res.attachment('download-clients.csv');
                    res.end(csvData, 'UTF-8');

                    
             });

        });
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
                obj: {cl_firstName: newClient.cl_firstName}
            });
        });
    });
    
});


//Get client for edit
router.get('/:id', function(req,res) {
    var decoded = jwt.decode(req.query.token);
    User.findById(decoded.user_id, function(err, decodedUser){
        if(err) {
            return res.status(401).json({
                title:'User dont match the decoded token',
                error: err
            });
        }
        Client.findById(req.params.id, function(err, client) {
            if(err) {
                return res.status(404).json({
                    title: 'Client not found',
                    error: err
                });
            }            
            res.status(200).json({
                message: 'Client retrieved',
                obj: client
            });
        });
    });
});


//Update client
router.patch('/:id', function(req, res, next) {
    var decoded = jwt.decode(req.query.token);
    console.log(req.body);
    User.findById(decoded.user._id, function(err, loggedInUser) {    //get logegd in user
        if(err) {
            return res.status(401).json({
                title: 'Invalid token user request',
                error: err
            })
        }                
        Client.findById(req.params.id, function(err, foundClient) {     //get existing record for client
            if(err) {
                return console.log(err);
            }
            Client.findByIdAndUpdate(req.params.id, req.body, function(err, updatedClient){    //Update client records 
                if(err) {
                    return res.status(401).json({
                        title: 'Error retrieving user record or user save operation!!',
                        error: err
                    });
                }
                updatedClient.modified_by = decoded.user;  //currently logegd in user who is modifying record
                var isodate = new Date().toISOString()
                updatedClient.modified_date = isodate;
                updatedClient.save(function(err, result) {
                    if(err) {
                        console.log(err);
                            return res.status(401).json({
                                title: 'Problem saving user to modify or created',
                                error: err
                        });
                    }
                    res.status(200).json({
                        message: 'Successfully edited user record',
                        obj: result
                    });

                    });

                });
        });

        // });
        
    });
})




module.exports = router;
