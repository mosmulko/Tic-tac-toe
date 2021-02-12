import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  players: {
    x: {
      id: "x",
      name: "Player X",
      hasWon: false,
      movesCounter: 0,
      secondsCounter: 0,
    },
    o: {
      id: "o",
      name: "Player O",
      hasWon: false,
      movesCounter: 0,
      secondsCounter: 0,
    },
  },
  currentPlayer: "x",
  availableFields: 9,
  gameBoard: Array(3).fill(Array(3).fill()),
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    playersNamesChosen: (state, action) => {
      state.players.x.name = action.payload.x || initialState.players.x.name;
      state.players.o.name = action.payload.o || initialState.players.o.name;
      return state;
    },
    gameReseted: (state, action) => {
      const nextState = { ...initialState };

      // nextState.players.x.name = state.players.x.name;
      // nextState.players.o.name = state.players.o.name;

      return nextState;
    },
    gameFieldMarked: (state, action) => {
      //run function to check if it was a winning move
      // if (checkIfWon(state.gameboard, action.payload)) {
      //   state.currentPlayer.hasWon = true;
      //   return;
      // }
      state.availableFields -= 1;
      return state;
    },
    playerTurnEnded: (state, action) => {
      const player = state.players[state.currentPlayer];
      player.movesCounter += 1;
      player.secondsCounter += +action.payload.seconds;
      state.currentPlayer = state.currentPlayer === "x" ? "o" : "x";
      return state;
    },
  },
});

export const {
  playersNamesChosen,
  gameReseted,
  gameFieldMarked,
  playerTurnEnded,
} = gameSlice.actions;

export const selectGame = (state) => state.game;

export const selectPlayer = (state) =>
  state.game.players[state.game.currentPlayer];

export default gameSlice.reducer;
