import statusReducer, { statusChanged } from "./statusSlice.js";

describe("status reducer", () => {
  it("should change to 'playing'", () => {
    expect(
      statusReducer("new", {
        type: statusChanged,
        payload: "playing",
      })
    ).toEqual("playing");
  });

  it("should change to 'won'", () => {
    expect(
      statusReducer("playing", {
        type: statusChanged,
        payload: "won",
      })
    ).toEqual("won");
  });

  it("should change to 'draw'", () => {
    expect(
      statusReducer("playing", {
        type: statusChanged,
        payload: "draw",
      })
    ).toEqual("draw");
  });

  it("should change to 'new'", () => {
    expect(
      statusReducer("playing", {
        type: statusChanged,
        payload: "new",
      })
    ).toEqual("new");
  });
});
