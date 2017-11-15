import json
import requests

api = str(open('/home/russ/Desktop/Weather/news/newsapi.txt','r').read())

class mydict(dict):
        def __str__(self):
            return json.dumps(self)

def bbc():
   
    url='https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=' + api

   
    re = requests.get(url)
    data=re.json()

    return data


def associatedPress():
   
    url='https://newsapi.org/v1/articles?source=associated-press&sortBy=top&apiKey=' + api

   
    re = requests.get(url)
    data=re.json()

    return data


def cnn():
   
    url='https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=' + api

   
    re = requests.get(url)
    data=re.json()

    return data


def newsweek():
   
    url='https://newsapi.org/v1/articles?source=newsweek&sortBy=top&apiKey=' + api

   
    re = requests.get(url)
    data=re.json()

    return data

def main():
	news = {
		'bbc': bbc(),
		'associatedPress' : associatedPress(),
		'cnn' : cnn(),
		'newsweek' : newsweek()
	}

	print(mydict(news))

if __name__ == '__main__':
	main()
