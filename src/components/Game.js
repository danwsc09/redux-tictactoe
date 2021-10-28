import { withRouter } from "react-router";
import Board from "./Board";
import { clearBoard } from "../modules/board";
import { useDispatch } from "react-redux";

const Game = ({ history }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clearBoard());
    history.push("/");
  };

  return (
    <div>
      <section>game board</section>
      <Board />
      <button onClick={handleClick}>Play again</button>
    </div>
  );
};

export default withRouter(Game);
