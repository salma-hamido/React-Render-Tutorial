import { useState } from "react";

/* 

SUMMARIZE useState

same value after initial render? 
---> The component will not re-render!

same value after re-render? 
---> Will render one more time and then bails out from any subsequent renders!

*/

export default function UseState() {
  const [count, setCount] = useState(0);

  console.log("useState render");

  return (
    <div className="App">
      <button onClick={() => setCount((prev) => prev + 1)}>
        Count - {count}
      </button>

      <button onClick={() => setCount(0)}>Count To 0</button>

      <button onClick={() => setCount(5)}>Count To 5</button>
    </div>
  );
}
