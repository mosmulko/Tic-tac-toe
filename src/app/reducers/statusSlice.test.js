import statusReducer, { statusChanged } from "./statusSlice.js";

const initialState = "new";

describe("status reducer", () => {
  it("should change status to won", () => {
    expect(
      statusReducer(initialState, {
        type: statusChanged,
        payload: "won",
      })
    ).toEqual("won");
  });

  it("should change status to draw", () => {
    expect(
      statusReducer(initialState, {
        type: statusChanged,
        payload: "draw",
      })
    ).toEqual("draw");
  });
});
