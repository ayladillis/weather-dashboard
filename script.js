$(document).ready(function () {
    var citybutton = document.getElementById("#city-button");

    var cities = [
        "Orlando"
    ];

    function retriveArray(){

    var cities = localStorage.getItem("cities");


    }

// function to make buttons and add to page
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
    var cityName = cities[0]
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName +"&units=imperial&appid=6d62c1e57554dc6cee60932bdfd78a07"

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {

            console.log("response", response)
            var results = response.data;

            for (var i = 0; i < results; i++) {
                $(".name").html("<h3>" + response.name + "</h3>");
                $(".humidity").text("Humidity: " + response.main.humidity);
                var windSpeed = response.wind.speed;
                $(".wind-speed").html("<p>Wind Speed: " +  windSpeed + "</p>");

                console.log("Humidity: " + response.main.humidity);
                console.log("Wind Speed " + response.wind.speed);
            }


        });

        // populateButtons(cities, "city-buttons", "#city-buttons")
   })
      
//    populateButtons(cities, "city-buttons", "#city-buttons")

});








    



