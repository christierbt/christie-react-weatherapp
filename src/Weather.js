import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div class="container">
      <form id="search-form">
        <div class="row">
          <div class="col-6">
            <input
              class="enter-city w-100"
              type="city"
              placeholder="Enter your city..."
              id="search-city-input"
            />
          </div>
          <div class="col-3">
            <input class="btn btn-primary w-100" type="submit" value="Search" />
          </div>
          <div class="col-3">
            <input
              class="btn btn-primary w-100"
              id="current-button"
              type="submit"
              value="Current"
            />
          </div>
        </div>
        <div class="col-9">
          <h1 id="city">Perth</h1>
        </div>
        <h2>
          Last updated: Monday 30th May, 6:00pm<span id="current-date"></span>
        </h2>

        <p id="description"></p>
        <div class="row">
          <div class="col-3">
            <img
              src="https://ssl.gstatic.com/onebox/weather/48/sunny.png"
              alt="Clear"
              id="weather-icon"
              class="float-left"
            />
          </div>

          <div class="col-3">
            <div class="current-temperature">
              <span id="current-temp">15</span>
              <span class="units">°C</span>
            </div>
          </div>
          <div class="col-4 weather-details">
            <ul>
              <li>
                Wind: <span id="wind">25</span>km/h
              </li>
              <li>
                Humidity: <span id="humidity">2</span>%
              </li>
            </ul>
          </div>

          <div class="weather-forecast" id="forecast"></div>
        </div>
      </form>
    </div>
  );
}
