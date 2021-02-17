import { range, checkIfPlayerWon, compareScores } from "./algorithms";

test("checks if array has 5 elements", () => {
  expect(range(1, 5)).toHaveLength(5);
});
// const board =  ['', '', '', '', '', '', '', '', ''];

test("checks if player won", () => {
  const board = ["x", "o", "", "", "x", "", "", "", ""];

  expect(checkIfPlayerWon(board, "x")).toBe(false);
});

test("checks if player won", () => {
  const board = ["x", "o", "", "", "x", "", "", "", "x"];

  expect(checkIfPlayerWon(board, "x")).toBe(true);
});

test("checks if player won", () => {
  expect(checkIfPlayerWon([], "o")).toBe(false);
});

test("checks if x has higher score than o", () => {
  const x = { seconds: 10, moves: 3 };
  const o = { seconds: 15, moves: 2 };
  expect(compareScores(x, o)).toEqual(-1);
});

test("checks if x has higher score than o", () => {
  const x = { seconds: 10, moves: 2 };
  const o = { seconds: 10, moves: 3 };
  expect(compareScores(x, o)).toEqual(-1);
});

test("checks if x has lower score than o", () => {
  const x = { seconds: 20, moves: 2 };
  const o = { seconds: 10, moves: 3 };
  expect(compareScores(x, o)).toEqual(1);
});

test("checks if scores are equal", () => {
  const x = { seconds: 10, moves: 3 };
  const o = { seconds: 10, moves: 3 };
  expect(compareScores(x, o)).toEqual(0);
});
