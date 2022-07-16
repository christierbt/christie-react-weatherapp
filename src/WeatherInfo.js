import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <div className="col-9">
        <h1 id="city">{props.data.city}</h1>
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
          <div className="float-left">
            <WeatherIcon code={props.data.icon} size={52} />
          </div>
        </div>

        <div className="col-3">
          <WeatherTemperature celsius={props.data.temperature} />
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
      </div>
    </div>
  );
}
