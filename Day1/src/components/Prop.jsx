import React from "react";

const Prop = (props) => {
  return (
    <div>
      <h1>Hii there I'm passing props </h1>
      <h3>
        Name :{props.name} and My age is {props.age}, and I am {props.isMarried}{" "}
        // can't see value of boolean here and My hobbies are {props.hobbies}
      </h3>
    </div>
  );
};

// export default Prop;

// props destructuring
// const Prop = ({ name, age, isMarried, hobbies }) => {
//   return (
//     <div>
//       <h1>Hii there I'm passing props </h1>
//       <h3>
//         Name :{name} and My age is {age}, and I am {isMarried} // can't see
//         value of boolean here and My hobbies are {hobbies}
//       </h3>
//     </div>
//   );
// };

// export default Prop;
