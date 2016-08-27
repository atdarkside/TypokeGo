var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var scoreSchema = new Schema({
	twitterID : Number,
	musicID : Number,
	score : Number
});

module.exports = mongoose.model('Score',scoreSchema);