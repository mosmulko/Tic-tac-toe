import statusReducer, {
  gameStarted,
  gameWon,
  gameTied,
  gameReseted,
} from "./statusSlice.js";

describe("status reducer", () => {
  it("should change to 'playing'", () => {
    expect(
      statusReducer("new", {
        type: gameStarted,
      })
    ).toEqual("playing");
  });

  it("should change to 'won'", () => {
    expect(
      statusReducer("playing", {
        type: gameWon,
      })
    ).toEqual("won");
  });

  it("should change to 'draw'", () => {
    expect(
      statusReducer("playing", {
        type: gameTied,
      })
    ).toEqual("draw");
  });

  it("should change to 'new'", () => {
    expect(
      statusReducer("playing", {
        type: gameReseted,
      })
    ).toEqual("new");
  });
});
