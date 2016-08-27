// Express

var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');

//mongoose.connect('mongodb://localhost/TypokeGo');


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

router.get('/unko', function(req, res) {
    res.json({ message: 'TypokeGo api server .' });
});


app.use('/api', router);
app.use('/views',express.static('views'));


app.listen(port);
console.log('listen on port ' + port);