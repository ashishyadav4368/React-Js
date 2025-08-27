import React from "react";

const Greet = () => {
  const greet = "Hello ashish";
  const date = new Date();
  return (
    <div>
      <h1>{greet}</h1>
      <h2>Date :{date.getDate()} </h2>
    </div>
  );
};

export default Greet;
