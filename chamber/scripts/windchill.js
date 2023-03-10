const apiKey = "533d26226d7c75f559c40b222f27d994";
const city = "lat=43.0201&lon=-123.2931";
const url = `https://api.openweathermap.org/data/2.5/weather?${city}&units=metric&appid=${apiKey}`;

// Retrieve the weather data from the API
fetch(url)
  .then(response => response.json())
  .then(data => {
    const temperature = data.main.temp;
    const windSpeed = data.wind.speed * 3.6; // Convert wind speed from m/s to km/h
    const weatherIcon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const shortForecast = data.weather[0].description;

    // Calculate wind chill
    let windChill;
    if (temperature < 10 && windSpeed > 4.8) {
      windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
    } else {
      windChill = NaN;
    }

    // Update the HTML with the temperature, wind speed, weather icon, and forecast
    document.querySelector('.weather-temp').innerHTML = `${temperature.toFixed(1)} &#176;C`;
    document.querySelector('#wind-speed').innerHTML = `${windSpeed.toFixed(1)}`;
    document.querySelector('#weather-icon').src = weatherIcon;
    document.querySelector('#shortForecast').innerHTML = shortForecast;

    // Update the HTML with the wind chill
    if (isNaN(windChill)) {
      document.querySelector('#wind-chill').innerHTML = 'N/A';
    } else {
      document.querySelector('#wind-chill').innerHTML = `${windChill.toFixed(1)} &#176;C`;
    }
  });