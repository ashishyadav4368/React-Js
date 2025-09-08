import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const UseEffect1 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Use Effect called");
    document.title = `Increment ${count}`;
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default UseEffect1;
