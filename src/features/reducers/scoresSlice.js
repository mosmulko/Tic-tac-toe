import { createSlice } from "@reduxjs/toolkit";

export const scoresSlice = createSlice({
  name: "scores",
  initialState: [],
  reducers: {
    scoreAdded: (state = this.initialState, action) => {
      state = [...state, action.payload];
      // sort scores
    },
  },
});

export const { scoreAdded } = scoresSlice.actions;

export const selectScores = (state) => state.scores;

export default scoresSlice.reducer;
