var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var userSchema = new Schema({
	twitterID : Number,
	twitterScreenName : String,
	Name : String,
	icon : String
});

module.exports = mongoose.model('User',userSchema);