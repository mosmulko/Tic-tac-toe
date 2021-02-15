import React, {useState} from "react";
import {range, checkIfPlayerWon} from '../../algorithms';
import Field from './Field';

function Board({player, nextTurn, win, draw}) {
  const [statuses, setStatuses] = useState([]);
  const [availableFields, setAvailableFields] = useState(9);

  const markField = (num, player) => {
    if (statuses[num] !== undefined) return;
    if (checkIfPlayerWon(num, statuses, player)) {
      return win();
    }
    const newStatuses = [...statuses];
    newStatuses[num] = player;
    setStatuses(newStatuses);
    setAvailableFields(availableFields - 1);
    if (availableFields - 1 === 0) {
      return draw();
    }
    nextTurn();
  }

  return <div player='board'>
    {range(1 ,9).map(num =>
       <Field key={num} click={() => markField(num, player)}
       status={statuses[num]}/>)}
  </div>;
}
export default Board;