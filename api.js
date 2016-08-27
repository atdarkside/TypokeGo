// Express

var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');

var corser = require("corser");
app.use(corser.create());

mongoose.connect('mongodb://localhost/TypokeGo');

var User = require('./models/user');
var Score = require('./models/score');
var Music = require('./models/music');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3333;

var router = express.Router();

router.use(function(req, res, next) {
    console.log('access -> ' + req.url);
    next();
});


// ------------------------------ //
//                                // 
//            endpoit             //
//                                //
// ------------------------------ //

router.get('/test', function(req, res) {
    res.json({ message: 'TypokeGo api server .' });
});

router.get('/isuseragoat', function(req, res) {
    res.json({ user_goat: false });
});

router.post('/user/save', function(req, res) {
    console.log(req.body);
    
	var user = new User();
	user.twitter_id = req.body.twitter_id;
	user.twitter_screen_name = req.body.twitter_screen_name;
	user.name = req.body.name;
	user.icon = req.body.icon;

	if(!user.twitter_id || !user.twitter_screen_name ||
	   !user.name      || !user.icon){ 
		res.json({ message: 'No parameters', 
				   error:   '404'});
	} else {
		user.save(function(err) {
			if(err)
				res.send(err);
			res.json({ message: 'おほ～(勃起)' });
		});
	}
});

router.get('/user/load', function(req, res) {
    User.find(function(err,users) {
    	if(err)
    		res.send(err);
    	res.json(users);
    });
});

router.get('/user/load/:twitter_id', function(req, res) {
    User.find({ twitter_id: req.params.twitter_id} ,function(err,user) {
    	if(err)
    		res.send(err);
    	res.json(user);
    });
});

router.post('/score/save', function(req, res) {
    
    var score = new Score();
    score.twitter_id = req.body.twitter_id;
    score.music_id = req.body.music_id;
    score.score = req.body.score;

    if(score.twitter_id == null || score.music_id == null ||
       score.score == null){
    	res.json({ message: 'No parameters', 
    			   error  : '404'});
    } else {
		score.save(function(err) {
			if(err)
				res.send(err);
			res.json({ message: '通報すると金になるんか？'});
		});
	}
});

router.get('/score/load', function(req, res) {
    Score.find(function(err,scores) {
    	if(err)
    		res.send(err);
    	res.json(scores);
    });
});

router.get('/score/load/:twitter_id', function(req, res) {
    Score.find({ twitter_id: req.params.twitter_id}, function(err,scores) {
    	if(err)
    		res.send(err);
    	res.json(scores);
    });
});

router.get('/score/lanking/list/:music_id', function(req, res) {
    Score.find({ music_id: req.params.music_id}, function(err,scores) {

    	if(err)
    		res.send(err);
    	scores.sort(function(a,b){
    		if(a.score > b.score) return -1;
    		if(a.score < b.score) return 1;
    		return 0;
    	});
    	res.json(scores);
    });
});

router.post('/music/save', function(req, res) {

	var ret = false;
    var music = Music();
    music.music_id = req.body.music_id;
    music.title = req.body.title;
    music.artists = req.body.artists;
    music.icon = req.body.icon;

	Music.find({ music_id:music.music_id }, function(err,_music){
    	if(err)
    		res.send(err);
    	if (Object.keys(_music).length > 0)
    		ret = true;
    	console.log(Object.keys(_music).length);
    	console.log("ret:" + ret);
    	if (ret == true){
	    	res.send({ message: "There is the same ID" });
	    	console.log("true");
	    } else if(ret == false){
		    if(music.music_id == null || music.title == null ||
		       music.artists == null  || music.icon == null) {
		    	res.json({ message: 'No parameters',
		    			   error: '404'});
		    } else {
		    	music.save(function(err) {
		    		if(err)
		    			res.send(err);
		    		res.json({ message: '今日も一日頑張るぞい！'});
		    	});
		    }
		}
    });
});

router.get('/music/load', function(req, res) {
    Music.find(function(err,musics){
    	if(err)
    		res.send(err);
    	res.json(musics);
    });
});

router.get('/music/search/title/:title', function(req, res) {
    Music.find({ title: req.params.title }, function(err,music){
    	if(err)
    		res.send(err);
    	res.json(music);
    });
});

router.get('/music/search/id/:music_id', function(req, res) {
    Music.find({ music_id: req.params.music_id }, function(err,music){
    	if(err)
    		res.send(err);
    	res.json(music);
    });
});

router.get('/music/search/keyword/:keyword', function(req, res) {
    Music.find(function(err, musics){
    	var sort = [];
    	if(err)
    		res.send(err);
    	musics.forEach(function(val,index){
    		if(val.title.toLowerCase().indexOf(req.params.keyword.toLowerCase()) != -1){
    			sort.push(val);
    			console.log(val.title);
    		}
    	});

    	res.json(sort);
    });
});

app.use('/api', router);
app.use('/views',express.static('views'));
app.use('/Animation',express.static('data/AnimationTest'));


app.listen(port);
console.log('listen on port ' + port);