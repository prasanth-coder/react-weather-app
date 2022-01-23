import React, { useState } from 'react';
import { WiCloudy } from 'react-icons/wi';
import axios from 'axios';
import './style.css';
const App = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState();
  function getWeatherData() {
    const apikey = 'a4f409867cedecc5467bbde3e45523cc';
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}`
      )
      .then((res) => {
        console.log(res.data);
        setWeather(res.data);
      });
  }

  return (
    <>
      <input
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
        }}
        placeholder="Enter the city ..."
      />
      <br />
      <br />
      <button onClick={getWeatherData}>Get Data</button>
      {typeof weather === 'undefined' ? (
        <p>Welcome to weather App</p>
      ) : (
        <>
          <div className="content">
            <p className="one">City Name - {weather.city.name}</p>
            <p>Latitude - {weather.city.coord.lat}</p>
            <p>Longitude - {weather.city.coord.lon}</p>
            <p>
              <WiCloudy className="icons" />
              Climate - {weather.list[0].weather[0].description}
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default App;
