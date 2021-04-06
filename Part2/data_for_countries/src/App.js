import { useState, useEffect } from "react";
import axios from "axios";
import FilterCountries from "./components/FilterCountries";
import RenderCountries from "./components/Countries/RenderCountries";

function App() {
  const [countries, setState] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setState(response.data);
    });
  }, []);

  const handleFilterCountries = (event) => {
    const filterVal = event.target.value;
    const filteredCountries = countries.filter((country) =>
      country.name.toLowerCase().includes(filterVal.toLowerCase())
    );
    setFilteredCountries(filteredCountries);
    setFilterValue(filterVal);
  };

  return (
    <div className="wrapper">
      <FilterCountries handleFilterCountries={handleFilterCountries} />
      {filterValue ? (
        <RenderCountries filteredCountries={filteredCountries} />
      ) : (
        <p>Enter country name</p>
      )}
    </div>
  );
}

export default App;
