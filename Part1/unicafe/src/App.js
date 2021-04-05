import { useState } from "react";

function App() {
  const [goodVote, setGoodVote] = useState(0);
  const [neutralVote, setNeutralVote] = useState(0);
  const [badVote, setBadVote] = useState(0);

  const allVotes = goodVote + neutralVote + badVote;
  const totalVotes = goodVote - badVote;
  const averageVote = allVotes > 0 ? totalVotes / allVotes : 0;
  const positiveVotes = allVotes > 0 ? (goodVote / allVotes) * 100 : 0;

  return (
    <div>
      <h1>Give Feedback</h1>
      <div>
        <button onClick={() => setGoodVote(goodVote + 1)}>Good</button>
        <button onClick={() => setNeutralVote(neutralVote + 1)}>Neutral</button>
        <button onClick={() => setBadVote(badVote + 1)}>Bad</button>
      </div>
      <div>
        <h2>Statistics:</h2>
        <p>Good: {goodVote}</p>
        <p>Neutral: {neutralVote}</p>
        <p>Bad: {badVote}</p>
        <p>All: {allVotes}</p>
        <p>Average: {averageVote}</p>
        <p>Positive: {positiveVotes}</p>
      </div>
    </div>
  );
}

export default App;
