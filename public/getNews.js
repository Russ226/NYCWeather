// bbc
// associated press
// cnn
// newsweek



var news = null;

getNews = $.ajax({
  url: '/articles',
  async: true,
  dataType: 'json',
  success: function (data) {
    news = data['news'];
  }
});



function cnn(news){
	if(news['cnn']['status'] == 'ok'){
		$('#dynamic').append('<div id="cnn" ></div>');
		for(var i = 0; i < 10; i++){
			$('#cnn').append('<div id="cnnnews' + String(i) +  '"' + 'class="card row" style="width: 20rem;"></div>');
			$('#cnnnews'+ String(i)).append('<img class="card-img-top" src=' + '"' + news['cnn']['articles'][i]['urlToImage'] + '"' + 'alt="Card image cap">');
			$('#cnnnews'+ String(i)).append('<div id="cnnbody' + String(i) + '"'+' class="card-body"></div>');
			$('#cnnbody' + String(i)).append('<h4 class="card-title">' + news['cnn']['articles'][i]['title'] + '</h4>');
			if(news['cnn']['articles'][i]['author'] != null){
				$('#cnnbody' + String(i)).append('<h5 class="card-title">' + news['cnn']['articles'][i]['author'] + '</h5>');
			}
			if(news['cnn']['articles'][i]['publishedAt'] != null){
				$('#cnnbody' + String(i)).append('<h5 class="card-title">' + ' ' +news['cnn']['articles'][i]['publishedAt'] + '</h5>');
			}
			if(news['cnn']['articles'][i]['description'].length > 120)
				$('#cnnbody' + String(i)).append(' <p class="card-text">' + news['cnn']['articles'][i]['description'].substring(0,117) + '...' + '</p>');
			else
				$('#cnnbody' + String(i)).append(' <p class="card-text">' + news['cnn']['articles'][i]['description'] + '</p>');
			$('#cnnbody' + String(i)).append('<a href="' + news['cnn']['articles'][i]['url'] +'" class="btn btn-primary">Read Full Article</a>');
		}
	}
	else{
		$('#dynamic').append('<p>cnn not avaible</p>');
	}
}

function bbc(news){
	if(news['bbc']['status'] == 'ok'){
		$('#dynamic').append('<div id="bbc" ></div>');
		for(var i = 0; i < 10; i++){
			$('#bbc').append('<div id="bbcnews' + String(i) +  '"' +'class="card" style="width: 20rem;"></div>');
			$('#bbcnews'+ String(i)).append('<img class="card-img-top" src=' + '"' + news['bbc']['articles'][i]['urlToImage'] + '"' + 'alt="Card image cap">');
			$('#bbcnews'+ String(i)).append('<div id="bbcbody' + String(i) +'"' + 'class="card-body"></div>');
			$('#bbcbody').append('<h4 class="card-title">' + news['bbc']['articles'][i]['title'] + '</h4>');
			if(news['bbc']['articles'][i]['author'] != null){
				$('#bbcbody').append('<h5 class="card-title">' + news['bbc']['articles'][i]['author'] + '</h5>');
			}
			if(news['bbc']['articles'][i]['publishedAt'] != null){
				$('#bbcbody').append('<h5 class="card-title">' + news['bbc']['articles'][i]['publishedAt'] + '</h5>');
			}
			if(news['bbc']['articles'][i]['description'].length > 120)
				$('#bbcbody' + String(i)).append(' <p class="card-text">' + news['bbc']['articles'][i]['description'].substring(0,117) + '...' + '</p>');
			else
				$('#bbcbody' + String(i)).append(' <p class="card-text">' + news['bbc']['articles'][i]['description'] + '</p>');
			$('#bbcbody' + String(i)).append('<a href="' + news['bbc']['articles'][i]['url'] +'" class="btn btn-primary">Read Full Article</a>');
		}
	}
	else{
		$('#dynamic').append('<p>bbc not avaible</p>');
	}
}

