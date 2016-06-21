var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clientSchema = new Schema({
    firstName: {type: String, required: true},
    middleName: {type: String, required: true},
    lastName: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Client', clientSchema);

