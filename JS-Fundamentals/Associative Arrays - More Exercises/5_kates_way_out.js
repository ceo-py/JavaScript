function kateOut(input) {
  const rows = input.shift();
  let [moves, kateRow, kateCol, matrix] = [[], 0, 0, []];

  input.forEach((line, i) => {
    matrix.push(line.split(""));
    if (line.includes("k")) {
      kateRow = i;
      kateCol = line.indexOf("k");
    }
  });

  const cols = matrix[0].length;

  const findWayOut = (row, col, step) => {
    if (
      !(0 <= row && row < rows) ||
      !(0 <= col && col < cols) ||
      ["#", "*"].includes(matrix[row][col])
    ) {
      return;
    }

    step++;
    if (row === 0 || row === rows - 1 || col === 0 || col === cols - 1) {
      moves.push(step);
    }

    matrix[row][col] = "*";

    let coordinates = [
      [row, col + 1],
      [row, col - 1],
      [row + 1, col],
      [row - 1, col],
    ];

    coordinates.forEach(([newRow, newCol]) => {
      findWayOut(newRow, newCol, step);
    });

    matrix[row][col] = " ";
  };

  findWayOut(kateRow, kateCol, 0);
  console.log(
    moves.length === 0
      ? "Kate cannot get out"
      : `Kate got out in ${Math.max(...moves)} moves`
  );
}