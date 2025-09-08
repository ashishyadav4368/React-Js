import React from "react";
import { Data, Data1 } from "../../App";
const ComponentThree = () => {
  return (
    <Data.Consumer>
      {(name) => {
        return (
          <Data1.Consumer>
            {(age) => {
              return (
                <h1>
                  My name is {name} and My age is {age}
                </h1>
              );
            }}
          </Data1.Consumer>
        );
      }}
    </Data.Consumer>
  );
};

export default ComponentThree;
