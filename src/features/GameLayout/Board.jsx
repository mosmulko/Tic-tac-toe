import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {statusChanged} from "../../app/reducers/statusSlice";
import {playerTurnEnded} from "../../app/reducers/gameSlice";
import {scoreAdded} from "../../app/reducers/scoresSlice";
import {range, checkIfPlayerWon} from '../../algorithms';
import Field from './Field';

function Board({player}) {
  const {id} = player;
  const dispatch = useDispatch();
  const [statuses, setStatuses] = useState([]);
  const [availableFields, setAvailableFields] = useState(9);

  const fieldStatus = (num) => {
    return statuses[num];
  }

  const markField = (num, id) => {
    if (statuses[num] !== undefined) return;
    if (checkIfPlayerWon(num, statuses, id)) {
      const payload = { 
        name: player.name, 
        seconds: player.secondsCounter, 
        moves: player.movesCounter }
      dispatch(scoreAdded(payload))
      dispatch(statusChanged('won'));
    } else {
      const newStatuses = [...statuses];
      newStatuses[num] = id;
      setStatuses(newStatuses);
      setAvailableFields(availableFields - 1);
      if (availableFields - 1 === 0) {
        return dispatch(statusChanged('draw'));
      }
    }
    dispatch(playerTurnEnded({id: id}));
  }

  return <div id='board'>
    {range(1 ,9).map(num =>
       <Field key={num} click={() => markField(num, id)}
       status={fieldStatus(num)}/>)}
  </div>;
}
export default Board;