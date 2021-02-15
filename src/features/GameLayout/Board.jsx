import React, {useState} from "react";
import {range, checkIfPlayerWon} from '../../algorithms';
import Field from './Field';

function Board({player, nextTurn, win, draw}) {
  const [statuses, setStatuses] = useState(Array(9).fill(''));

  const markField = (num, player) => {
    const i = num - 1;
    if (statuses[i] !== '') return;
    if (checkIfPlayerWon(num, statuses, player)) {
      return win();
    }
    const newStatuses = [...statuses];
    newStatuses[i] = player;
    if (newStatuses.filter((id) => id === '').length === 0) {
      return draw();
    }
    setStatuses(newStatuses);
    nextTurn();
  }

  return <div id='board'>
    {range(1 ,9).map(num =>
       <Field key={num} click={() => markField(num, player)}
       status={statuses[num - 1]}/>)}
  </div>;
}
export default Board;