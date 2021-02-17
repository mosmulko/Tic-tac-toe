import { createSlice } from "@reduxjs/toolkit";
import { compareScores } from "../../algorithms";

const initialState = {
  lastWinner: null,
  leaderboard: [],
};

export const scoresSlice = createSlice({
  name: "scores",
  initialState,
  reducers: {
    scoreAdded: (state, action) => {
      const winner = action.payload;
      state.leaderboard.push(winner);
      state.leaderboard.sort(compareScores);
      const i = state.leaderboard.findIndex((score) => {
        for (let key in score) {
          if (score[key] !== winner[key]) return false;
        }
        return true;
      });
      winner.place = i + 1;
      state.lastWinner = winner;
      return state;
    },
  },
});

export const { scoreAdded } = scoresSlice.actions;

export const selectScores = (state) => state.scores.leaderboard;

export const selectWinner = (state) => state.scores.lastWinner;

export default scoresSlice.reducer;
