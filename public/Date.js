$(function(){
	function printDate(){
		var weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth()+1; //January is 0!
		var yyyy = today.getFullYear();
		var day = today.getDay();

		if(dd<10) {
		    dd = '0'+dd;
		} 

		if(mm<10) {
		    mm = '0'+mm;
		} 
		today = weekdays[day] + ',' + mm + '/' + dd + '/' + yyyy;
		return today;
	}
	
	var today = printDate()
	today = today.split(',');
	$.each(today, function(v,k){
            $('#date').append("<p>" + k + "</p>");
        });
	//$('#date').html('<p>' + today[0] + '</p>');
	//$('#date').html('<p>' + today[1] + '</p>');
});