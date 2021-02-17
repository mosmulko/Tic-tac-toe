import playersReducer, {
  newGameStarted,
  namesChosen,
  playerTurnEnded,
} from "./playersSlice.js";

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

describe("players reducer", () => {
  it("should return the initial state", () => {
    const state = {
      x: {
        id: "x",
        name: "",
        moves: 4,
        seconds: 7,
      },
      o: {
        id: "o",
        name: "",
        moves: 0,
        seconds: 0,
      },
    };

    expect(
      playersReducer(state, {
        type: newGameStarted,
      })
    ).toEqual(initialState);
  });

  it("should change x player's name to Bob", () => {
    const state = {
      x: {
        id: "x",
        name: "Bob",
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
    expect(
      playersReducer(initialState, {
        type: namesChosen,
        payload: { x: "Bob", o: "" },
      })
    ).toEqual(state);
  });

  it("should update player's stats and change turn", () => {
    const state = {
      x: {
        id: "x",
        name: "",
        moves: 1,
        seconds: 15,
      },
      o: {
        id: "o",
        name: "",
        moves: 0,
        seconds: 0,
      },
    };
    expect(
      playersReducer(initialState, {
        type: playerTurnEnded,
        payload: { id: "x", seconds: 15 },
      })
    ).toEqual(state);
  });
});
