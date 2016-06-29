var mongoose = require('mongoose');
var mongooseUniqueValidator = require('mongoose-unique-validator');
//var autoIncrement = require('mongoose-auto-increment');
var Schema = mongoose.Schema;

var AutoIncrement = require('mongoose-sequence');

var User = require('./user');


var clientSchema = new Schema({
    cl_LD_Id: {type: String, required: false},
    seq: { type: Number, default: 0 },
    cl_firstName: {type: String, required: true},
    cl_middleName: {type: String, required: true},
    cl_lastName: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    created_date: {type: Date, required: false, default: Date.now},
    modified_by: {type: Schema.Types.ObjectId, ref: 'User'},
    modified_date: {type: Date, required: false, default: Date.now}
});

clientSchema.plugin(mongooseUniqueValidator);

var Client = mongoose.model('Client', clientSchema)

// var entitySchema = mongoose.Schema({
//     testvalue: {type: String}
// });

clientSchema.plugin(AutoIncrement, {inc_field: 'seq'});

// clientSchema.pre('save', function(next) {
//     var doc = this;
//     Client.findByIdAndUpdate(_id: _id, {$inc: { seq: 1} }, function(error, client)   {
//         if(error)
//             return next(error);
//         doc.testvalue = client.seq;
//         next();
//     });
// });

// clientSchema.plugin(autoIncrement.plugin,{ model: 'Client', field: 'cl_LD_Id', startAt: 1, incrementBy: 1})

module.exports = Client;