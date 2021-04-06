import { useState, useEffect } from "react";
import axios from "axios";
import FilterCountries from "./components/FilterCountries";
import RenderCountries from "./components/RenderCountries";

function App() {
  const [countries, setState] = useState([]);
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
  };

  return (
    <div>
      <FilterCountries handleFilterCountries={handleFilterCountries} />
      <RenderCountries filteredCountries={filteredCountries} />
    </div>
  );
}

export default App;
