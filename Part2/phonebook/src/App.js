import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newPerson, setNewPerson] = useState("");

  const resetInput = () => {
    setNewPerson("");
  };

  const addPerson = (event) => {
    event.preventDefault();

    const newObject = {
      name: newPerson,
    };

    setPersons(persons.concat(newObject));
    resetInput();
  };

  const handleChange = (event) => {
    const { value } = event.target;

    setNewPerson(value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input name="name" value={newPerson} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <div>debug: {newPerson}</div>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => {
          return <p key={person.name}>{person.name}</p>;
        })}
      </div>
    </div>
  );
};

export default App;
