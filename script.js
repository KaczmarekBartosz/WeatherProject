function getWeatherData() {
  var apiUrl =
    "http://api.weatherapi.com/v1/current.json?key=f231195de4bd434b82f213858230707&q=auto:ip&aqi=yes";

  fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var weatherDataElement = document.getElementById("weather-data");
      weatherDataElement.innerHTML =
        "Aktualna temperatura wynosi " + data.current.temp_c + "°C" + ",";

      if (data.current.temp_c >= 20) {
        weatherDataElement.innerHTML +=
          "<br>więc możesz założyć dziecku krótkie spodenki i koszulkę z krótkim rękawkiem.";
      } else {
        weatherDataElement.innerHTML +=
          "<br>więc jest mniej niż 20 stopni. Powinieneś dziecku założyć bluzę z kapturem!";
      }
    })
    .catch(function (error) {
      console.log("Wystąpił błąd:", error);
    });
}

getWeatherData();

function getWeatherDataFeelsLike() {
  var apiUrl =
    "http://api.weatherapi.com/v1/current.json?key=f231195de4bd434b82f213858230707&q=auto:ip&aqi=yes";

  fetch(apiUrl)
    .then(function (response2) {
      return response2.json();
    })
    .then(function (data) {
      var weatherDataElement = document.getElementById(
        "weather-data-feelslike"
      );
      weatherDataElement.innerHTML =
        "Odczuwalna temperatura: " + data.current.feelslike_c + "°C";
    })
    .catch(function (error) {
      console.log("Wystąpił błąd:", error);
    });
}

getWeatherDataFeelsLike();

function getCurrentWindSpeed() {
  var apiUrl =
    "http://api.weatherapi.com/v1/current.json?key=f231195de4bd434b82f213858230707&q=auto:ip&aqi=yes";

  fetch(apiUrl)
    .then(function (response3) {
      return response3.json();
    })
    .then(function (data) {
      var weatherDataElement = document.getElementById("current-wind-speed");
      weatherDataElement.innerHTML =
        "Aktualnie wiatr wieje z prędkością: " + data.current.wind_kph + "km/h";
    })
    .catch(function (error) {
      console.log("Wystąpił błąd:", error);
    });
}

getCurrentWindSpeed();
