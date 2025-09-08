import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const FetchData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      if (data && data.length) setData(data);
    }
    getData();
  }, []);

  return (
    <div>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.body}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchData;
