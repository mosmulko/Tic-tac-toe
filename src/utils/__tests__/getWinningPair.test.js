import getWinningPair from "../getWinningPair";

describe("getWinningPair", () => {
  it("returns an array with 2 other fields needed in a row for marked field '01' in 3 grid game", function () {
    let expected = ["00", "02"];
    let actual = getWinningPair("01", 3, "row");
    expect(actual).toEqual(expected);
  });

  it("returns an array with 2 other fields needed in a column for marked field '01' in 3 grid game", function () {
    let expected = ["11", "21"];
    let actual = getWinningPair("01", 3, "col");
    expect(actual).toEqual(expected);
  });
});
