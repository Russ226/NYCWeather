import json
import pandas as pd
import requests
from math import floor
import json
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

    id = str(id)
    if "\t" in "":
        id.replace("\t", "")

    url='http://api.openweathermap.org/data/2.5/weather?id='+id+'&mode=metric'+'&appid=50bedfd622c157508464cef5f7326f75'
    re = requests.get(url)
    data=re.json()

    return data

def kevlin_to_fahrenheit(temp):

    return (temp*(9/5))-459.67

def kelvin_to_celsius(temp):

    return temp-273.15


def main():

    weather=get_current_weather(5128581)

    weather_profile= {
        "current_temp": floor(kevlin_to_fahrenheit(weather['main']['temp'])),
        "status": weather['weather'][0]['main'],
        "high_temp": floor(kevlin_to_fahrenheit(weather['main']['temp_max'])),
        "low_temp": floor(kevlin_to_fahrenheit(weather['main']['temp_min'])),
        "wind_speed": weather['wind']['speed'],
        "humidity": weather['main']['humidity']
        }

    print(mydict(weather_profile))


if __name__ == '__main__':
    main()

