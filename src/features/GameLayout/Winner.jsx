import React from "react";
import { useSelector } from "react-redux";
import {
  selectWinner,
} from "../../app/reducers/gameSlice";
import Label from "./Label";

function Winner() {
  const winner = useSelector(selectWinner);
  return <div>
     <div>
      <h2>Your won:</h2>
      <Label id={winner.id}/>
      <h3>name: {winner.name}</h3>
      <h3>seconds: {winner.secondsCounter}s</h3>
      <h3>moves: {winner.movesCounter}</h3>
    </div>
  </div>;
}

export default Winner;
