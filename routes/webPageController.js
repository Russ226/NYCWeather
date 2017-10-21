var express = require('express');
var app = express();
var router = express.Router();

//app.set('public');
//app.use('/', express.static('public'));


router.get('/',function(req,res){
	res.render('getForecast.ejs');

});

module.exports = router;