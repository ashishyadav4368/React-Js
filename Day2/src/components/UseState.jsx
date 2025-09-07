import React, { useState } from "react";

const UseState = () => {
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Usestate Hook</h1>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>{" "}
    </div>
  );
};

export default UseState;
