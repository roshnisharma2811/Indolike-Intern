const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key

function getWeather() {
  const city = document.getElementById("cityInput").value;
  const weatherDiv = document.getElementById("weatherResult");

  if (!city) {
    weatherDiv.innerHTML = "Please enter a city.";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error("City not found");
      return response.json();
    })
    .then(data => {
      const { name, main, weather } = data;
      weatherDiv.innerHTML = `
        <h2>${name}</h2>
        <p>${weather[0].description}</p>
        <p>🌡️ Temp: ${main.temp} °C</p>
        <p>💧 Humidity: ${main.humidity}%</p>
      `;
    })
    .catch(error => {
      weatherDiv.innerHTML = error.message;
    });
}
