import getFieldsInLineWith from "./getFieldsInLineWith";

export default function getWinningCombinationsFor(field) {
  if (!field || 0 > field[0] || field[0] > 2 || 0 > field[1] || field[1] > 2)
    return [];

  const row = field[0];
  const col = field[1];
  const winningFieldsArray = [];

  if (row === col) {
    winningFieldsArray.push(getFieldsInLineWith(field, "left-axis"));
  }

  if (+row + +col === 2) {
    winningFieldsArray.push(getFieldsInLineWith(field, "right-axis"));
  }

  winningFieldsArray.push(getFieldsInLineWith(field, "row"));
  winningFieldsArray.push(getFieldsInLineWith(field, "col"));

  return winningFieldsArray;
}
