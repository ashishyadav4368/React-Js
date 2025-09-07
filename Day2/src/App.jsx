import React, { useState } from "react";
import Icons from "./components/Icons";
import StyledCard from "./components/StyledCard";
import ProfileCard from "./components/ProfileCard";
import OnClickEvent from "./components/onClickEvent";
import OnCopyEvent from "./components/OnCopyEvent";
import OnHoverEvent from "./components/OnHoverEvent";
import UseState from "./components/UseState";
import UseState1 from "./components/UseState1";
import UseState2 from "./components/UseState2";
import UseState3 from "./components/UseState3";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import ExampleOne from "./components/ExampleOne";
import ExampleTwo from "./components/ExampleTwo";
import ExampleThree from "./components/ExampleThree";
import Todo from "./components/Challenge/Todo";

const App = () => {
  const [count, setCount] = useState(0); // now we will give this state to component1 and component2 as props

  return (
    <div>
      {/* <div
        style={{
          color: "white",
          backgroundColor: "crimson",
          padding: "2rem",
          fontSize: "5rem",
        }}
      >
        Inline styling <Icons />
      </div> */}
      {/* 
      <StyledCard />
      <ProfileCard />
      <OnClickEvent />
      <OnCopyEvent /> */}
      {/* <OnHoverEvent /> */}
      {/* <UseState />
      <UseState1 />
      <UseState2 /> */}
      {/* <UseState3 /> */}

      {/* <Component1 count={count} onClickHandler={() => setCount(count + 1)} />
      <Component2 count={count} onClickHandler={() => setCount(count + 1)} /> */}
      {/* <ExampleOne /> */}
      {/* <ExampleTwo /> */}
      {/* <ExampleThree /> */}
      <Todo />
    </div>
  );
};

export default App;
