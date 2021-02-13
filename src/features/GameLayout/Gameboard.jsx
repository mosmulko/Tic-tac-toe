import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { statusChanged, selectStatus } from "../../app/reducers/statusSlice";
import {
  playerTurnEnded,
  timerReseted,
  selectCurrentPlayer,
} from "../../app/reducers/gameSlice";
import Label from "./Label";
import Timer from "./Timer";
import TurnEndButton from './TurnEndButton';
// import Timer from './Timer';


function Gameboard() {
  const player = useSelector(selectCurrentPlayer);
  const initialTimer = 30;

  return <div>
    <div>
      <h2>Your turn:</h2>
      <Label id={player.id}/>
      <h3>{player.name}</h3>
    </div>
    <Timer max={initialTimer} />
    <div>Board</div>
    <TurnEndButton max={initialTimer}/>
    {/* <button onClick={endPlayersTurn}>Next turn</button> */}
  </div>;
}

export default Gameboard;
