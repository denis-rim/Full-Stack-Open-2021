import React, { useState } from "react";

const App = () => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const getRandomNumber = () => {
    const newSelected = Math.round(Math.random() * (anecdotes.length - 1));
    if (newSelected !== selected) {
      setSelected(newSelected);
      return;
    }
    getRandomNumber();
  };

  const handleVote = () => {
    const copyVotes = [...votes];
    copyVotes[selected] += 1;
    setVotes(copyVotes);
  };

  return (
    <div className="container">
      <div className="anecdote-container">{anecdotes[selected]}</div>
      <p>Has: {votes[selected]} votes</p>
      <div className="button-container">
        <button onClick={getRandomNumber}>Next Anecdote</button>
        <button onClick={handleVote}>Vote</button>
      </div>
    </div>
  );
};

export default App;

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];
