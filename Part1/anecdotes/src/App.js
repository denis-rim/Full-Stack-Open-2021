import React, { useState } from "react";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const ShowAnecdote = ({ anecdote, votes }) => {
  return (
    <div>
      <div>{anecdote}</div>
      <p>Has: {votes} votes</p>
    </div>
  );
};

const App = () => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const topAnecdote = votes.indexOf(Math.max(...votes));

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
      <h2>Anecdote of the day</h2>
      <div className="anecdote-container">
        <ShowAnecdote anecdote={anecdotes[selected]} votes={votes[selected]} />
      </div>
      <div className="button-container">
        <Button handleClick={getRandomNumber} text="Next Anecdote" />
        <Button handleClick={handleVote} text="Vote" />
      </div>
      <h2>Anecdote with most votes</h2>
      <ShowAnecdote
        anecdote={anecdotes[topAnecdote]}
        votes={votes[topAnecdote]}
      />
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
