import React from "react";

const UserList = () => {
  const users = [
    {
      id: 1,
      name: "Ashish Yadav",
      age: 22,
    },
    {
      id: 2,
      name: "Ashish Yadav",
      age: 22,
    },
    {
      id: 3,
      name: "Ashish Yadav",
      age: 22,
    },
  ];

  return (
    <div>
      <h1>Rendering the list of users </h1>
      {users.map((user) => (
        <ul key={user.id}>
          <li>{user.name}</li>
          <li>{user.age}</li>
        </ul>
      ))}
    </div>
  );
};

export default UserList;
