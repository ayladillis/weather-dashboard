$(document).ready(function () {
    var citybutton = document.getElementById("#city-button");
    
    var cities = [ ];

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
      function saveCities(){
          localStorage.setItem("cities", JSON.stringify);
      }

  // once search button is clicked do the following  
   $("#search").on("click", function(event){
    cities = [ ];
    saveCities()
    event.preventDefault();
    $("#city-info").empty();
    $(".city-button").removeClass("active");
    $(this).addClass("active");

    // console.log("button clicked")
    let city = document.querySelector("#city-text").value
    console.log(city);

    populateButtons();

    var type = $(this).attr("data-type");
//city name is extracted from array
    var cityName = cities[0]
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city +"&units=imperial&appid=6d62c1e57554dc6cee60932bdfd78a07"

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {

            console.log("response", response)
            var windSpeed = response.wind.speed;

                $("#name").html("<h2>" + response.name + "</h2>");
                $("#humidity").text("Humidity: " + response.main.humidity);
                $("#wind-speed").html("<p>Wind Speed: " +  windSpeed + "</p>");

                console.log("Humidity: " + response.main.humidity);
                console.log("Wind Speed " + response.wind.speed);

                return response; 
            

        }).then(function(response){
            console.log("hello world", response);

            for(i = 0; i < 5; i++){
                //insert 5 cards here!
            }

        })

       
   })
      


});








    



