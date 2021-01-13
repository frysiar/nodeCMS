var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PostSchema = new Schema(
  {
    title: {type: String, required: true},
    author: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    content: {type: String, required: true},
    date: {type: Date, default: Date.now}
  }
);

//Export model
module.exports = mongoose.model('Post', PostSchema);