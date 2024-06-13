import { useReducer } from "react";
import ShoppingCart from "./ShoppingCart";
import "./styles.css";

export default function App() {
  const counterReducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return {
          ...state,
          count: state.count + 1,
        };
      case "DECREMENT":
        return {
          ...state,
          count: state.count - 1,
        };
    }
  };
  initialCount = {
    count: 0,
  };
  const [state, dispatch] = useReducer(counterReducer, initialCount);
  return (
    <div className="App">
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>

      <ShoppingCart />
    </div>
  );
}
