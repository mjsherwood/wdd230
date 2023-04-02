const apiKey = "533d26226d7c75f559c40b222f27d994";
const city = "lat=33.1581&lon=-117.3506"; // Coordinates for Carlsbad
const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?${city}&units=metric&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?${city}&units=metric&appid=${apiKey}`;

// Retrieve the current weather data from the Weather API
fetch(currentWeatherUrl)
  .then(response => response.json())
  .then(data => {
    const temperature = data.main.temp;
    const weatherIcon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const shortForecast = data.weather[0].description;
    const humidity = data.main.humidity;

    // Update the HTML with the temperature, humidity, weather icon, and forecast
    document.querySelector('.weather-temp').innerHTML = `${temperature.toFixed(1)} &#176;C`;
    document.querySelector('#humidity').innerHTML = `${humidity}`;
    document.querySelector('#weather-icon').src = weatherIcon;
    document.querySelector('#shortForecast').innerHTML = shortForecast;
  });

// Retrieve the 3-day forecast from the Forecast API
fetch(forecastUrl)
  .then(response => response.json())
  .then(data => {
    const forecastList = data.list.filter((item, index) => index % 8 === 0).slice(0, 3);

    // Update the 3-day forecast
    forecastList.forEach((item, index) => {
      const forecastTemp = item.main.temp;
      document.querySelector(`#forecast-day${index + 1}`).innerHTML = `Day ${index + 1}: ${forecastTemp.toFixed(1)} &#176;C`;
    });
  })
  .catch(error => {
    console.error('Error fetching forecast data:', error);
  });