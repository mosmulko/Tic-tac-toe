import { createSlice } from "@reduxjs/toolkit";

export const scoresSlice = createSlice({
  name: "scores",
  initialState: [
    { name: "Bob", seconds: 25, moves: 3 },
    { name: "Harry", seconds: 28, moves: 3 },
  ],
  reducers: {
    scoreAdded: (state = this.initialState, action) => {
      state = [...state, action.payload];
      Object.entries(state).sort((a, b) => b[1].localeCompare(a[1]));
    },
  },
});

export const { scoreAdded } = scoresSlice.actions;

export const selectScores = (state) => state.scores;

export default scoresSlice.reducer;
