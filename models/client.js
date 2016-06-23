var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var User = require('./user');

var clientSchema = new Schema({
    cl_firstName: {type: String, required: true},
    cl_middleName: {type: String, required: true},
    cl_lastName: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Client', clientSchema);