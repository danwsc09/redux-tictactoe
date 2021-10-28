import { withRouter } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { setUser1, setUser2 } from "../modules/users";

const Pregame = ({ history }) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const { user1, user2 } = users;

  const handleChangeUser1 = (e) => {
    dispatch(setUser1(e.target.value));
  };

  const handleChangeUser2 = (e) => {
    dispatch(setUser2(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/game");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User 1</label>
          <input value={user1} onChange={handleChangeUser1} />
        </div>
        <div>
          <label>User 2</label>
          <input value={user2} onChange={handleChangeUser2} />
        </div>
        <input type="submit" value="play" />
      </form>
    </div>
  );
};

export default withRouter(Pregame);
