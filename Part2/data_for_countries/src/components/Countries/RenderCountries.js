import React from "react";
import CountryDetails from "./components/CountryDetails";
import Country from "./components/Country";

const RenderCountries = ({ filteredCountries }) => {
  if (filteredCountries.length === 0) {
    return <p>No country found</p>;
  }

  if (filteredCountries.length > 10) {
    return <p>Too many matches. Specify another filter. </p>;
  }

  if (filteredCountries.length === 1) {
    const country = filteredCountries[0];
    return <CountryDetails country={country} />;
  }

  return (
    <div className="render-countries-wrapper">
      <ul>
        {filteredCountries.map((country) => {
          return <Country key={country.name} country={country} />;
        })}
      </ul>
    </div>
  );
};

export default RenderCountries;
