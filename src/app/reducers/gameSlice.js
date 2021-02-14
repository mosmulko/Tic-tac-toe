import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  players: {
    x: {
      id: "x",
      name: "Player X",
      movesCounter: 0,
      secondsCounter: 0,
    },
    o: {
      id: "o",
      name: "Player O",
      movesCounter: 0,
      secondsCounter: 0,
    },
  },
  currentPlayer: "x",
  timer: 30,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    newGameStarted: (state, action) => {
      state = initialState;
      return state;
    },
    namesChosen: (state, action) => {
      if (action.payload) {
        state.players.x.name = action.payload.x;
        state.players.o.name = action.payload.o;
      }
      return state;
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
    playerTurnEnded: (state) => {
      const player = state.players[state.currentPlayer];
      player.movesCounter += 1;
      player.secondsCounter += initialState.timer - state.timer;
      state.currentPlayer = state.currentPlayer === "x" ? "o" : "x";
      state.timer = initialState.timer;
      return state;
    },
    secondPassed: (state) => {
      state.timer -= 1;
      return state;
    },
    timerReseted: (state) => {
      state.timer = initialState.timer;
      return state;
    },
  },
});

export const {
  newGameStarted,
  namesChosen,
  gameFieldMarked,
  playerTurnEnded,
  secondPassed,
  timerReseted,
} = gameSlice.actions;

export const selectGame = (state) => state.game;

export const selectTimer = (state) => state.game.timer;

export const selectCurrentPlayer = (state) => state.game.currentPlayer;

export const selectNames = (state) => [
  state.game.players.x.name,
  state.game.players.o.name,
];

export default gameSlice.reducer;
