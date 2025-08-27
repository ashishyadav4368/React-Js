import React from "react";

const RenderObject = () => {
  const users = [
    {
      fName: "Ashish",
      lName: "Yadav",
      age: "22",
    },
    {
      fName: "Anshu",
      lName: "Yadav",
      age: "22",
    },
    {
      fName: "Anshuyadav yadav",
      lName: "Yadav",
      age: "22",
    },
    {
      fName: "DivyaVardhan",
      lName: "Yadav",
      age: "22",
    },
    {
      fName: "Abhay",
      lName: "Yadav",
      age: "22",
    },
    {
      fName: "Abhishek",
      lName: "Yadav",
      age: "22",
    },
  ];
  return (
    <div>
      <h1>Rendering Array of objects</h1>
      {users.map(({ fName, lName, age }) => (
        <ul>
          <li>{fName}</li>
          <li>{lName}</li>
          <li>{age}</li>
        </ul>
      ))}
    </div>
  );
};

export default RenderObject;
