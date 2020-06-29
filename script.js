// $(document).ready(function () {


//   // once search button is clicked do the following  
//     $("#search").on("click", function(){
      
//         var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=6d62c1e57554dc6cee60932bdfd78a07";



//     });

//     $("#add-city").on("click", function(event) {
//         event.preventDefault();
//         var newCity = $("button").eq(0).val();

//         if (newCity.length > 2) {
//             city.push(newCity);
//         }

//         populateButtons(city, "city-button", "#city-button");
//     });

// });

var button = document.querySelector(".button")
var inputValue = document.querySelector(".inputValue")

var name = document.querySelector(".name");
var humidity = document.querySelector(".humidity");
var windSpeed = document.querySelector(".wind-speed");
var uvIndex = document.querySelector(".uv-index");

button.addEventListener("click", function(){
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputValue.value+"&appid=6d62c1e57554dc6cee60932bdfd78a07")
    .then(response => response.json())
    .then(data => console.log(data))

});



    



