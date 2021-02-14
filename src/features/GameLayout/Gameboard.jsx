import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  playerTurnEnded,
  selectCurrentPlayer,
} from "../../app/reducers/gameSlice";
import Label from "./Label";
import Timer from "./Timer";
import Button from './Button';


function  Gameboard() {
  const player = useSelector(selectCurrentPlayer);
  const dispatch = useDispatch();
  const initialTimer = 30;

  return <div>
    <div>
      <h2>Your turn:</h2>
      <Label id={player.id}/>
      <h3>{player.name}</h3>
    </div>
    <div>Board</div>
    <Timer max={initialTimer} />
    <Button click={() => dispatch(playerTurnEnded())} message={'Your turn'} />
  </div>;
}

export default Gameboard;
