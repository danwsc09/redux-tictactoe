// import { Counter } from "./features/counter/Counter";

import CounterContainer from "./containers/CounterContainer";
import TodosContainer from "./containers/TodosContainer";

function App() {
  return (
    <div className="App">
      <CounterContainer />
      <TodosContainer />
    </div>
  );
}

export default App;
