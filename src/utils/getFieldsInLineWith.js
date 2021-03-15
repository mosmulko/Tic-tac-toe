export default function getFieldsInLineWith(markedField, status) {
  if (!markedField || !status || typeof +markedField !== "number") return [];

  const [row, col] = markedField;
  const fields = [];
  let fieldToMatch;
  let iToSkip = +row;

  for (let i = 0, j = 2; i < 3; i++, j--) {
    switch (status) {
      case "row":
        fieldToMatch = `${row}${i}`;
        iToSkip = +col;
        break;
      case "col":
        fieldToMatch = `${i}${col}`;
        break;
      case "left-axis":
        fieldToMatch = `${i}${i}`;
        break;
      case "right-axis":
        fieldToMatch = `${i}${j}`;
        break;
      default:
        fieldToMatch = "";
    }
    if (i !== iToSkip) fields.push(fieldToMatch);
  }
  return fields;
}
