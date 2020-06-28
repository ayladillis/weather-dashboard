    
    var APIKey = "6d62c1e57554dc6cee60932bdfd78a07";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIKey;

    // queryParams.q = $(".search-city").val().trim();



    // Here we run our AJAX call to the OpenWeatherMap API
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
          console.log(queryURL);


    });

    $(".search-city").on("click", function(event){
        event.preventDefault();
    });
    
        $.ajax({
            url: queryURL,
            method: "GET"
          }).then(function(response){
        // Transfer content to HTML
        $(".city").html("<h1>" + response.name + " Weather Details</h1>");
        var windSpeed = response.wind.speed;
        $(".humidity").text("Humidity: " + response.main.humidity);
        $(".wind-speed").html("<p>Wind Speed: " +  windSpeed + "</p>");
        $(".uv-index").text("UV Index ");

          });
    
