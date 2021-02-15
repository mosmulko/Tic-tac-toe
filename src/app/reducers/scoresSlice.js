import { createSlice } from "@reduxjs/toolkit";
import { compare } from "../../algorithms";

const initialState = {
  last: null,
  leaderboard: [],
};

export const scoresSlice = createSlice({
  name: "scores",
  initialState,
  reducers: {
    scoreAdded: (state, action) => {
      const winner = action.payload;
      state.leaderboard.push(winner);
      state.leaderboard.sort(compare);
      const i = state.leaderboard.findIndex((score) => {
        for (let key in score) {
          if (score[key] !== winner[key]) return false;
        }
        return true;
      });
      winner.place = i + 1;
      state.last = winner;
      return state;
    },
  },
});

export const { scoreAdded } = scoresSlice.actions;

export const selectScores = (state) => state.scores.leaderboard;

export const selectWinner = (state) => state.scores.last;

export default scoresSlice.reducer;
