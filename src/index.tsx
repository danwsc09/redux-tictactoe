import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter as Router } from "react-router-dom";
import { composeWithDevTools } from "redux-devtools-extension";

import App from "./App";
import rootReducer from "./modules";
import "./index.css";

const myStore = createStore(rootReducer, composeWithDevTools());
myStore.subscribe(() => console.log(myStore.getState()));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={myStore}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
