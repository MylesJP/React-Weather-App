import React from "react";

export default function CurrentConditions({ data }) {
  return (
    <div className="bottom">
      <div className="feels">
        <p>Feels Like</p>
        {data.main ? <p className="bold">{Math.round(data.main.feels_like)}°C</p> : null}
      </div>
      <div className="humidity">
        <p>Humidity</p>
        {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
      </div>
      <div className="wind">
        <p>Wind Speed</p>
        {data.wind ? <p className="bold">{(data.wind.speed*3.6).toFixed()} km/h</p> : null}
      </div>
    </div>
  );
}
