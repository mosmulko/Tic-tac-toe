export default function isWinningMove(field, symbol, numOfFieldsInLine, board) {
  const row = +field[0];
  const col = +field[1];
  const 
  //check left axis
  if ((row - col <= board.length - numOfFieldsInLine && row - col >= 0) || (col - row <= board[0].length - numOfFieldsInLine && col - row > 0)) {
    let i, j;
    if (row > col) {
      let minJ = col - numOfFieldsInLine - 1;
      j = minJ > 0 ? minJ : 0;
      i = j+1;
    } else if (row < col) {
      let minI = row - numOfFieldsInLine - 1;
      i = minI > 0 ? minI : 0;
      j = i+1;
    } else {
      i = 0;
      j = 0;
    }

    let maxI;
  }

  return false;
}
