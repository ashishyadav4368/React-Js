import React from "react";

const OnClickEvent = () => {
  const handleClick = () => {
    alert("kya re....button kyu daba raha hai  ");
  };
  return <button onClick={handleClick}>Click Me Bro!</button>;
};

export default OnClickEvent;
