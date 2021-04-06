import React from "react";

const CountryDetails = ({ country }) => {
  const { name, capital, population, languages, flag } = country;
  return (
    <div className="country-detail">
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
      </div>{" "}
    </div>
  );
};

export default CountryDetails;
