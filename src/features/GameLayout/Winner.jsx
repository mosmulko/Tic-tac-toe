import React from "react";
import { useSelector } from "react-redux";
import { selectWinner } from "../../app/reducers/scoresSlice";

function Winner() {
  const winner = useSelector(selectWinner);
  return <div id='win-wrapper'>
      <h3 className='title'>You won</h3>
      <h2>{winner.name}</h2>
      <div id='score-wrapper'>
      <h3>Your score:</h3>
      <ul>
        <li>Place: {winner.place}</li>
        <li>Seconds: {winner.seconds}s</li>
        <li>Turns: {winner.moves}</li>
      </ul>
      </div>
  </div>
}

export default Winner;
