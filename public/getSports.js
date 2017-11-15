var news = null;

getNews = $.ajax({
  url: '/articles',
  async: true,
  dataType: 'json',
  success: function (data) {
    news = data['sports'];
  }
});


function talksport(news){
	var i = 0;
	if(news['talksport']['status'] == 'ok'){
		$('#dynamic').append('<div id="talksport" ></div>');
		while(news['talksport']['articles'][i]){
			$('#talksportNews').append('<div id="talksportnews' + String(i) +  '"' + 'class="card row" style="width: 20rem;"></div>');
			$('#talksportnews'+ String(i)).append('<img class="card-img-top" src=' + '"' + news['talksport']['articles'][i]['urlToImage'] + '"' + 'alt="Card image cap">');
			$('#talksportnews'+ String(i)).append('<div id="talksportbody' + String(i) + '"'+' class="card-body"></div>');
			$('#talksportbody' + String(i)).append('<h4 class="card-title">' + news['talksport']['articles'][i]['title'] + '</h4>');
			if(news['talksport']['articles'][i]['author'] != null){
				$('#talksportbody' + String(i)).append('<h5 class="card-title">' + news['talksport']['articles'][i]['author'] + '</h5>');
			}
			if(news['talksport']['articles'][i]['publishedAt'] != null){
				$('#talksportbody' + String(i)).append('<h5 class="card-title">' + ' ' +news['talksport']['articles'][i]['publishedAt'] + '</h5>');
			}
			if(news['talksport']['articles'][i]['description'])
				if(news['talksport']['articles'][i]['description'].length > 120)
					$('#talksportbody' + String(i)).append(' <p class="card-text">' + news['talksport']['articles'][i]['description'].substring(0,117) + '...' + '</p>');
				else
					$('#talksportbody' + String(i)).append(' <p class="card-text">' + news['talksport']['articles'][i]['description'] + '</p>');
			$('#talksportbody' + String(i)).append('<a href="' + news['talksport']['articles'][i]['url'] +'" class="btn btn-primary">Read Full Article</a>');
			i++;
		}
	}
	else{
		$('#dynamic').append('<p>hackerNews not avaible</p>');
	}
}

function bbcSports(news){
	var i = 0;
	if(news['bbc']['status'] == 'ok'){
		$('#dynamic').append('<div id="bbc" ></div>');
		while(news['bbc']['articles'][i]){
			$('#bbc').append('<div id="bbcSportsnews' + String(i) +  '"' +'class="card" style="width: 20rem;"></div>');
			$('#bbcSportsnews'+ String(i)).append('<img class="card-img-top" src=' + '"' + news['bbc']['articles'][i]['urlToImage'] + '"' + 'alt="Card image cap">');
			$('#bbcSportsnews'+ String(i)).append('<div id="recodebody' + String(i) +'"' + 'class="card-body"></div>');
			$('#bbcSportsbody').append('<h4 class="card-title">' + news['bbc']['articles'][i]['title'] + '</h4>');
			if(news['bbc']['articles'][i]['author'] != null){
				$('#recodebody').append('<h5 class="card-title">' + news['bbbc']['articles'][i]['author'] + '</h5>');
			}
			if(news['bbc']['articles'][i]['publishedAt'] != null){
				$('#bbcSportsbody').append('<h5 class="card-title">' + news['bbc']['articles'][i]['publishedAt'] + '</h5>');
			}
			if(news['bbc']['articles'][i]['description'].length > 120)
				$('#bbcSportsbody' + String(i)).append(' <p class="card-text">' + news['bbc']['articles'][i]['description'].substring(0,117) + '...' + '</p>');
			else
				$('#bbcSportsbody' + String(i)).append(' <p class="card-text">' + news['bbc']['articles'][i]['description'] + '</p>');
			$('#bbcSportsbody' + String(i)).append('<a href="' + news['bbc']['articles'][i]['url'] +'" class="btn btn-primary">Read Full Article</a>');
			i++;
		}
	}
	else{
		$('#dynamic').append('<p>bbcSports not avaible</p>');
	}
}

