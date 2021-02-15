import { createSlice } from "@reduxjs/toolkit";

function compare(a, b) {
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
}

export const scoresSlice = createSlice({
  name: "scores",
  initialState: [
    { name: "Harry", seconds: 28, moves: 3 },
    { name: "Bob", seconds: 25, moves: 3 },
  ],
  reducers: {
    scoreAdded: (state, action) => {
      state = [...state, action.payload];
      state.sort(compare);
      return state;
    },
  },
});

export const { scoreAdded } = scoresSlice.actions;

export const selectScores = (state) => state.scores;

export default scoresSlice.reducer;
