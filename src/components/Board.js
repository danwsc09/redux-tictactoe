import { clearBoard, addBoard } from "../modules/board";
import { useSelector, useDispatch } from "react-redux";
import { calculateWinner } from "../utils/calculateWinner";

const Board = () => {
  return (
    <div className="board">
      <div className="row">
        <Square num={0} />
        <Square num={1} />
        <Square num={2} />
      </div>
      <div className="row">
        <Square num={3} />
        <Square num={4} />
        <Square num={5} />
      </div>
      <div className="row">
        <Square num={6} />
        <Square num={7} />
        <Square num={8} />
      </div>
    </div>
  );
};

const Square = ({ num }) => {
  const dispatch = useDispatch();
  const boardState = useSelector((state) => state.board);
  const { history, XToMove } = boardState;

  const currentBoard = history[history.length - 1];

  const lightOrDark = num % 2 === 0 ? "light-square" : "dark-square";
  const handleClick = () => {
    // if there is a piece already, don't do anything
    if (currentBoard[num] !== "") return;

    // if the game was over, don't do anything
    const gameWasOver = calculateWinner(currentBoard) !== "";
    if (gameWasOver) return;

    // allow the move
    const boardCopy = [...currentBoard];
    boardCopy[num] = XToMove ? "X" : "O";

    // const newWinner = calculateWinner(boardCopy);
    dispatch(addBoard(boardCopy));
  };
  return (
    <div className={`square ${lightOrDark}`} onClick={handleClick}>
      {currentBoard[num]}
    </div>
  );
};

export default Board;
