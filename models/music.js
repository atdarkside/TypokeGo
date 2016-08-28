var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var musicSchema = new Schema({
	music_id : Number,
	title : String,
	artists : String,
	icon : String,
	youtube_url : String,
	json_path : String
});

module.exports = mongoose.model('Music',musicSchema);