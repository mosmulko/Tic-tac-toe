import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { statusChanged } from "../../app/reducers/statusSlice";
import {
  selectCurrentPlayer,
  selectWinner
} from "../../app/reducers/gameSlice";
import Label from "./Label";
import Timer from "./Timer";
import Board from "./Board";

function  Gameboard() {
  const winner = useSelector(selectWinner);
  const player = useSelector(selectCurrentPlayer);
  const dispatch = useDispatch();
  const initialTimer = 30;

  useEffect(() => {
    if (winner) {
      console.log('player', player)
      console.log('winner', winner)
      return dispatch(statusChanged('won'))
    }
  })

  return <div>
    <div>
      <h2>Your turn:</h2>
      <Label id={player.id}/>
      <h3>{player.name}</h3>
    </div>
    <Board player={player.id} />
    {/* <Timer max={initialTimer} /> */}
  </div>;
}

export default Gameboard;
