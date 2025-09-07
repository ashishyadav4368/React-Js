import React, { useEffect, useState } from "react";

const ExampleThree = () => {
  const [name, setName] = useState(() => {
    const savedName = localStorage.getItem("name");
    return savedName ? JSON.parse(savedName) : "";
  });
  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
  }, [name]);
  const handleChange = () => {
    setName(event.target.value);
  };

  const handleClear = () => {
    setName(" ");
  };

  return (
    <div>
      <h1>Your Name : {name}</h1>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter name"
      />
      <button onClick={handleClear}>Clear Name</button>
    </div>
  );
};

export default ExampleThree;
