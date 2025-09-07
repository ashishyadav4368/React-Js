import React, { useState } from "react";

const UseState1 = () => {
  const addFriend = () => {
    setFriends([...friends, "Divyavardhan"]);
  };
  const removeFriend = () => {
    setFriends(friends.filter((friend) => friend !== "Divyavardhan"));
  };

  const updateOneFriend = () => {
    setFriends(
      friends.map((friend) =>
        friend === "Ashish Yadav" ? " Updated Ashish Yadav" : friend
      )
    );
  };

  const [friends, setFriends] = useState(["Ashish", "Anshu", "abhay"]);
  return (
    <div>
      <h3>adding and removing elements from array from state </h3>
      {friends.map((friend) => (
        <li key={Math.random()}>{friend}</li>
      ))}

      <h1>adding new friend</h1>
      <button onClick={addFriend}>Add friend</button>
      <button onClick={removeFriend}>Remove friend</button>
      <button onClick={updateOneFriend}>Update one friend</button>
    </div>
  );
};

export default UseState1;
