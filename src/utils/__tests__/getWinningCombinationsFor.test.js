import getWinningCombinationsFor from "../getWinningCombinationsFor";

describe("getWinningCombinationsFor", () => {
  it("returns an array of possible winning matches for the field '00'", function () {
    let expected = [
      ["01", "02"],
      ["10", "20"],
      ["11", "22"],
    ];
    let actual = getWinningCombinationsFor("00");
    expect(actual).toEqual(expected);
  });

  it("returns an array of possible winning matches for the field '11'", function () {
    let expected = [
      ["10", "12"],
      ["01", "21"],
      ["00", "22"],
      ["02", "20"],
    ];
    let actual = getWinningCombinationsFor("11");
    expect(actual).toEqual(expected);
  });
});
