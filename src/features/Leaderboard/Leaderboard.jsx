import React from "react";
import { useSelector } from "react-redux";
import { selectScores } from "../../app/reducers/scoresSlice";

function Leaderboard() {
  const scores = useSelector(selectScores);
  return (
    <div>
      <h2>Leaderboard</h2>
      {scores.map((player, i) => (
        <div key={i}>
          {i + 1}. {player.name} seconds: {player.seconds} moves:
          {player.moves}
        </div>
      ))}
    </div>
  );
}

export default Leaderboard;
