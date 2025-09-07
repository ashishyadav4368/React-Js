import React from "react";

const Component1 = ({ count, onClickHandler }) => {
  return <div onClick={onClickHandler}>{count}</div>;
};

export default Component1;
