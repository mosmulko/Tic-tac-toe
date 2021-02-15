import React from "react";
import { useSelector } from "react-redux";
import {
  selectCurrentPlayer,
} from "../../app/reducers/gameSlice";
import Label from "./Label";
import Timer from "./Timer";
import Board from "./Board";

function  Game() {
  const player = useSelector(selectCurrentPlayer);
  const initialTimer = 30;

  return <div>
    <div>
      <h2>Your turn:</h2>
      <Label id={player.id}/>
      <h3>{player.name}</h3>
    </div>
    <Board player={player.id} />
    <Timer max={initialTimer} />
  </div>;
}

export default Game;
