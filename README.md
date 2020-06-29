# weather-dashboard
homework 06

## Criteria 
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city

## Psudocode 

Step 1:
Q: How will the user search for cities? 
A: by inputting text into the search bar and clicking search
Q: Where will the city name go? 
A: every city searched will be prepended beneath the search bar
Q: How will the cities be saved?
A: with local storage
Q: how will it be known what city will be displayed?
A: with an .on('click') function

Step 2:
Q: How will the daily weather forcast be called?
A: by using the ajax function to retreive the information from the library
Q: what information will be called?
A: city's name, humidity, wind-speed and UV index
Q: how will it be displayed?
A: by pushing the array onto the card in the second row

Step 3:
Q: How will the five day weather forcast be called?
A: with an ajax function then an array 
Q: What box will go with what day?
A: each box will be set with a seperate div tag coorisponding to one of five days