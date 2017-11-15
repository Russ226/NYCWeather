var news = null;

getNews = $.ajax({
  url: '/articles',
  async: true,
  dataType: 'json',
  success: function (data) {
    news = data['tech'];
  }
});


function hackerNews(news){
	if(news['hackerNews']['status'] == 'ok'){
		$('#dynamic').append('<div id="hackerNews" ></div>');
		for(var i = 0; i < 4; i++){
			$('#hackerNews').append('<div id="hackerNewsnews' + String(i) +  '"' + 'class="card row" style="width: 20rem;"></div>');
			$('#hackerNewsnews'+ String(i)).append('<img class="card-img-top" src=' + '"' + news['hackerNews']['articles'][i]['urlToImage'] + '"' + 'alt="Card image cap">');
			$('#hackerNewsnews'+ String(i)).append('<div id="hackerNewsbody' + String(i) + '"'+' class="card-body"></div>');
			$('#hackerNewsbody' + String(i)).append('<h4 class="card-title">' + news['hackerNews']['articles'][i]['title'] + '</h4>');
			if(news['hackerNews']['articles'][i]['author'] != null){
				$('#hackerNewsbody' + String(i)).append('<h5 class="card-title">' + news['hackerNews']['articles'][i]['author'] + '</h5>');
			}
			if(news['hackerNews']['articles'][i]['publishedAt'] != null){
				$('#hackerNewsbody' + String(i)).append('<h5 class="card-title">' + ' ' +news['hackerNews']['articles'][i]['publishedAt'] + '</h5>');
			}
			if(news['hackerNews']['articles'][i]['description'])
				if(news['hackerNews']['articles'][i]['description'].length > 120)
					$('#hackerNewsbody' + String(i)).append(' <p class="card-text">' + news['hackerNews']['articles'][i]['description'].substring(0,117) + '...' + '</p>');
				else
					$('#hackerNewsbody' + String(i)).append(' <p class="card-text">' + news['hackerNews']['articles'][i]['description'] + '</p>');
			$('#hackerNewsbody' + String(i)).append('<a href="' + news['hackerNews']['articles'][i]['url'] +'" class="btn btn-primary">Read Full Article</a>');
		}
	}
	else{
		$('#dynamic').append('<p>hackerNews not avaible</p>');
	}
}

function recode(news){
	if(news['recode']['status'] == 'ok'){
		$('#dynamic').append('<div id="recode" ></div>');
		for(var i = 0; i < 5; i++){
			$('#recode').append('<div id="recodenews' + String(i) +  '"' +'class="card" style="width: 20rem;"></div>');
			$('#recodenews'+ String(i)).append('<img class="card-img-top" src=' + '"' + news['recode']['articles'][i]['urlToImage'] + '"' + 'alt="Card image cap">');
			$('#recodenews'+ String(i)).append('<div id="recodebody' + String(i) +'"' + 'class="card-body"></div>');
			$('#recodebody').append('<h4 class="card-title">' + news['recode']['articles'][i]['title'] + '</h4>');
			if(news['recode']['articles'][i]['author'] != null){
				$('#recodebody').append('<h5 class="card-title">' + news['recode']['articles'][i]['author'] + '</h5>');
			}
			if(news['recode']['articles'][i]['publishedAt'] != null){
				$('#recodebody').append('<h5 class="card-title">' + news['recode']['articles'][i]['publishedAt'] + '</h5>');
			}
			if(news['recode']['articles'][i]['description'].length > 120)
				$('#recodebody' + String(i)).append(' <p class="card-text">' + news['recode']['articles'][i]['description'].substring(0,117) + '...' + '</p>');
			else
				$('#recodebody' + String(i)).append(' <p class="card-text">' + news['recode']['articles'][i]['description'] + '</p>');
			$('#recodebody' + String(i)).append('<a href="' + news['recode']['articles'][i]['url'] +'" class="btn btn-primary">Read Full Article</a>');
		}
	}
	else{
		$('#dynamic').append('<p>recode not avaible</p>');
	}
}

