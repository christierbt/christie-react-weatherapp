import React from "react";
import "./Weather.css";

export default function Weather() {
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
          <h1 id="city">Perth</h1>
        </div>
        <h2>
          Last updated: Monday 30th May, 6:00pm<span id="current-date"></span>
        </h2>

        <p id="description"></p>
        <div className="row">
          <div className="col-3">
            <img
              src="https://ssl.gstatic.com/onebox/weather/48/sunny.png"
              alt="Clear"
              id="weather-icon"
              className="float-left"
            />
          </div>

          <div className="col-3">
            <div className="current-temperature">
              <span id="current-temp">15</span>
              <span className="units">°C</span>
            </div>
          </div>
          <div className="col-4 weather-details">
            <ul>
              <li>
                Wind: <span id="wind">25</span>km/h
              </li>
              <li>
                Humidity: <span id="humidity">2</span>%
              </li>
            </ul>
          </div>

          <div className="weather-forecast" id="forecast"></div>
          <footer>
            <a
              href="https://github.com/christierbt/christie-react-weatherapp"
              target="_blank"
            >
              Open Source Code
            </a>{" "}
            by Christie Rosenblatt
          </footer>
        </div>
      </form>
    </div>
  );
}
