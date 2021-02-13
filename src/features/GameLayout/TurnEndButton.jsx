import React from "react";
import { useDispatch, useSelector} from "react-redux";
import {
  playerTurnEnded, selectTimer, timerReseted
} from "../../app/reducers/gameSlice";


function TurnEndButton({max}) {
  const secondsLeft = useSelector(selectTimer);
  const dispatch = useDispatch();

  function endPlayersTurn() {
    let seconds = max - secondsLeft;
    dispatch(playerTurnEnded({seconds: seconds}));
    dispatch(timerReseted());
  }
  return <button onClick={endPlayersTurn}>Make your turn</button>;
}

export default TurnEndButton;