import React, { useState } from "react";

const ExampleTwo = () => {
  const [randomNumber, setRandomNumber] = useState(() =>
    Math.floor(Math.random * 100)
  );

  const generateNum = () => {
    const newNumber = Math.floor(Math.random() * 100);
    setRandomNumber(newNumber);
  };

  return (
    <div>
      <h1>Random Number : {randomNumber}</h1>
      <button onClick={generateNum}>Generate New Number</button>
    </div>
  );
};

export default ExampleTwo;
