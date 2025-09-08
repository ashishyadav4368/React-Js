import React from "react";
import CopyInput from "./components/CopyInput";
import Switcher from "./components/Switcher";
import UseEffect1 from "./components/UseEffect/UseEffect1";
import FetchData from "./components/UseEffect/FetchData";
import ComponentA from "./components/PropDrilling/ComponentA";

const App = () => {
  return (
    <div>
      {/* <CopyInput /> */}
      {/* <Switcher /> */}
      {/* <UseEffect1 /> */}
      {/* <FetchData /> */}
      <ComponentA name="Ashish Yadav is passed as a prop from Component A" />
    </div>
  );
};

export default App;
