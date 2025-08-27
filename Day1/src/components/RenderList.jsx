import React from "react";

const RenderList = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 89];
  return (
    <div>
      <h1>Rendering List </h1>
      {numbers.map((number) => (
        <ul key={Math.random()}>
          <li>{number}</li>
        </ul>
      ))}
    </div>
  );
};

export default RenderList;
