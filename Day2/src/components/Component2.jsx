import React from "react";

const Component2 = ({ count, onClickHandler }) => {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onClickHandler}>+</button>
    </div>
  );
};

export default Component2;
