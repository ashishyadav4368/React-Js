//Conditional rendering allows us to dynamically display
// //different UI components based on specific conditions

import React from "react";

const InvalidPassword = () => {
  return (
    <div>
      <h1>Password is Invalid</h1>
    </div>
  );
};
const ValidPassword = () => {
  return (
    <div>
      <h1>Password is Valid</h1>
    </div>
  );
};

const ConditionRender = ({ isValid }) => {
  //   if (isValid) {
  //     return <ValidPassword />;
  //   }
  //   return <InvalidPassword />;
  return isValid ? <ValidPassword /> : <InvalidPassword />;
};
export default ConditionRender;
