import React, { useEffect} from "react";
import { useDispatch, useSelector} from "react-redux";
import {
  playerTurnEnded, secondPassed, selectTimer
} from "../../app/reducers/gameSlice";


function Timer({max}) {
  const secondsLeft = useSelector(selectTimer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (secondsLeft > 0) {
      const timerId = setTimeout( () => {
      dispatch(secondPassed());
      } , 1000);
      return () => clearTimeout(timerId);
    } 
    dispatch(playerTurnEnded());
    // dispatch(timerReseted());
  }, [secondsLeft, dispatch, max]);
  return (
    <div>{secondsLeft}</div>
  );
}

export default Timer;
