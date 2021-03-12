export default function getWinningPair(markedField, max, status) {
  let [row, col] = markedField;
  const winningPair = [];
  let matchedField;
  let numToSkip = +row;
  for (let i = 0, j = max - 1; i < max; i++, j--) {
    switch (status) {
      case "row":
        matchedField = `${row}${i}`;
        numToSkip = +col;
        break;
      case "col":
        matchedField = `${i}${col}`;
        break;
      case "equal":
        matchedField = `${i}${i}`;
        break;
      case "sum":
        matchedField = `${i}${j}`;
        break;
      default:
        matchedField = "";
    }
    if (i !== numToSkip) winningPair.push(matchedField);
  }
  return winningPair;
}
