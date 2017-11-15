import json
import requests

api = str(open('/home/russ/Desktop/Weather/news/newsapi.txt','r').read())

class mydict(dict):
        def __str__(self):
            return json.dumps(self)

def bbc():
   
    url='https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey' + api

   
    re = requests.get(url)
    data=re.json()

    return data


def espn():
   
    url='https://newsapi.org/v1/articles?source=espn&sortBy=top&apiKey=' + api

   
    re = requests.get(url)
    data=re.json()

    return data


def foxSports():
   
    url='https://newsapi.org/v1/articles?source=fox-sports&sortBy=top&apiKey=' + api

   
    re = requests.get(url)
    data=re.json()

    return data


def talksport():
   
    url='https://newsapi.org/v1/articles?source=talksport&sortBy=top&apiKey=' + api

   
    re = requests.get(url)
    data=re.json()

    return data

def main():
	sports = {
		'bbc': bbc(),
		'espn' : espn(),
		'foxSports' : foxSports(),
		'talksport' : talksport()
	}

	print(mydict(sports))

if __name__ == '__main__':
	main()
