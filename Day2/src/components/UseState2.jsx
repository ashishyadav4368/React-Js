import React, { useState } from "react";

const UseState2 = () => {
  const changeRating = () => {
    setMovie({ ...movie, ratings: 10 });
  };

  const [movie, setMovie] = useState({
    title: "Bahubali",
    ratings: 7,
  });

  return (
    <div>
      <h2>Title: {movie.title}</h2>
      <p>Ratings : {movie.ratings}</p>
      <button onClick={changeRating}>change ratings</button>
    </div>
  );
};

export default UseState2;
