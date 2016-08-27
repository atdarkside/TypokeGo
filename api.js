// Express

var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');

mongoose.connect('mongodb://localhost/TypokeGo');

var User = require('./models/user');
var Score = require('./models/score');

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

router.post('/user/save', function(req, res) {
    
	var user = new User();
	console.log(req.body);
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
			res.json({ message: 'やったぜ。' });
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
	console.log(req.params.twitter_id);
    User.find({ twitter_id: req.params.twitter_id} ,function(err,user) {
    	if(err)
    		res.send(err);
    	res.json(user);
    });
});

router.post('/score/save', function(req, res) {
    
    var score = new Score();
    console.log(req.body);
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
	req_sn = req.params.twitter_id;
	console.log(req_sn);
    Score.find({ twitter_id: req.params.twitter_id}, function(err,scores) {
    	if(err)
    		res.send(err);
    	res.json(scores);
    });
});

//No test
/*
router.get('/score/lanking/list/', function(req, res) {
    Score.find(function(err,scores) {
    	ret = JSON.parse(scores);
    	console.log(ret);
    });
});
*/

app.use('/api', router);
app.use('/views',express.static('views'));


app.listen(port);
console.log('listen on port ' + port);