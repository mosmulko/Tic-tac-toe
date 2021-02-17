import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  x: {
    id: "x",
    name: "",
    moves: 0,
    seconds: 0,
  },
  o: {
    id: "o",
    name: "",
    moves: 0,
    seconds: 0,
  },
};

export const playersSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    newGameStarted: (state) => {
      state = initialState;
      return state;
    },
    namesChosen: (state, action) => {
      if (action.payload) {
        state.x.name = action.payload.x;
        state.o.name = action.payload.o;
      }
      return state;
    },
    playerTurnEnded: (state, action) => {
      const { id, seconds } = action.payload;
      const player = state[id];
      player.moves += 1;
      player.seconds += seconds;
      return state;
    },
  },
});

export const {
  newGameStarted,
  namesChosen,
  playerTurnEnded,
} = playersSlice.actions;

export const selectCurrentPlayer = (state) => {
  const { x, o } = state.players;
  if (x.moves === o.moves) return x;
  return o;
};

export const selectNames = (state) => [
  state.players.x.name,
  state.players.o.name,
];

export default playersSlice.reducer;
