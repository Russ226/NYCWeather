var PythonShell = require('python-shell');
var express = require('express');
var router = express.Router();


var todayForecast,dailyForecast;


var options = {
	mode: 'text',
	pythonPath: '/usr/bin/python3',
	scriptPath: "/home/russ/Desktop/Weather/"
};

PythonShell.run('Weather.py',options,function(error,results){
	if(error)
		throw error;
	//results = JSON.stringify(results);
	todayForecast =JSON.parse(results);
	//console.log();
});

PythonShell.run('MultiDayWeather.py',options,function(error,results){
	if(error)
		throw error;
	//results = JSON.stringify(results);
	dailyForecast = JSON.parse(results);
	//console.log();
});

router.get('/forecast',function(req,res){
	
	var forecast = {
		"a": todayForecast,
		"b": dailyForecast
	};

	res.send(forecast);
});

module.exports = router;