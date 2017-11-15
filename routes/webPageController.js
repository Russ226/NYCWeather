var express = require('express');
var app = express();
var router = express.Router();

//app.set('public');
//app.use('/', express.static('public'));


router.get('/',function(req,res){
	res.render('getForecast.ejs');

});
router.get('/news',function(req,res){
	res.render('getNews.ejs');

});

router.get('/tech',function(req,res){
	res.render('getTech.ejs');

});

router.get('/sports',function(req,res){
	res.render('getSports.ejs');

});

module.exports = router;