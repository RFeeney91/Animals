 // Example queryURL for Giphy API
var queryURL = "http://api.giphy.com/v1/gifs/trending?api_key=f28d3740e4d24ba284bd6da55330e1d8";
    $.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
      console.log(response);
    });
