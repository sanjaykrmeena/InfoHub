// Get a reference to the form and the result element
var form = document.getElementById("weather-form");
var result = document.getElementById("weather-result");
var cityName = document.getElementById("city-name");
var extra = document.getElementById("extra-data");


const API_KEY = "957d5aabc56f4b1bb6a182122222512";

// Handle form submission
form.addEventListener("submit", function(event) {
  event.preventDefault();

  // Get the location from the form input
  var location = document.getElementById("location").value;

  // Make the API request to get the weather data
  fetch("https://api.weatherapi.com/v1/current.json?key=" + API_KEY + "&q=" + location, {
      method: "GET",
      contentType: 'application/json'
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      // Create an <img> element and set its src attribute
      // img.src = "https:" + data.current.condition.icon;
      // Append the <img> element to the DOM
      // document.body.appendChild(img);
      // Update the page with the weather data
      const imageElement = document.getElementById('img');

      imageElement.src = "https:" + data.current.condition.icon;

      result.innerHTML = data.current.temp_c + "&deg;C  " + "&nbsp&nbsp&nbsp&nbsp" + data.current.condition.text;

      extra.innerHTML = "Humidity: " + data.current.humidity + "%&nbsp&nbsp&nbsp&nbsp" + "Wind: " + data.current.wind_kph + " km/h";

      cityName.innerHTML = data.location.country + "&nbsp|&nbsp" + data.location.name  + ",&nbsp" + data.location.region;
      
    });
});


