import { useState } from "react";

function App() {
  const [goodVote, setGoodVote] = useState(0);
  const [neutralVote, setNeutralVote] = useState(0);
  const [badVote, setBadVote] = useState(0);

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
      </div>
    </div>
  );
}

export default App;
