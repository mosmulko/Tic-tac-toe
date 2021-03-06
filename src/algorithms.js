const algorithms = {
  range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i),
  checkIfPlayerWon: (arr, player) => {
    if (arr.length === 0) return false;

    const fieldMap = new Map();
    let i = arr.indexOf(player);

    while (i !== -1) {
      fieldMap.set(i + 1, true);
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
    )
      return true;
    return false;
  },
  compareScores: (a, b) => {
    if (a.seconds < b.seconds) {
      return -1;
    }
    if (a.seconds > b.seconds) {
      return 1;
    }
    if (a.seconds === b.seconds) {
      if (a.moves < b.moves) {
        return -1;
      }
      if (a.moves > b.moves) {
        return 1;
      }
    }
    return 0;
  },
};

export const { range, checkIfPlayerWon, compareScores } = algorithms;
