import React, { useState } from "react";
import FilterForm from "./components/FilterForm";
import PersonsFormInput from "./components/PersonsFormInput";
import DisplayPersons from "./components/DisplayPersons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newPerson, setNewPerson] = useState({
    name: "",
    number: "",
  });
  const [filter, setFilter] = useState("");

  const { name, number } = newPerson;

  const resetInput = () => {
    setNewPerson({ name: "", number: "" });
  };

  const addPerson = (event) => {
    event.preventDefault();

    const existingPerson = persons.find(
      (person) => person.name === newPerson.name
    );

    if (existingPerson) {
      alert(`${newPerson} is already added to phonebook`);
      resetInput();
      return;
    }

    const newObject = {
      name: newPerson.name,
      number: newPerson.number,
    };

    setPersons(persons.concat(newObject));
    resetInput();
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