function engadget(news){
	if(news['engadget']['status'] == 'ok'){
		$('#dynamic').append('<div id="engadget" ></div>');
		for(var i = 0; i < 5; i++){
			$('#engadget').append('<div id="engadgetnews' + String(i) +  '"' + 'class="card" style="width: 20rem;"></div>');
			$('#engadgetnews'+ String(i)).append('<img class="card-img-top" src=' + '"' + news['engadget']['articles'][i]['urlToImage'] + '"' + 'alt="Card image cap">');
			$('#engadgetnews'+ String(i)).append('<div id="engadgetbody' + String(i) +'"' + 'class="card-body"></div>');
			$('#engadgetbody'+ String(i)).append('<h4 class="card-title">' + news['engadget']['articles'][i]['title'] + '</h4>');
			if(news['engadget']['articles'][i]['author'] != null){
				$('#engadgetbody'+ String(i)).append('<h5 class="card-title">' + news['engadget']['articles'][i]['author'] + '</h5>');
			}
			if(news['engadget']['articles'][i]['publishedAt'] != null){
				$('#engadgetbody'+ String(i)).append('<h5 class="card-title">' + news['engadget']['articles'][i]['publishedAt'] + '</h5>');
			}
			if(news['engadget']['articles'][i]['description'].length > 120)
				$('#engadgetbody' + String(i)).append(' <p class="card-text">' + news['engadget']['articles'][i]['description'].substring(0,117) + '...' + '</p>');
			else
				$('#engadgetbody' + String(i)).append(' <p class="card-text">' + news['engadget']['articles'][i]['description'] + '</p>');
			$('#engadgetbody'+ String(i)).append('<a href="' + news['engadget']['articles'][i]['url'] +'" class="btn btn-primary">Read Full Article</a>');


		}
	}
	else{
		$('#dynamic').append('<p>engadget not avaible</p>');
	}
}

function techcrunch(news){
	if(news['techcrunch']['status'] == 'ok'){
		$('#dynamic').append('<div id="techcrunch" ></div>');
		for(var i = 0; i < 4; i++){
			$('#techcrunch').append('<div id="techcrunchnews' + String(i) +  '"' + 'class="card" style="width: 20rem;"></div>');
			$('#techcrunchnews'+ String(i)).append('<img class="card-img-top" src=' + '"' + news['techcrunch']['articles'][i]['urlToImage'] + '"' + 'alt="Card image cap">');
			$('#techcrunchnews'+ String(i)).append('<div id="techcrunchbody' + String(i) +  '"' + ' class="card-body"></div>');
			$('#techcrunchbody'+ String(i)).append('<h4 class="card-title">' + news['techcrunch']['articles'][i]['title'] + '</h4>');
			if(news['techcrunch']['articles'][i]['author'] != null){
				$('#techcrunchbody'+ String(i)).append('<h5 class="card-title">' + news['techcrunch']['articles'][i]['author'] + '</h5>');
			}
			if(news['techcrunch']['articles'][i]['publishedAt'] != null){
				$('#techcrunchbody'+ String(i)).append('<h5 class="card-title">' + news['techcrunch']['articles'][i]['publishedAt'] + '</h5>');
			}
			if(news['techcrunch']['articles'][i]['description'].length > 120)
				$('#techcrunchbody' + String(i)).append(' <p class="card-text">' + news['techcrunch']['articles'][i]['description'].substring(0,117) + '...' + '</p>');
			else
				$('#techcrunchbody' + String(i)).append(' <p class="card-text">' + news['techcrunch']['articles'][i]['description'] + '</p>');
			$('#techcrunchbody'+ String(i)).append('<a href="' + news['techcrunch']['articles'][i]['url'] +'" class="btn btn-primary">Read Full Article</a>');


		}
	}
	else{
		$('#dynamic').append('<p>techcrunch not avaible</p>');
	}
}

getNews.done(function(){
	hackerNews(news);
	recode(news);
	engadget(news);
	techcrunch(news);
});