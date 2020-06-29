$(document).ready(function () {
    var citybutton = document.getElementById("#city-button");

    var cities = [
        "Orlando"
    ];

    function retriveArray(){

    var cities = localStorage.getItem("cities");


    }

// function to make button.links and add to page
// arrayToUse looks at animal array
    function populateButtons() {
        $(citybutton).empty();
    
        for (var i = 0; i < cities.length; i++) {
          var newButton = $("<button>");
        //   newButton.addClass(classToAdd);
          newButton.attr("data-type", cities[i]);
          newButton.text(cities[i]);
          $(citybutton).append(newButton);
        }
    
      }

  // once search button is clicked do the following  
   $("#search").on("click", function(event){
    event.preventDefault();

    $("#city-info").empty();
    $(".city-button").removeClass("active");
    $(this).addClass("active");

    console.log("button clicked")
    populateButtons();

    var type = $(this).attr("data-type");
//city name is extracted from array
    var cityName = "Orlando"
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName +"&units=imperial&appid=6d62c1e57554dc6cee60932bdfd78a07"

        $.ajax({
            url: queryURL,
            method: "GET"
        })

   
        .then(function(response){
            console.log("response", response)

        });

   })
      


});



// var button = document.querySelector(".button")
// var inputValue = document.querySelector(".inputValue")

// var name = document.querySelector(".name");
// var humidity = document.querySelector(".humidity");
// var windSpeed = document.querySelector(".wind-speed");
// var uvIndex = document.querySelector(".uv-index");

// $(".button").on("click", function(event) {
//     event.preventDefault();
//     var newCity = $("button").eq(0).val();

//     if (newCity.length > 2) {
//         city.push(newCity);
//     }

//     populateButtons(city, "button", ".button");
// });




    



