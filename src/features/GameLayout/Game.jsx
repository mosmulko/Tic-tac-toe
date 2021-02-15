import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  playerTurnEnded,
  selectCurrentPlayer,
} from "../../app/reducers/gameSlice";
import Label from "./Label";
import Timer from "./Timer";
import Board from "./Board";

function  Game() {
  const player = useSelector(selectCurrentPlayer);
  const dispatch = useDispatch();
  const initialTimer = 30;
  const [secondsLeft, setSecondsLeft] = useState(initialTimer);
  const seconds = initialTimer - secondsLeft;

  const finishPlayerTurn = () => {
    dispatch(playerTurnEnded({id: player.id, seconds: seconds}));
    setSecondsLeft(initialTimer);
  }

  return <div>
    <div>
      <h2>Your turn:</h2>
      <Label id={player.id}/>
      <h3>{player.name}</h3>
    </div>
    <Board 
      player={player} 
      nextTurn={finishPlayerTurn}
      seconds={seconds}
    />
    <Timer 
      set={() => setSecondsLeft(secondsLeft - 1)} 
      reset={finishPlayerTurn}
      seconds={secondsLeft}
    />
  </div>;
}

export default Game;
