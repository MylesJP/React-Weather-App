import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import CurrentConditions from "./components/CurrentConditions";
import ThirtysixHour from "./components/ThirtysixHour";

const API_KEY = process.env.REACT_APP_API_KEY

function App() {
  const [data, setData] = useState({});
  const [forecastData, setForecastData] = useState({});
  const [location, setLocation] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;
  const forecasturl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${API_KEY}`;

  // Call this to execute both functions rather than individually
  function clickFunctions() {
    searchLocation();
    getForecast();
  }

  const searchLocation = () => {
    axios.get(url).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
    setLocation("");
  };

  const getForecast = () => {
    axios.get(forecasturl).then((response) => {
      setForecastData(response.data);
      console.log(response.data);
    });
  };

  return (
    <div className="app">
      <div className="container">
        <div className="search">
          <SearchBar
            location={location}
            setLocation={setLocation}
            clickFunctions={clickFunctions}
          />
        </div>
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        {data.main !== undefined && <CurrentConditions data={data} />}
        {data.main !== undefined && <h2>36 Hours</h2>}
        {data.main !== undefined && <ThirtysixHour forecastData={forecastData} />}
      </div>
    </div>
  );
}

export default App;
