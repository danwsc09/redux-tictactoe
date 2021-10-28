import { Switch, Route } from "react-router-dom";
import Pregame from "./components/Pregame";
import Game from "./components/Game";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Pregame />
        </Route>
        <Route path="/game">
          <Game />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
