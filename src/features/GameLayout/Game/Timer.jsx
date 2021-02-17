import React, { useEffect} from "react";


function Timer({set, reset, seconds}) {
  useEffect(() => {
    if (seconds > 0) {
      const timerId = setTimeout( () => {
      set();
      } , 1000);
      return () => clearTimeout(timerId);
    } 
    reset();
  }, [set, reset, seconds]);
  return (
    <div id='timer'>{seconds}</div>
  );
}

export default Timer;
