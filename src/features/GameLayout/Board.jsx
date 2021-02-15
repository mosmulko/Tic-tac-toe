import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { statusChanged} from "../../app/reducers/statusSlice";
import {
  playerTurnEnded,
  gameWon,
  selectWinner
} from "../../app/reducers/gameSlice";
import Field from './Field';

const range = (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i);

const checkIfPlayerWon = (num, arr, player) => {
  let fieldMap = new Map();
  fieldMap.set(num, true);

  var i = arr.indexOf(player);
  while (i !== -1) {
    fieldMap.set(i, true);
  i = arr.indexOf(player, i + 1);
  }
  
  if (
    (fieldMap.has(1) && fieldMap.has(2) && fieldMap.has(3)) ||
    (fieldMap.has(4) && fieldMap.has(5) && fieldMap.has(6)) ||
    (fieldMap.has(7) && fieldMap.has(8) && fieldMap.has(9)) ||
    (fieldMap.has(1) && fieldMap.has(4) && fieldMap.has(7)) ||
    (fieldMap.has(2) && fieldMap.has(5) && fieldMap.has(8)) ||
    (fieldMap.has(3) && fieldMap.has(6) && fieldMap.has(9)) ||
    (fieldMap.has(1) && fieldMap.has(5) && fieldMap.has(9)) ||
    (fieldMap.has(3) && fieldMap.has(5) && fieldMap.has(7))
  ) return true;
  return false;
}

function Board({player}) {
  const dispatch = useDispatch();
  const [statuses, setStatuses] = useState([]);
  const [availableFields, setAvailableFields] = useState(9);

  const fieldStatus = (num) => {
    return statuses[num];
  }

  const markField = (num, player) => {
    if (statuses[num] !== undefined) return;
    if (checkIfPlayerWon(num, statuses, player)) {
      dispatch(gameWon(player));
    } else {
      const newStatuses = [...statuses];
      newStatuses[num] = player;
      setStatuses(newStatuses);
      setAvailableFields(availableFields - 1);
      if (availableFields - 1 === 0) {
        return dispatch(statusChanged('draw'));
      }
    }
    dispatch(playerTurnEnded({id: player}));
  }

  return <div id='board'>
    {range(1 ,9).map(num =>
       <Field key={num} click={() => markField(num, player)}
       status={fieldStatus(num)}/>)}
  </div>;
}
export default Board;