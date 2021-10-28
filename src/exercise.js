import { createStore } from "redux";

// initial state
const initialState = {
  counter: 0,
  text: "",
  list: [],
};

// action types
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const CHANGE_TEXT = "CHANGE_TEXT";
const ADD_TO_LIST = "ADD_TO_LIST";

// action creators
const increase = () => ({
  type: INCREASE,
});

const decrease = () => ({ type: DECREASE });

const changeText = (text) => ({ type: CHANGE_TEXT, text });

const addToList = (item) => ({ type: ADD_TO_LIST, item });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREASE:
      return { ...state, counter: state.counter - 1 };
    case CHANGE_TEXT:
      return { ...state, text: action.text };
    case ADD_TO_LIST:
      return { ...state, list: state.list.concat(action.item) };
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log(store.getState());

const listener = () => {
  const state = store.getState();
  console.log(state);
};

const unsubscribe = store.subscribe(listener);

store.dispatch(increase());
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText("hello"));
store.dispatch(addToList({ id: 1, text: "pewpew" }));
