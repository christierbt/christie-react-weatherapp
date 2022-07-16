import React from "react";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "4b433d9a7f22e9aa26d3e1760e73b0a6";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row align-items-end">
        <div className="col">
          <div className="days-forecast">Mon</div>
          <div className="icon-forecast">⛈</div>
          <div className="temp-forecast">30°C / 19°C</div>
        </div>
        <div className="col">
          <div className="days-forecast">Tue</div>
          <div className="icon-forecast">⛅️</div>
          <div className="temp-forecast">27°C / 20°C</div>
        </div>
        <div className="col">
          <div className="days-forecast">Wed</div>
          <div className="icon-forecast">🌥</div>
          <div class="temp-forecast">30°C / 22°C</div>
        </div>
        <div className="col">
          <div className="days-forecast">Fri</div>
          <div className="icon-forecast">🌥</div>
          <div className="temp-forecast">29°C / 20°C</div>
        </div>
        <div className="col">
          <div className="days-forecast">Sat</div>
          <div className="icon-forecast">☁️</div>
          <div className="temp-forecast">28°C / 19°C</div>
        </div>
      </div>
    </div>
  );
}
