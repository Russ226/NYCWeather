var PythonShell = require('python-shell');
var express = require('express');
var router = express.Router();


var news, sports, tech;


var options = {
	mode: 'text',
	pythonPath: '/usr/bin/python3',
	scriptPath: "/home/russ/Desktop/Weather/news"
};

PythonShell.run('news.py',options,function(error,results){
	if(error)
		throw error;
	//results = JSON.stringify(results);
	news =JSON.parse(results);
	//console.log();
});

PythonShell.run('sports.py',options,function(error,results){
	if(error)
		throw error;
	//results = JSON.stringify(results);
	sports = JSON.parse(results);
	//console.log();
});

PythonShell.run('tech.py',options,function(error,results){
	if(error)
		throw error;
	//results = JSON.stringify(results);
	tech = JSON.parse(results);
	//console.log();
});

router.get('/articles',function(req,res){
	
	var forecast = {
		"news": news,
		"sports": sports,
		"tech" : tech
	};

	res.send(forecast);
});

module.exports = router;