import React, { useState } from "react";

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

    const existingPerson = persons.find((person) => person.name === newPerson);

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
    <div>
      <h2>Phonebook</h2>
      <div>
        filter show with:{" "}
        <input
          name="filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <form onSubmit={addPerson}>
        <div>
          name: <input name="name" value={name} onChange={handleChange} />
        </div>
        <div>
          number: <input name="number" value={number} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons
          .filter((person) =>
            person.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map((person) => {
            return (
              <p key={person.name}>
                {person.name} {person.number}
              </p>
            );
          })}
      </div>
    </div>
  );
};

export default App;
