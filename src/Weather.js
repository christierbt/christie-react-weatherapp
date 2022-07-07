import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/48/sunny.png",
    });
  }

  function search() {
    const apiKey = "4b433d9a7f22e9aa26d3e1760e73b0a6";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-6">
            <input
              className="enter-city w-100"
              type="city"
              placeholder="Enter your city..."
              id="search-city-input"
              onChange={handleCityChange}
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
        <WeatherInfo data={weatherData} />
      </form>
    );
  } else {
    search();
    return "Loading...";
  }
}
