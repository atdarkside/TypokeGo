// Express

var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');

//mongoose.connect('mongodb://localhost/TypokeGo');

var User = require('./models/user');

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

router.get('/user/information/load', function(req, res) {
    User.find(function(err,users) {
    	if(err)
    		res.send(err);
    	res.json({ message: 'nice.'});
    });
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

app.use('/api', router);
app.use('/views',express.static('views'));


app.listen(port);
console.log('listen on port ' + port);