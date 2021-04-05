import { useState } from "react";

const Statistic = ({ text, data }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>
        {data}
        {text === "Positive" ? "%" : ""}
      </td>
    </tr>
  );
};

const Statistics = ({ data }) => {
  const { goodVote, neutralVote, badVote } = data;

  const allVotes = goodVote + neutralVote + badVote;
  const totalVotes = goodVote - badVote;
  const averageVote = allVotes > 0 ? totalVotes / allVotes : 0;
  const positiveVotes = allVotes > 0 ? (goodVote / allVotes) * 100 : 0;

  if (!allVotes) {
    return <p>No feedback given</p>;
  }

  return (
    <table>
      <tbody>
        <Statistic text="Good" data={goodVote} />
        <Statistic text="Neutral" data={neutralVote} />
        <Statistic text="Bad" data={badVote} />
        <Statistic text="All" data={allVotes} />
        <Statistic text="Average" data={averageVote} />
        <Statistic text="Positive" data={positiveVotes} />
      </tbody>
    </table>
  );
};

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

function App() {
  const [goodVote, setGoodVote] = useState(0);
  const [neutralVote, setNeutralVote] = useState(0);
  const [badVote, setBadVote] = useState(0);

  return (
    <div className="wrapper">
      <h1>Give Feedback</h1>
      <div className="button-section">
        <Button handleClick={() => setGoodVote(goodVote + 1)} text="Good" />
        <Button
          handleClick={() => setNeutralVote(neutralVote + 1)}
          text="Neutral"
        />
        <Button handleClick={() => setBadVote(badVote + 1)} text="Bad" />
      </div>

      <h2>Statistics:</h2>
      <Statistics data={{ goodVote, neutralVote, badVote }} />
    </div>
  );
}

export default App;
