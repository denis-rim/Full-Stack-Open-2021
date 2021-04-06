import React from "react";
import CountryDetails from "./CountryDetails";

const RenderCountries = ({ filteredCountries }) => {
  if (filteredCountries.length > 10) {
    return <p>Too many matches. Specify another filter. </p>;
  }

  if (filteredCountries.length === 1) {
    return <CountryDetails country={filteredCountries} />;
  }

  return (
    <div>
      <ul>
        {filteredCountries.map((country) => {
          return <li key={country.name}>{country.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default RenderCountries;
