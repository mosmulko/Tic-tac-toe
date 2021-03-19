import isWinningMove from "../isWinningMove";

const threeByThree = [
  ["x", "", "x"],
  ["", "x", ""],
  ["o", "", "o"],
];
const fourByFour = [
  ["", "", "", ""],
  ["", "x", "o", ""],
  ["x", "", "o", ""],
  ["", "", "", ""],
];
const fiveByFive = [
  ["o", "", "", "", "x"],
  ["", "o", "x", "", "x"],
  ["", "", "o", "x", "x"],
  ["", "", "", "o", "x"],
  ["", "", "", "", ""],
];
const fiveByFour = [
  ["", "", "", ""],
  ["x", "", "", "o"],
  ["", "x", "", "o"],
  ["", "", "x", "o"],
  ["", "", "", ""],
];
const fourByFive = [
  ["", "", "", "x", ""],
  ["", "o", "", "o", ""],
  ["", "x", "o", "", ""],
  ["x", "", "o", "", ""],
];

describe("isWinningMove", () => {
  it("returns true when player marks field '21' with 'o' in the board threeByThree to have 3 fields in line", function () {
    let actual = isWinningMove("21", "o", 3, threeByThree);
    expect(actual).toEqual(true);
  });

  it("returns false when player marks field '21' with 'x' in board threeByThree to have 3 fields in line", function () {
    let actual = isWinningMove("21", "x", 3, threeByThree);
    expect(actual).toEqual(false);
  });

  it("returns true when player marks field '02' with 'x' in the board fourByFour to have 3 fields in line", function () {
    let actual = isWinningMove("02", "x", 3, fourByFour);
    expect(actual).toEqual(true);
  });

  it("returns true when player marks field '32' with 'o' in the board fourByFour to have 3 fields in line", function () {
    let actual = isWinningMove("32", "o", 3, fourByFour);
    expect(actual).toEqual(true);
  });

  it("returns false when player marks field '32' with 'o' in the board fourByFour to have 4 fields in line", function () {
    let actual = isWinningMove("32", "o", 4, fourByFour);
    expect(actual).toEqual(false);
  });

  it("returns true when player marks field '44' with 'o' in the board fiveByFive to have 5 fields in line", function () {
    let actual = isWinningMove("44", "o", 5, fiveByFive);
    expect(actual).toEqual(true);
  });

  it("returns true when player marks field '44' with 'x' in the board fiveByFive to have 5 fields in line", function () {
    let actual = isWinningMove("44", "x", 5, fiveByFive);
    expect(actual).toEqual(true);
  });

  it("returns false when player marks field '01' with 'x' in the board fiveByFive to have 5 fields in line", function () {
    let actual = isWinningMove("01", "x", 5, fiveByFive);
    expect(actual).toEqual(false);
  });

  it("returns true when player marks field '43' with 'x' in the board fiveByFour to have 4 fields in line", function () {
    let actual = isWinningMove("43", "x", 4, fiveByFour);
    expect(actual).toEqual(true);
  });

  it("returns true when player marks field '03' with 'o' in the board fiveByFour to have 4 fields in line", function () {
    let actual = isWinningMove("03", "o", 4, fiveByFour);
    expect(actual).toEqual(true);
  });

  it("returns false when player marks field '03' with 'o' in the board fiveByFour to have 5 fields in line", function () {
    let actual = isWinningMove("03", "o", 5, fiveByFour);
    expect(actual).toEqual(false);
  });

  it("returns true when player marks field '12' with 'x' in the board fourByFive to have 4 fields in line", function () {
    let actual = isWinningMove("12", "x", 4, fourByFive);
    expect(actual).toEqual(true);
  });

  it("returns true when player marks field '12' with 'o' in the board fourByFive to have 3 fields in line", function () {
    let actual = isWinningMove("12", "o", 3, fourByFive);
    expect(actual).toEqual(true);
  });

  it("returns false when player marks field '34' with 'o' in the board fourByFive to have 3 fields in line", function () {
    let actual = isWinningMove("34", "o", 3, fourByFive);
    expect(actual).toEqual(false);
  });
});