function associatedPress(news){
	if(news['associatedPress']['status'] == 'ok'){
		$('#dynamic').append('<div id="associatedPress" ></div>');
		for(var i = 0; i < 10; i++){
			$('#associatedPress').append('<div id="associatedPressnews' + String(i) +  '"' + 'class="card" style="width: 20rem;"></div>');
			$('#associatedPressnews'+ String(i)).append('<img class="card-img-top" src=' + '"' + news['associatedPress']['articles'][i]['urlToImage'] + '"' + 'alt="Card image cap">');
			$('#associatedPressnews'+ String(i)).append('<div id="associatedPressbody' + String(i) +'"' + 'class="card-body"></div>');
			$('#associatedPressbody'+ String(i)).append('<h4 class="card-title">' + news['associatedPress']['articles'][i]['title'] + '</h4>');
			if(news['associatedPress']['articles'][i]['author'] != null){
				$('#associatedPressbody'+ String(i)).append('<h5 class="card-title">' + news['associatedPress']['articles'][i]['author'] + '</h5>');
			}
			if(news['associatedPress']['articles'][i]['publishedAt'] != null){
				$('#associatedPressbody'+ String(i)).append('<h5 class="card-title">' + news['associatedPress']['articles'][i]['publishedAt'] + '</h5>');
			}
			if(news['associatedPress']['articles'][i]['description'].length > 120)
				$('#associatedPressbody' + String(i)).append(' <p class="card-text">' + news['associatedPress']['articles'][i]['description'].substring(0,117) + '...' + '</p>');
			else
				$('#associatedPressbody' + String(i)).append(' <p class="card-text">' + news['associatedPress']['articles'][i]['description'] + '</p>');
			$('#associatedPressbody'+ String(i)).append('<a href="' + news['associatedPress']['articles'][i]['url'] +'" class="btn btn-primary">Read Full Article</a>');


		}
	}
	else{
		$('#dynamic').append('<p>associated press not avaible</p>');
	}
}

function newsweek(news){
	if(news['newsweek']['status'] == 'ok'){
		$('#dynamic').append('<div id="newsweek" ></div>');
		for(var i = 0; i < 10; i++){
			$('#newsweek').append('<div id="newsweeknews' + String(i) +  '"' + 'class="card" style="width: 20rem;"></div>');
			$('#newsweeknews'+ String(i)).append('<img class="card-img-top" src=' + '"' + news['newsweek']['articles'][i]['urlToImage'] + '"' + 'alt="Card image cap">');
			$('#newsweeknews'+ String(i)).append('<div id="newsweekbody' + String(i) +  '"' + ' class="card-body"></div>');
			$('#newsweekbody'+ String(i)).append('<h4 class="card-title">' + news['newsweek']['articles'][i]['title'] + '</h4>');
			if(news['newsweek']['articles'][i]['author'] != null){
				$('#newsweekbody'+ String(i)).append('<h5 class="card-title">' + news['newsweek']['articles'][i]['author'] + '</h5>');
			}
			if(news['newsweek']['articles'][i]['publishedAt'] != null){
				$('#newsweekbody'+ String(i)).append('<h5 class="card-title">' + news['newsweek']['articles'][i]['publishedAt'] + '</h5>');
			}
			if(news['newsweek']['articles'][i]['description'].length > 120)
				$('#newsweekbody' + String(i)).append(' <p class="card-text">' + news['newsweek']['articles'][i]['description'].substring(0,117) + '...' + '</p>');
			else
				$('#newsweekbody' + String(i)).append(' <p class="card-text">' + news['newsweek']['articles'][i]['description'] + '</p>');
			$('#newsweekbody'+ String(i)).append('<a href="' + news['newsweek']['articles'][i]['url'] +'" class="btn btn-primary">Read Full Article</a>');


		}
	}
	else{
		$('#dynamic').append('<p>newsweek not avaible</p>');
	}
}

getNews.done(function(){
	cnn(news);
	bbc(news);
	associatedPress(news);
	newsweek(news);
});