function espn(news){
	var i = 0;
	if(news['espn']['status'] == 'ok'){
		$('#dynamic').append('<div id="espn" ></div>');
		while(news['espn']['articles'][i]){
			$('#espn').append('<div id="espnnews' + String(i) +  '"' + 'class="card" style="width: 20rem;"></div>');
			$('#espnnews'+ String(i)).append('<img class="card-img-top" src=' + '"' + news['espn']['articles'][i]['urlToImage'] + '"' + 'alt="Card image cap">');
			$('#espnnews'+ String(i)).append('<div id="espnbody' + String(i) +'"' + 'class="card-body"></div>');
			$('#espnbody'+ String(i)).append('<h4 class="card-title">' + news['espn']['articles'][i]['title'] + '</h4>');
			if(news['espn']['articles'][i]['author'] != null){
				$('#espnbody'+ String(i)).append('<h5 class="card-title">' + news['espn']['articles'][i]['author'] + '</h5>');
			}
			if(news['espn']['articles'][i]['publishedAt'] != null){
				$('#espnbody'+ String(i)).append('<h5 class="card-title">' + news['espn']['articles'][i]['publishedAt'] + '</h5>');
			}
			if(news['espn']['articles'][i]['description'].length > 120)
				$('#espnbody' + String(i)).append(' <p class="card-text">' + news['espn']['articles'][i]['description'].substring(0,117) + '...' + '</p>');
			else
				$('#espnbody' + String(i)).append(' <p class="card-text">' + news['espn']['articles'][i]['description'] + '</p>');
			$('#espnbody'+ String(i)).append('<a href="' + news['espn']['articles'][i]['url'] +'" class="btn btn-primary">Read Full Article</a>');
			i++;

		}
	}
	else{
		$('#dynamic').append('<p>espn not avaible</p>');
	}
}

function foxSports(news){
	var i = 0;
	if(news['foxSports']['status'] == 'ok'){
		$('#dynamic').append('<div id="foxSports" ></div>');
		while(news['foxSports']['articles'][i]){
			$('#foxSports').append('<div id="foxSportsnews' + String(i) +  '"' + 'class="card" style="width: 20rem;"></div>');
			$('#foxSportsnews'+ String(i)).append('<img class="card-img-top" src=' + '"' + news['foxSports']['articles'][i]['urlToImage'] + '"' + 'alt="Card image cap">');
			$('#foxSportsnews'+ String(i)).append('<div id="foxSportsbody' + String(i) +  '"' + ' class="card-body"></div>');
			$('#foxSportsbody'+ String(i)).append('<h4 class="card-title">' + news['foxSports']['articles'][i]['title'] + '</h4>');
			if(news['foxSports']['articles'][i]['author'] != null){
				$('#foxSportsbody'+ String(i)).append('<h5 class="card-title">' + news['foxSports']['articles'][i]['author'] + '</h5>');
			}
			if(news['foxSports']['articles'][i]['publishedAt'] != null){
				$('#foxSportsbody'+ String(i)).append('<h5 class="card-title">' + news['foxSports']['articles'][i]['publishedAt'] + '</h5>');
			}
			if(news['foxSportsh']['articles'][i]['description'].length > 120)
				$('#foxSportsbody' + String(i)).append(' <p class="card-text">' + news['foxSports']['articles'][i]['description'].substring(0,117) + '...' + '</p>');
			else
				$('#foxSportsbody' + String(i)).append(' <p class="card-text">' + news['foxSports']['articles'][i]['description'] + '</p>');
			$('#foxSportsbody'+ String(i)).append('<a href="' + news['foxSports']['articles'][i]['url'] +'" class="btn btn-primary">Read Full Article</a>');
			i++;
			
		}
	}
	else{
		$('#dynamic').append('<p>foxSports not avaible</p>');
	}
}

getNews.done(function(){
	talksport(news);
	bbcSports(news);
	espn(news);
	foxSports(news);
});