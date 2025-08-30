import React from "react";
import Icons from "./components/Icons";
import StyledCard from "./components/StyledCard";
import ProfileCard from "./components/ProfileCard";
import OnClickEvent from "./components/onClickEvent";
import OnCopyEvent from "./components/OnCopyEvent";
import OnHoverEvent from "./components/OnHoverEvent";

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
      <OnClickEvent />
      <OnCopyEvent />
      <OnHoverEvent />
    </div>
  );
};

export default App;
