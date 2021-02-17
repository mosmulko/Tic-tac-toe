import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  playerTurnEnded,
  selectCurrentPlayer,
} from "../../../app/reducers/playersSlice";
import {scoreAdded} from "../../../app/reducers/scoresSlice";
import {statusChanged} from "../../../app/reducers/statusSlice";
import './Game.css';
import Label from "../Label";
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

  const addScoreToLeaderboard = () => {
    const payload = { 
      name: player.name, 
      seconds: seconds + player.seconds, 
      moves: player.moves + 1 
    }
    dispatch(scoreAdded(payload));
    dispatch(statusChanged('won'));
  }

  return <div id='game-wrapper' className='flex center column'>
    <div id='turn-display' className='flex center'>
      {/* <div className='turn-display flex center'>
        <Label id={player.id}/>
       {
         player.name ? <h3>{player.name}</h3> : null
       }
      </div> */}
       <Label id={player.id}/>
       {
         player.name ? <h3>{player.name}</h3> : null
       }
      <div id='timer'>:{seconds}</div>
      {/* <Timer 
        set={() => setSecondsLeft(secondsLeft - 1)} 
        reset={finishPlayerTurn}
        seconds={secondsLeft}
      /> */}
    </div>
    <Board 
      player={player.id} 
      nextTurn={finishPlayerTurn}
      win={addScoreToLeaderboard}
      draw={() => dispatch(statusChanged('draw'))}
    />
  </div>;
}

export default Game;
