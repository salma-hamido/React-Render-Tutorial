import React, { useReducer } from "react";

/* 

SUMMARIZE useReducer

same value after initial render? 
---> The component will not re-render!

same value after re-render? 
---> Will render one more time and then bails out from any subsequent renders!

*/

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;

    case "decrement":
      return state - 1;

    case "reset":
      return initialState;

    default:
      return state;
  }
};

export default function UseReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);

  console.log("UseReducer Render");

  return (
    <div className="App">
      <div>Count = {count}</div>
      <hr />
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
}
