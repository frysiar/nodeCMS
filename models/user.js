var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
    name: {type: String, required: true},
    salt: {type: String, required: true},
    hash: {type: String, required: true}
  }
);

//Export model
module.exports = mongoose.model('User', UserSchema);