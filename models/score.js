var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var scoreSchema = new Schema({
	twitter_id : Number,
	music_id : Number,
	score : Number
});

module.exports = mongoose.model('Score',scoreSchema);