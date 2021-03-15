import getFieldsInLineWith from "../getFieldsInLineWith";

describe("getFieldsInLineWith", () => {
  it("returns an array with 2 other fields needed in a row for marked field '01'", function () {
    let expected = ["00", "02"];
    let actual = getFieldsInLineWith("01", "row");
    expect(actual).toEqual(expected);
  });

  it("returns an array with 2 other fields needed in a column for marked field '01'", function () {
    let expected = ["11", "21"];
    let actual = getFieldsInLineWith("01", "col");
    expect(actual).toEqual(expected);
  });

  it("returns an array with 2 other fields hat create a line diagonally for marked field '22'", function () {
    let expected = ["00", "11"];
    let actual = getFieldsInLineWith("22", "left-axis");
    expect(actual).toEqual(expected);
  });

  it("returns an empty array if no field passed", function () {
    let expected = [];
    let actual = getFieldsInLineWith("row");
    expect(actual).toEqual(expected);
  });

  it("returns an empty array if no status passed", function () {
    let expected = [];
    let actual = getFieldsInLineWith("22");
    expect(actual).toEqual(expected);
  });

  it("returns an empty array if no field and status passed", function () {
    let expected = [];
    let actual = getFieldsInLineWith();
    expect(actual).toEqual(expected);
  });

  it("returns an array with 2 empty fields if no field and status passed", function () {
    let expected = [];
    let actual = getFieldsInLineWith();
    expect(actual).toEqual(expected);
  });
});
