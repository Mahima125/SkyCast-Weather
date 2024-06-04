


angular.module('weatherApp', [])
  .controller('weatherController', function($scope, $http) {
    const apiKey = 'db567ea42ceb22e6a97eb9083bf115d4'; 

  
   

    $scope.temperatureUnit = 'C'; 

    $scope.toggleTemperatureUnit = function() {
      $scope.temperatureUnit = $scope.temperatureUnit === 'C' ? 'F' : 'C';
    };

    $scope.convertToFahrenheit = function(celsius) {
      return (celsius * 9/5) + 32;
    };
    

    $scope.searchWeather = function() {
      const city = $scope.city.trim();
      if (city === "") {
        $scope.error = "Please enter a city name.";
        $scope.weatherData = null;
        return;
      }

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      $http.get(url)
        .then(function(response) {
          $scope.weatherData = response.data;
          $scope.error = null;
        })
        .catch(function(error) {
          console.error("Error fetching weather data:", error);
          $scope.error = "An error occurred. Please try again.";
          $scope.weatherData = null;
        });
    };

    $scope.seasonClass = function() {
      if (!$scope.weatherData) {
        return '';
      }

      const weatherMain = $scope.weatherData.weather[0].main;
      let season = '';
      if (weatherMain === 'Clear') {
        season = 'summer';
      } else if (weatherMain === 'Rain' || weatherMain === 'Drizzle' || weatherMain=== 'overcast clouds') {
        season = 'monsoon';
      } else if (weatherMain === 'Snow') {
        season = 'winter';
      } else {
        season = 'spring';
      }

      return season;
    };

    $scope.getTemperature = function() {
      const temp = $scope.weatherData.main.temp;
      if ($scope.temperatureUnit === 'C') {
        return temp;
      } else {
        return convertToFahrenheit(temp);
      }
    };

    $scope.getTemperatureUnit = function() {
      return $scope.temperatureUnit === 'C' ? '°C' : '°F';
    };
  });

  

  function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);



