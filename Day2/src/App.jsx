import React from "react";
import Icons from "./components/Icons";
import StyledCard from "./components/StyledCard";
import ProfileCard from "./components/ProfileCard";

const App = () => {
  return (
    <div>
      <div
        style={{
          color: "white",
          backgroundColor: "crimson",
          padding: "2rem",
          fontSize: "5rem",
        }}
      >
        Inline styling <Icons />
      </div>

      <StyledCard />
      <ProfileCard />
    </div>
  );
};

export default App;
