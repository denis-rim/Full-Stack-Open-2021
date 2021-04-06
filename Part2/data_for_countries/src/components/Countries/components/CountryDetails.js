import axios from "axios";
import React, { useState, useEffect } from "react";

const api_key = process.env.REACT_APP_API_KEY;
const BASE_URL = `http://api.weatherstack.com/current?access_key=${api_key}&units=m&query=`;

const CountryDetails = ({ country }) => {
  const [weather, setWeather] = useState({});

  const { name, capital, population, languages, flag } = country;
  const { temperature, weather_icons, wind_speed, wind_dir } = weather;

  console.log(weather);

  useEffect(() => {
    axios.get(`${BASE_URL}${name}`).then((response) => {
      console.log(response.data);
      setWeather(response.data.current);
    });
  }, []);

  return (
    <div className="country-detail">
      <div className="country-detail__country">
        <h3>{name}</h3>
        <div>
          <p>capital: {capital}</p>
          <p>population: {population}</p>
        </div>
        <h3>Languages</h3>
        <div>
          <ul>
            {languages.map((language) => {
              return (
                <li key={`${name}${language.nativeName}`}>{language.name}</li>
              );
            })}
          </ul>
        </div>
        <div>
          <img
            style={{ width: "200px", border: "1px solid black" }}
            src={flag}
            alt={`${name} flag`}
          />
        </div>
      </div>

      <div className="country-detail__weather">
        <h3>Weather in {capital}</h3>
        <img src={weather_icons} />
        <p>Temperature: {temperature}</p>
        <p>
          Wind: {wind_speed} km/h, direction: {wind_dir}
        </p>
      </div>
    </div>
  );
};

export default CountryDetails;
