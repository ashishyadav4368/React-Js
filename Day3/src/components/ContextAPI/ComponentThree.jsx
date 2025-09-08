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
                  <p>
                    {" "}
                    <h1>
                      here for every value we have to pass a callback function
                      so this is a compilicated situation so to solve this we
                      will use useContext hook so it might created nested
                      callback and sometimes it is also known as consumer hell ,
                      this approach wea used in react beore the hooks were used
                      in react js
                    </h1>
                  </p>
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
