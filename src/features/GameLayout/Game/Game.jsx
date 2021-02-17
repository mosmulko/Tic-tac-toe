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
  const [secondsElapsed, setsecondsElapsed] = useState(initialTimer);
  const secondsGained = initialTimer - secondsElapsed;

  const finishPlayerTurn = () => {
    dispatch(playerTurnEnded({id: player.id, seconds: secondsGained}));
    setsecondsElapsed(initialTimer);
  }

  const addScoreToLeaderboard = () => {
    const payload = { 
      name: player.name, 
      seconds: secondsGained + player.seconds, 
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
      {/* <div id='timer'>:{secondsGained}</div> */}
      <Timer 
        set={() => setsecondsElapsed(secondsElapsed - 1)} 
        reset={finishPlayerTurn}
        seconds={secondsElapsed}
      />
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
