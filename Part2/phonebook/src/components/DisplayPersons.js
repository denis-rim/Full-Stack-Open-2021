import React from "react";

const DisplayPersons = ({ persons, filter }) => {
  return (
    <div className="display-persons-container">
      <ul>
        {persons
          .filter((person) =>
            person.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map((person) => {
            return (
              <li key={person.id}>
                {person.name} {person.number}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default DisplayPersons;
