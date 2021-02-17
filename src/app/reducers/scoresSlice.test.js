import scoresReducer, { scoreAdded } from "./scoresSlice.js";

const initialState = {
  lastWinner: null,
  leaderboard: [],
};

const state = {
  lastWinner: {
    name: "Bob",
    seconds: 2,
    moves: 4,
    place: 1,
  },
  leaderboard: [
    {
      name: "Bob",
      seconds: 2,
      moves: 4,
      place: 1,
    },
  ],
};

describe("scores reducer", () => {
  it("should add score to leaderboard", () => {
    expect(
      scoresReducer(initialState, {
        type: scoreAdded,
        payload: { name: "Bob", seconds: 2, moves: 4 },
      })
    ).toEqual(state);
  });

  it("should sort new score as 2nd place", () => {
    const nextState = {
      lastWinner: {
        name: "Mike",
        seconds: 5,
        moves: 4,
        place: 2,
      },
      leaderboard: [
        {
          name: "Bob",
          seconds: 2,
          moves: 4,
          place: 1,
        },
        {
          name: "Mike",
          seconds: 5,
          moves: 4,
          place: 2,
        },
      ],
    };

    expect(
      scoresReducer(state, {
        type: scoreAdded,
        payload: {
          name: "Mike",
          seconds: 5,
          moves: 4,
        },
      })
    ).toEqual(nextState);
  });
});
