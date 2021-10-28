import { combineReducers } from "redux";
import board from "./board";
import users from "./users";

const rootReducer = combineReducers({
  board,
  users,
});

export default rootReducer;
