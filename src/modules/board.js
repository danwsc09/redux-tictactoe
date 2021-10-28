const CLEAR_BOARD = "BOARD/CLEAR_BOARD";
const ADD_BOARD = "BOARD/ADD_BOARD";

export const clearBoard = () => ({ type: CLEAR_BOARD });

export const addBoard = (board) => ({ type: ADD_BOARD, board });

const initialBoard = new Array(9).fill("");

const initialState = {
  history: [initialBoard],
  XToMove: true,
};

const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_BOARD:
      return { ...state, history: [initialBoard] };
    case ADD_BOARD:
      return {
        ...state,
        history: state.history.concat([action.board]),
        XToMove: !state.XToMove,
      };
    default:
      return state;
  }
};

export default boardReducer;
