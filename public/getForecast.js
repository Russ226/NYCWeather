/*
	high_temp:67
	status:Rain
	low_temp:64
	humidity:82
	current_temp:65
	wind_speed:3.6

*/

var info = null;

$.ajax({
  url: '/forecast',
  async: false,
  dataType: 'json',
  success: function (data) {
    info = data;
  }
});


function printDate(future_day){
		var weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
		var today = new Date();
		var day = today.getDay();

		if(future_day+day < weekdays.length) 
			return weekdays[future_day+day];
		else
			return 	weekdays[(future_day+day)-weekdays.length];
		
	}


$('#dynamic').append("<div id= 'cur' class='square'></div>");
$("#cur").html("<div id='curWeather' class = 'b'></div>");


$('#curWeather').append("<p>" +'currently: ' + info['a']['current_temp'] + '°F' + "</p>");
$('#curWeather').append("<p>" +'description: ' + info['a']['status'] + "</p>");
$('#curWeather').append("<p>" +'high/low: ' + info['a']['high_temp'] + '°' + '/' + info['a']['low_temp'] + '°' + "</p>");
$('#curWeather').append("<p>" +'humidity: ' + info['a']['humidity'] + "</p>");
$('#curWeather').append("<p>" +'wind speed: ' + info['a']['wind_speed'] + "</p>");


$('#dynamic').append("<div id= 'future' class='square'></div>");

var i = 1;

while(i < 7){
	var divElment = "<div id='day" + i + "'" + " class = 'b'></div>"
	$("#future").append(divElment);

	
    $('#day'+i).append("<p>" + printDate(i) + "</p>");
    $('#day'+i).append("<p>" +'description: ' + info['b'][i]['status'] + "</p>");
    $('#day'+i).append("<p>" +'high/low: ' + info['b'][i]['high_temp'] + '°' + '/' + info['b'][i]['low_temp'] + '°' + "</p>");
    if(info['b'][i]['humidity'] > 0)
    	$('#day'+i).append("<p>" +'humidity: ' + info['b'][i]['humidity'] + "</p>");
    else
    	$('#day'+i).append("<p>" +'humidity: ' + 100 + "</p>");
	    
	
	i++;
}

	