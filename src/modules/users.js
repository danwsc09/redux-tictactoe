const SET_USER1 = "USERS/SET_USER1";
const SET_USER2 = "USERS/SET_USER2";

export const setUser1 = (user) => ({ type: SET_USER1, user });

export const setUser2 = (user) => ({ type: SET_USER2, user });

const initialState = {
  user1: "",
  user2: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER1:
      return { ...state, user1: action.user };
    case SET_USER2:
      return { ...state, user2: action.user };
    default:
      return state;
  }
};

export default userReducer;
