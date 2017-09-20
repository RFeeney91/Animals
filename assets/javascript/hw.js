var animalButtons

var animal-form

var animal-input

var animals

var addAnimals



    // Example queryURL for Giphy API
    var queryURL = "http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";
    $.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
      console.log(response);
    });
