var form = document.getElementById("astronomy-form");
var result = document.getElementById("result");
var result2 = document.getElementById("result2");
var result3 = document.getElementById("result3");
var cityName = document.getElementById("city-name");

const API_KEY = "957d5aabc56f4b1bb6a182122222512";

form.addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Get the location and date from the form input
    var location = document.getElementById("location").value;
    var date = document.getElementById("date").value;
  
    // Make the API request to get the weather data
    fetch("http://api.weatherapi.com/v1/astronomy.json?key=" + API_KEY + "&q=" + location + "&dt=" + date, {
        method: "GET",
        contentType: 'application/json'
      })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        // Update the page with the weather data
  
        result.innerHTML = "Sunrise: " + data.astronomy.astro.sunrise + "&nbsp&nbsp&nbsp&nbsp" + "Sunset: " + data.astronomy.astro.sunset;
  
        result2.innerHTML = "Moonrise: " + data.astronomy.astro.moonrise + "&nbsp&nbsp&nbsp&nbsp" + "Moonset: " + data.astronomy.astro.moonset;
  
        result3.innerHTML = "Moon Phase: " + data.astronomy.astro.moon_phase + "&nbsp&nbsp&nbsp&nbsp" + "Moon Illumination: " + data.astronomy.astro.moon_illumination;

        cityName.innerHTML = data.location.country + "&nbsp|&nbsp" + data.location.name  + ",&nbsp" + data.location.region;
        
      });
  });