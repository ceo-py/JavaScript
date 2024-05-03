function ticTacToe(moves) {
  let board = Array.from({ length: 3 }, () => Array(3).fill(false));
  const players = ["X", "O"];
  let [moveCount, winner] = [0, "The game ended! Nobody wins :("];

  function printBoard(board) {
    board.forEach((row) => {
      console.log(row.join("\t"));
    });
  }

  function checkWinner(board, player) {
    for (let i = 0; i < 3; i++) {
      if (board[i].every((cell) => cell === player)) {
        return true;
      }
      if (board.map((row) => row[i]).every((cell) => cell === player)) {
        return true;
      }
    }

    if (
      board[0][0] === player &&
      board[1][1] === player &&
      board[2][2] === player
    ) {
      return true;
    }
    if (
      board[0][2] === player &&
      board[1][1] === player &&
      board[2][0] === player
    ) {
      return true;
    }

    return false;
  }

  for (let move of moves) {
    let [row, col] = move.split(" ").map(Number);

    if (board[row][col]) {
      console.log("This place is already taken. Please choose another!");
      continue;
    }

    let currentPlayer = players[moveCount % 2];
    board[row][col] = currentPlayer;
    moveCount++;

    if (checkWinner(board, currentPlayer)) {
      winner = `Player ${currentPlayer} wins!`;
      break;
    }

    if (moveCount === 9) {
      break;
    }
  }

  console.log(winner);
  printBoard(board);
}

ticTacToe([
  "0 1",
  "0 0",
  "0 2",
  "2 0",
  "1 0",
  "1 1",
  "1 2",
  "2 2",
  "2 1",
  "0 0",
]);
