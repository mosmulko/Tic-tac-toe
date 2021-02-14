import React, {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { statusChanged} from "../../app/reducers/statusSlice";
import {
  playerTurnEnded
} from "../../app/reducers/gameSlice";
import Field from './Field';

const range = (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i)

function Board({player}) {
  const dispatch = useDispatch();
  const [statuses, setStatuses] = useState([]);
  const [availableFields, setAvailableFields] = useState(9);

  useEffect(() => {
    if (availableFields === 0) {
      dispatch(statusChanged('draw'));
    }
  })

  const fieldStatus = (num) => {
    return statuses[num];
  }

  const markField = (num, player) => {
    if (statuses[num] !== undefined) return;
    var newStatuses = [...statuses];
    newStatuses[num] = player;
    setStatuses(newStatuses);
    setAvailableFields(availableFields - 1);
    dispatch(playerTurnEnded());
  }

  return <div id='board'>
    {range(1 ,9).map(num =>
       <Field key={num} click={() => markField(num, player)}
       status={fieldStatus(num)}/>)}
  </div>;
}
export default Board;