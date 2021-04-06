import React, { useState } from "react";
import CountryDetails from "./CountryDetails";

const Country = ({ country }) => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className="country-list-wrapper">
      <div className="country-list__item">
        <li>{country.name}</li>
        <button onClick={() => setIsToggled(!isToggled)}>Show details</button>
      </div>
      <div>{isToggled ? <CountryDetails country={country} /> : null}</div>
    </div>
  );
};

export default Country;
