type result = "O" | "X" | "" | "DRAW";
type piece = "O" | "X" | "";

export const calculateWinner = (board: piece[]): result => {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (const cond of winConditions) {
    const [pos1, pos2, pos3] = cond;
    if (
      board[pos1] !== "" &&
      board[pos1] === board[pos2] &&
      board[pos1] === board[pos3]
    ) {
      return board[pos1];
    }
  }
  // check if draw
  for (const sq of board) {
    if (sq === "") {
      return "";
    }
  }
  return "DRAW";
};
