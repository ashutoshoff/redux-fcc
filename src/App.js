import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "./store/index";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(actions.increment());
  };
  const decrement = () => {
    dispatch(actions.decrement());
  };
  const Addby = () => {
    dispatch(actions.addBy(10));
  };

  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>

      <button onClick={decrement}>decrement</button>
      <button onClick={increment}>increment</button>

      <button onClick={Addby}>Add</button>
    </div>
  );
}

export default App;
