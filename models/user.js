var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');
var bcrypt = require('bcrypt-nodejs');

var userSchema = new Schema({
    firstName: {type: String, required: true},
    lastName : {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    admin: {type: Boolean, default: false},
    clients: [{type: Schema.Types.ObjectId, ref: 'Client'}]
});

userSchema.plugin(mongooseUniqueValidator);

userSchema.pre('save', function(next) {
  var user = this;
  var SALT_FACTOR = 10;

  if (!user.isModified('password')) return next();

  bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function(userLoginPassword, passwd) {
  bcrypt.compare(userLoginPassword, this.password, function(err, isMatch) {
    if (err) return passwd(err);
    passwd(null, isMatch);
  });
};


module.exports = mongoose.model('User', userSchema);