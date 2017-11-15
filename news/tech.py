import json
import requests

api = str(open('/home/russ/Desktop/Weather/news/newsapi.txt','r').read())

class mydict(dict):
        def __str__(self):
            return json.dumps(self)

def hackerNews():
   
    url='https://newsapi.org/v1/articles?source=hacker-news&sortBy=top&apiKey=' + api

   
    re = requests.get(url)
    data=re.json()

    return data


def engadget():
   
    url='https://newsapi.org/v1/articles?source=engadget&sortBy=top&apiKey=' + api

   
    re = requests.get(url)
    data=re.json()

    return data


def recode():
   
    url='https://newsapi.org/v1/articles?source=recode&sortBy=top&apiKey=' + api
   
    re = requests.get(url)
    data=re.json()

    return data


def techcrunch():
   
    url='https://newsapi.org/v1/articles?source=techcrunch&sortBy=top&apiKey=' + api

   
    re = requests.get(url)
    data=re.json()

    return data

def main():
	tech = {
		'hackerNews': hackerNews(),
		'recode' : recode(),
		'techcrunch' : techcrunch(),
		'engadget' : engadget()
	}

	print(mydict(tech))

if __name__ == '__main__':
	main()
