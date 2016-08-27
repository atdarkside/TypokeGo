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


router.get('/', function(req, res) {
    res.json({ message: 'TypokeGo api server .' });
});
router.get('/test', function(req, res) {
    res.json({ message: 'TypokeGo api server .' });
});


//No test
router.post('/user/information/save', function(req, res) {
    
	var user = new User();
	user.twitterID = req.body.twitterID;
	user.twitterScreenName = req.body.twitterScreenName;
	user.Name = req.body.Name;
	user.icon = req.body.icon;

	user.save(function(err) {
		if(err)
			res.send(err);
		res.json({ message: 'やったぜ。' });
	});
});

//No test
router.get('/user/information/load', function(req, res) {
    User.find(function(err,users) {
    	if(err)
    		res.send(err);
    	res.json(users);
    });
});

//No test
router.post('/score/save', function(req, res) {
    
    var score = new Score();
    score.twitterID = req.body.twitterID;
    score.musicID = req.body.musicID;
    score.score = req.body.score;

    score.save(function(err) {
    	if(err)
    		res.send(err);
    	res.json({ message: '通報すると金になるんか？'});
    });
});

//No test
router.get('/score/load', function(req, res) {
    Score.find(function(err,scores) {
    	if(err)
    		res.send(err);
    	res.json(scores);
    });
});

router.get('/score/load/:musicID', function(req, res) {
    Score.findById(req.params.musicID, function(err,scores) {
    	if(err)
    		res.send(err);
    	res.json(scores);
    });
});

app.use('/api', router);
app.use('/views',express.static('views'));


app.listen(port);
console.log('listen on port ' + port);