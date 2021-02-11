import { createSlice } from "@reduxjs/toolkit";

const initialState = "new";

export const statusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    gameStarted: (state) => (state = "playing"),
    gameWon: (state) => (state = "won"),
    gameTied: (state) => (state = "draw"),
    gameReseted: (state) => (state = initialState),
  },
});

export const {
  gameStarted,
  gameWon,
  gameTied,
  gameReseted,
} = statusSlice.actions;

export const selectStatus = (state) => state.status;

export default statusSlice.reducer;
