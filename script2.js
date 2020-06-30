$(document).ready(function() {

    var animals = [
      
    ];
  function retriveArray(){ 
    //retrive from local storage the value assosiated with the key of animals 
  var animals = localStorage.getItem("animals");
  //if animals is null, does not return, then make variables animals equal to empty array 
  //JSONstringafy going into local storage and parse taking out of local storge
  //set animal array 
  }
  
  console.log(animals);
  
    // function to make buttons and add to page
    //arrayToUse looks at animals array
    function populateButtons(arrayToUse, classToAdd, areaToAddTo) {
      $(areaToAddTo).empty();
  
      for (var i = 0; i < arrayToUse.length; i++) {
        var newButton = $("<button>");
        newButton.addClass(classToAdd);
        newButton.attr("data-type", arrayToUse[i]);
        newButton.text(arrayToUse[i]);
        $(areaToAddTo).append(newButton);
      }
  
    }
  
    $(document).on("click", ".city-button", function() {
      $("#city").empty();
      $(".city-button").removeClass("active");
      $(this).addClass("active");
  
      var type = $(this).attr("data-type");
      var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + type +"&units=imperial&appid=6d62c1e57554dc6cee60932bdfd78a07"

      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
          var results = response.data;
  
          for (var i = 0; i < results.length; i++) {
            // var cityDiv = $("<div class=\"city-item\">");
            $(".city").append("<div <p>" + response[i].name + "</p></div>")

  
            cityDiv.append(p);
            cityDiv.append(animalImage);
  
            $("#city").append(cityDiv);
          }
        });
    });
  
    // $(document).on("click", ".animal-image", function() {
  
    //   var state = $(this).attr("data-state");
  
    //   if (state === "still") {
    //     $(this).attr("src", $(this).attr("data-animate"));
    //     $(this).attr("data-state", "animate");
    //   }
    //   else {
    //     $(this).attr("src", $(this).attr("data-still"));
    //     $(this).attr("data-state", "still");
    //   }
    // });
  
    $("#add-animal").on("click", function(event) {
      event.preventDefault();
      var newAnimal = $("input").eq(0).val();
  
      if (newAnimal.length > 2) {
        animals.push(newAnimal);
      }
  
      populateButtons(animals, "city-button", "#city-buttons");
  
    });
  
    populateButtons(animals, "city-button", "#city-buttons");
  });
  