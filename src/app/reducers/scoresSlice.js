import { createSlice } from "@reduxjs/toolkit";
import { compare } from "../../algorithms";

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
