import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {statusChanged} from "../../app/reducers/statusSlice";
// import {scoreAdded} from "../../app/reducers/scoresSlice";
import {range, checkIfPlayerWon} from '../../algorithms';
import Field from './Field';

function Board({player, nextTurn, win}) {
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
      win();
      dispatch(statusChanged('won'));
      return;
    }
    const newStatuses = [...statuses];
    newStatuses[num] = id;
    setStatuses(newStatuses);
    setAvailableFields(availableFields - 1);
    if (availableFields - 1 === 0) {
      return dispatch(statusChanged('draw'));
    }
    nextTurn();
  }

  return <div id='board'>
    {range(1 ,9).map(num =>
       <Field key={num} click={() => markField(num, id)}
       status={fieldStatus(num)}/>)}
  </div>;
}
export default Board;