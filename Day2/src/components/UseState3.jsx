import React, { useState } from "react";

const UseState3 = () => {
  const changeName = () => {
    setMovie(
      movie.map((m) => (m.id === 1 ? { ...m, title: "Ashish Yadav" } : m))
    );
  };

  const [movie, setMovie] = useState([
    { id: 1, title: "Sholay", ratings: 5 },
    { id: 2, title: "RRR", ratings: 6 },
  ]);
  return (
    <div>
      <h2>Array of objects containing details about movie</h2>
      {movie.map((mov) => (
        <>
          <h3>Movie Id :{mov.id}</h3>
          <h4> Name : {mov.title}</h4>
          <h5>Ratings:{mov.ratings}</h5>
          <div>
            <button onClick={changeName}>Change the Name of Movie</button>
          </div>
        </>
      ))}
    </div>
  );
};

export default UseState3;
