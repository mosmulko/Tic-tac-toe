import React from "react";
import { useSelector } from "react-redux";
import { selectScores } from "../../app/reducers/scoresSlice";
import './Leaderboard.css';

function Leaderboard() {
  const scores = useSelector(selectScores);
  return (
    <div>
      <h3 className='title'>Leaderboard</h3>
       <table>
       <thead>
          <tr>
            <th>Place</th>
            <th>Name</th>
            <th>Seconds</th>
            <th>Moves</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((player, i) => (
            <tr key={i}>
            <td>{i + 1}</td>
            <td>{player.name}</td>
            <td>{player.seconds}</td>
            <td>{player.moves}</td>
            </tr>
          ))}
        </tbody>
    </table>
    </div>
  );
}

export default Leaderboard;
