import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: 64566554555 },
  ]);
  const [newPerson, setNewPerson] = useState({
    name: "",
    number: "",
  });

  const { name, number } = newPerson;

  const resetInput = () => {
    setNewPerson({});
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

  console.log(newPerson);

  return (
    <div>
      <h2>Phonebook</h2>
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
        {persons.map((person) => {
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
