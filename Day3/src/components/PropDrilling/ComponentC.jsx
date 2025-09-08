import React from "react";

const ComponentC = ({ name }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>
        This name props is passed from App to ComponentA to ComponentB to
        ComponentC then it's been rendered here although Component B doesn't
        need this props still its' been passed ...this is called prop drilling ,
        <h4>
          to solve this problem of prop drilling , let's understand the context
          API
        </h4>
        <h2>Define Context API</h2>
        <h4>
          Context API is a feature that allows you to manage and share stats
          across your component tree without having to pass props down manually
          at every level. It's useful for scenarios where you need to share data
          or functions across many components, especially when these components
          are deeply nested{" "}
        </h4>
      </p>
    </div>
  );
};

export default ComponentC;
