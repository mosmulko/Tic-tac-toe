import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { statusChanged, selectStatus } from "../../app/reducers/statusSlice";
import {
  playerTurnEnded,
  selectCurrentPlayer,
} from "../../app/reducers/gameSlice";
import Label from "./Label";
// import Timer from './Timer';

function Gameboard() {
  const player = useSelector(selectCurrentPlayer);
  const dispatch = useDispatch();
  const initialTimer = 30;
  const [secondsLeft, setSecondsLeft] = useState(initialTimer);
  let seconds = initialTimer - secondsLeft;

  useEffect(() => {
    if (secondsLeft > 0) {
      const timerId = setTimeout( () => {
      setSecondsLeft(secondsLeft - 1);
      } , 1000);
      return () => clearTimeout(timerId);
    } 
    dispatch(playerTurnEnded({seconds: initialTimer}));
    setSecondsLeft(initialTimer);
    console.log(player);
  }, [secondsLeft, dispatch, seconds, player]);

  function endPlayersTurn() {
    dispatch(playerTurnEnded({seconds: seconds}));
    setSecondsLeft(initialTimer);
    console.log(player);
  }


  return <div>
    <div>
      <h2>Your turn:</h2>
      <Label id={player.id}/>
      <h3>{player.name}</h3>
    </div>
    <div>{secondsLeft}</div>
    <div>Board</div>
    <button onClick={endPlayersTurn}>Next turn</button>
  </div>;
}

export default Gameboard;
