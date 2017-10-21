import json
import pandas as pd
import requests
from math import floor
'''
    current temp
    current status
    high temp
    low temp
    wind speed
'''

class mydict(dict):
        def __str__(self):
            return json.dumps(self)

def get_current_weather(id):
    
    url='http://api.openweathermap.org/data/2.5/forecast/daily?id='+str(id)+'&appid=50bedfd622c157508464cef5f7326f75'
    
    re = requests.get(url)
    data=re.json()

    return data

def kevlin_to_fahrenheit(temp):

    return (temp*(9/5))-459.67

def kelvin_to_celsius(temp):

    return temp-273.15



def cleanData():
    weather=get_current_weather(5128581)

    daily_weather_profile = {}


    for idx,w in enumerate(weather['list']):
        if(idx > 0):
            weather_profile = {
                "status": w['weather'][0]['main'],
                "high_temp": floor(kevlin_to_fahrenheit(w['temp']['max'])),
                "low_temp": floor(kevlin_to_fahrenheit(w['temp']['min'])),
                "humidity": w['humidity']
                }
            daily_weather_profile[idx] = weather_profile
    return daily_weather_profile
        
def main():
    daily_weather_profile = cleanData()
    
    print(mydict(daily_weather_profile))

if __name__ == '__main__':
    main()

    