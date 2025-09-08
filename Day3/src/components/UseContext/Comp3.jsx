import React from "react";
import { useContext } from "react";
import { Data, Data1 } from "../../App";

const Comp3 = () => {
  const userName = useContext(Data);
  const age = useContext(Data1);
  return (
    <div>
      Comp3
      <h1>using useContext hook</h1>
      <h3>{userName}</h3>
      <h3>{age}</h3>
    </div>
  );
};

export default Comp3;
