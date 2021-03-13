export default function getWinningPair(markedField, status) {
  if (!markedField || !status || typeof +markedField !== 'number') return [];
  
  const [row, col] = markedField;
  const winningPair = [];
  let matchedField;
  let iToSkip = +row;

  for (let i = 0, j = 2; i < 3; i++, j--) {
    switch (status) {
      case "row":
        matchedField = `${row}${i}`;
        iToSkip = +col;
        break;
      case "col":
        matchedField = `${i}${col}`;
        break;
      case "left-axis":
        matchedField = `${i}${i}`;
        break;
      case "right-axis":
        matchedField = `${i}${j}`;
        break;
      default:
        matchedField = "";
    }
    if (i !== iToSkip) winningPair.push(matchedField);
  }
  return winningPair;
}
