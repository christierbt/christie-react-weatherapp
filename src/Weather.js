import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: "Wednesday 6th July, 2:00pm",
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/48/sunny.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <form id="search-form">
          <div className="row">
            <div className="col-6">
              <input
                className="enter-city w-100"
                type="city"
                placeholder="Enter your city..."
                id="search-city-input"
              />
            </div>
            <div className="col-3">
              <input
                className="btn btn-primary w-100"
                type="submit"
                value="Search"
              />
            </div>
            <div className="col-3">
              <input
                className="btn btn-primary w-100"
                id="current-button"
                type="submit"
                value="Current"
              />
            </div>
          </div>
          <div className="col-9">
            <h1 id="city">{weatherData.city}</h1>
          </div>
          <h2>
            Last updated: {weatherData.date}
            <span id="current-date"></span>
          </h2>

          <p id="description" className="text-capitalize">
            {weatherData.description}
          </p>
          <div className="row">
            <div className="col-3">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                id="weather-icon"
                className="float-left"
              />
            </div>

            <div className="col-3">
              <div className="current-temperature">
                <span id="current-temp">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="units">°C</span>
              </div>
            </div>
            <div className="col-4 weather-details">
              <ul>
                <li>
                  Wind: <span id="wind">{Math.round(weatherData.wind)}</span>
                  km/h
                </li>
                <li>
                  Humidity: <span id="humidity">{weatherData.humidity}</span>%
                </li>
              </ul>
            </div>
            <div className="weather-forecast" id="forecast"></div>
          </div>
        </form>
      </div>
    );
  } else {
    const apiKey = "4b433d9a7f22e9aa26d3e1760e73b0a6";
    let city = "Perth";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
