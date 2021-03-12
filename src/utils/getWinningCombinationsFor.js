export default function getWinningCombinationsFor(field) {
  if (!field || 0 > field[0] || field[0] > 2 || 0 > field[1] || field[1] > 2)
    return [];

  const row = field[0];
  const col = field[1];
  const winningPairsArray = [];

  // loop that gets matches based on a row
  {
    let winningPair = [];
    for (let i = 0; i < 3; i++) {
      if (i === +col) continue;
      winningPair.push(`${row}${i}`);
    }
    winningPairsArray.push(winningPair);
  }

  //loop that gets matches based on a column
  {
    let winningPair = [];
    for (let i = 0; i < 3; i++) {
      if (i === +row) continue;
      winningPair.push(`${i}${col}`);
    }
    winningPairsArray.push(winningPair);
  }

  if (row === col) {
    let winningPair = [];
    for (let i = 0; i < 3; i++) {
      if (i === +row) continue;
      winningPair.push(`${i}${i}`);
    }
    winningPairsArray.push(winningPair);
  }

  if (+row + +col === 2) {
    let winningPair = [];
    for (let i = 0, j = 2; i < 3; i++, j--) {
      if (i === +row) continue;
      winningPair.push(`${i}${j}`);
    }
    winningPairsArray.push(winningPair);
  }

  return winningPairsArray;
}
