import React from "react";
import { useSelector } from "react-redux";
import { selectWinner } from "../../app/reducers/scoresSlice";
// import Label from "./Label";

function Winner() {
  const winner = useSelector(selectWinner);
  return <div>
     <div>
     <h3>{winner.name} won!</h3>
      {/* <Label id={winner.id}/> */}
      <h3>place: {winner.place}</h3>
      <h3>seconds: {winner.seconds}s</h3>
      <h3>moves: {winner.moves}</h3>
    </div>
  </div>;
}

export default Winner;
