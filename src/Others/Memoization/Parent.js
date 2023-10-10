import React, { useState, useMemo, useCallback, useRef } from "react";
import Child from "./Childre";

//Parent.js
export default function Parent() {
  /*
  
    memoization:
     caching a value so that it does not need to be recalculated.
  
  */

  /* 

   React.memo() was introduced with React 16.6 to avoid unnecessary
    re-renders in functional components. 
    
    It is a higher-order component that accepts another component 
    as a prop. 
    
    It will only render the component if there is any change 
    in the props.
   
    https://www.geeksforgeeks.org/react-js-usememo-hook/
  
  */

  /* 
     The 'useMemo Hook' only runs when one of
     its dependencies update.
  
  */

  /*  
    The 'useMemo' and 'useCallback' Hooks are similar. 
    The main difference is that 'useMemo' returns a 
    memoized value and 'useCallback' returns a memoized function.  
  
  */

  const [count, setCount] = useState(0);

  const [user, setUser] = useState({ name: "Salma" });

  const [countDec, setCountDec] = useState(10);

  const [times, setTimes] = useState(0);

  const name = useMemo(() => {
    return user;
  }, [user]);

  const useMemoRef = useRef(0);

  const memoizedValue = useMemo(() => useMemoRef.current++, [times]);

  const handleClick = () => setCount((prev) => prev + 1);

  const handleDecClick = () => setCountDec((prev) => prev - 1);

  const ageHandler = useCallback(() => {
    setUser((prev) => {
      if (prev.age) return prev;
      else return { ...prev, age: 25 };
    });
  }, []);

  console.log("Parent Render");

  return (
    <div className="App">
      Memoization
      <hr />
      <div className="mt-5">
        {/* <button onClick={handleClick}>Increase Count</button>

        <button className="ml-1" onClick={handleDecClick}>
          Decrease Count
        </button>

        <h2>{count}</h2>
        <Child name={countDec} /> */}

        {/* <button onClick={() => setTimes((prev) => prev + 1)}>
          Force Child Render
        </button>
        <br />
        <br />
        <button onClick={handleClick}>Increase Count</button>
        <Childr memoizedValue={memoizedValue} /> */}

        <button onClick={handleClick}>Increase Count</button>
        <h2>{count}</h2>

        {/* this function (ageHandler) only gets 
            re-defined if any of its dependencies in 
            the dependency array change */}
        <Child name={name} ageHandler={ageHandler} />
      </div>
    </div>
  );
}
