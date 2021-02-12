import gameReducer, {
  playersNamesChosen,
  gameReseted,
  playerTurnEnded,
} from "./gameSlice.js";

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

describe("game reducer", () => {
  it("should return the initial state", () => {
    const state = { ...initialState, availableFields: 6 };

    expect(
      gameReducer(state, {
        type: gameReseted,
      })
    ).toEqual(initialState);
  });

  it("should change x player's name to Bob", () => {
    const state = { ...initialState };
    state.players = { ...initialState.players };
    state.players.x = { ...initialState.players.x };
    state.players.x.name = "Bob";
    expect(
      gameReducer(initialState, {
        type: playersNamesChosen,
        payload: { x: "Bob" },
      })
    ).toEqual(state);
  });

  it("should update player's stats and change turn", () => {
    const state = { ...initialState };
    state.players = { ...initialState.players };
    state.players.x = { ...initialState.players.x };
    state.players.x.secondsCounter += 15;
    state.players.x.movesCounter += 1;
    state.currentPlayer = "o";
    expect(
      gameReducer(initialState, {
        type: playerTurnEnded,
        payload: { seconds: 15 },
      })
    ).toEqual(state);
  });
});
