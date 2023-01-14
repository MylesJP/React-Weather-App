import React, { useState } from "react";

export default function ThirtysixHour({ forecastData }) {

  return (
    <div className="thirtysix-hour">
      <div className="tonight">
        {forecastData.list ? <p className="time">{(forecastData.list[0].dt_txt).slice(11, 16)}</p> : null}
        {forecastData.list ? (
          <p className="bold">{Math.round(forecastData.list[0].main.temp)}°C</p>
        ) : null}
        {forecastData.list ? <p>{forecastData.list[0].weather[0].main}</p> : null}
        {forecastData.list ? (
          <p>{(forecastData.list[0].wind.speed * 3.6).toFixed()} km/h</p>
        ) : null}
      </div>
      <div className="tomorrow-morning">
        {forecastData.list ? <p className="time">{(forecastData.list[2].dt_txt).slice(11, 16)}</p> : null}
        {forecastData.list ? (
          <p className="bold">{Math.round(forecastData.list[2].main.temp)}°C</p>
        ) : null}
        {forecastData.list ? <p>{forecastData.list[2].weather[0].main}</p> : null}
        {forecastData.list ? (
          <p>{(forecastData.list[2].wind.speed * 3.6).toFixed()} km/h</p>
        ) : null}
      </div>
      <div className="tomorrow-afternoon">
        {forecastData.list ? <p className="time">{(forecastData.list[4].dt_txt).slice(11, 16)}</p> : null}
        {forecastData.list ? (
          <p className="bold">{Math.round(forecastData.list[4].main.temp)}°C</p>
        ) : null}
        {forecastData.list ? <p>{forecastData.list[4].weather[0].main}</p> : null}
        {forecastData.list ? (
          <p>{(forecastData.list[4].wind.speed * 3.6).toFixed()} km/h</p>
        ) : null}
      </div>
      <div className="tomorrow-evening">
        {forecastData.list ? <p className="time">{(forecastData.list[6].dt_txt).slice(11, 16)}</p> : null}
        {forecastData.list ? (
          <p className="bold">{Math.round(forecastData.list[6].main.temp)}°C</p>
        ) : null}
        {forecastData.list ? <p>{forecastData.list[6].weather[0].main}</p> : null}
        {forecastData.list ? (
          <p>{(forecastData.list[6].wind.speed * 3.6).toFixed()} km/h</p>
        ) : null}
      </div>
    </div>
  );
}
