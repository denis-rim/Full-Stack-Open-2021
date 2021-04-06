import React, { useState, useEffect } from "react";
import axios from "axios";
import FilterForm from "./components/FilterForm";
import PersonsFormInput from "./components/PersonsFormInput";
import DisplayPersons from "./components/DisplayPersons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newPerson, setNewPerson] = useState({
    name: "",
    number: "",
  });
  const [filter, setFilter] = useState("");

  const { name, number } = newPerson;

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

  const resetInput = () => {
    setNewPerson({ name: "", number: "" });
  };

  const addPerson = (event) => {
    event.preventDefault();

    if (!newPerson.name || !newPerson.number) {
      alert("Name and number field must be filled");
      return;
    }

    const existingPerson = persons.find(
      (person) => person.name === newPerson.name
    );

    if (existingPerson) {
      alert(`${newPerson.name} is already added to phonebook`);
      resetInput();
      return;
    }

    const newObject = {
      name: newPerson.name,
      number: newPerson.number,
    };

    axios.post("http://localhost:3001/persons", newObject).then((response) => {
      setPersons(persons.concat(response.data));
      resetInput();
    });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setNewPerson({ ...newPerson, [name]: value });
  };

  return (
    <div className="app">
      <h2>Phonebook</h2>
      <FilterForm filter={filter} setFilter={setFilter} />
      <PersonsFormInput
        name={name}
        number={number}
        handleChange={handleChange}
        addPerson={addPerson}
      />
      <h2>Numbers</h2>
      <DisplayPersons filter={filter} persons={persons} />
    </div>
  );
};

export default App;
