import getWinningPair from "../getWinningPair";

describe("getWinningPair", () => {
  it("returns an array with 2 other fields needed in a row for marked field '01'", function () {
    let expected = ["00", "02"];
    let actual = getWinningPair("01", "row");
    expect(actual).toEqual(expected);
  });

  it("returns an array with 2 other fields needed in a column for marked field '01'", function () {
    let expected = ["11", "21"];
    let actual = getWinningPair("01", "col");
    expect(actual).toEqual(expected);
  });
  
  it("returns an array with 2 other fields hat create a line diagonally for marked field '22'", function () {
    let expected = ["00", "11"];
    let actual = getWinningPair("22", "left-axis");
    expect(actual).toEqual(expected);
  });

  it("returns an empty array if no field passed", function () {
    let expected = [];
    let actual = getWinningPair("row");
    expect(actual).toEqual(expected);
  });

  it("returns an empty array if no status passed", function () {
    let expected = [];
    let actual = getWinningPair("22");
    expect(actual).toEqual(expected);
  });

  it("returns an empty array if no field and status passed", function () {
    let expected = [];
    let actual = getWinningPair();
    expect(actual).toEqual(expected);
  });

  it("returns an array with 2 empty fields if no field and status passed", function () {
    let expected = [];
    let actual = getWinningPair();
    expect(actual).toEqual(expected);
  });
});
