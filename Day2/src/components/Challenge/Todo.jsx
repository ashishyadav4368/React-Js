import React, { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
    e.preventDefault();
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          placeholder="Add a new Todo"
          onChange={handleChange}
        />
        <button type="submit">Add Todo</button>
      </form>

      <div>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </div>
    </div>
  );
};

export default Todo;
