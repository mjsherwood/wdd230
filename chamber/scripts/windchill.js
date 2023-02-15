const myLatitude = 43.027485;
const myLongitude = -123.28626;
const weatherApiUrl = `https://api.weather.gov/points/${myLatitude},${myLongitude}`;
  
// Retrieve the weather data from the API
fetch(weatherApiUrl, {
headers: {
    'User-Agent': '(mjsherwood.github.io/wdd230/chamber, michaeljsherwood@msn.com)'
}
})
.then(response => response.json())
.then(data => {
    const weatherUrl = data.properties.forecast;
    return fetch(weatherUrl, {
    headers: {
        'User-Agent': '(myweatherapp.com, contact@myweatherapp.com)'
    }
    });
})
.then(response => response.json())
.then(data => {
    const temperature = (((data.properties.periods[0].temperature) - 32) * 5 / 9);
    let windSpeed = data.properties.periods[0].windSpeed;
    const weatherIcon = data.properties.periods[0].icon;
    const shortForecast = data.properties.periods[0].shortForecast;
      
    // Strip the mph from the wind speed string and convert to a floating point number
    windSpeed = parseFloat(windSpeed.replace(' mph', ''));

    // Convert the wind speed from mph to km/h
    windSpeed = windSpeed * 1.609344;

    // Update the HTML with the temperature and wind speed
    document.querySelector('.weather-temp').innerHTML = `${temperature.toFixed(1)} &#176;C`;
    document.querySelector('#wind-speed').innerHTML = `${windSpeed.toFixed(1)}`;
    document.querySelector('#weather-icon').src = weatherIcon;
    document.querySelector('#shortForecast').innerHTML = shortForecast;
        
    // Calculate the wind chill
    let windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
      
    // Update the HTML with the wind chill
    document.querySelector('#wind-chill').innerHTML = windChill.toFixed(1) + ' &#176;C';
});
