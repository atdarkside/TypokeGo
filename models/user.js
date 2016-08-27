var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var userSchema = new Schema({
	twitter_id : Number,
	twitter_screen_name : String,
	name : String,
	icon : String
});

module.exports = mongoose.model('User',userSchema);