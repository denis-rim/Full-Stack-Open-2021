import React from "react";

const FilterCountries = ({ handleFilterCountries }) => {
  return (
    <div className="filter-container">
      <label>Find country</label>{" "}
      <input type="text" name="filter" onChange={handleFilterCountries} />
    </div>
  );
};

export default FilterCountries;
