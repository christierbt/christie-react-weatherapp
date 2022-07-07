import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <div className="col-9">
        <h1>{props.data.city}</h1>
      </div>
      <h2>
        Last updated: <FormattedDate date={props.data.date} />
        <span id="current-date"></span>
      </h2>

      <p id="description" className="text-capitalize">
        {props.data.description}
      </p>
      <div className="row">
        <div className="col-3">
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
            id="weather-icon"
            className="float-left"
          />
        </div>

        <div className="col-3">
          <div className="current-temperature">
            <span id="current-temp">{Math.round(props.data.temperature)}</span>
            <span className="units">°C</span>
          </div>
        </div>
        <div className="col-4 weather-details">
          <ul>
            <li>
              Wind: <span id="wind">{Math.round(props.data.wind)}</span>
              km/h
            </li>
            <li>
              Humidity: <span id="humidity">{props.data.humidity}</span>%
            </li>
          </ul>
        </div>
        <div className="weather-forecast" id="forecast"></div>
      </div>
    </div>
  );
}
