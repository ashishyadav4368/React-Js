import React from "react";
import CopyInput from "./components/CopyInput";
import Switcher from "./components/Switcher";
import UseEffect1 from "./components/UseEffect/UseEffect1";
import FetchData from "./components/UseEffect/FetchData";
import ComponentA from "./components/PropDrilling/ComponentA";
import { createContext } from "react";
import ComponentOne from "./components/ContextAPI/ComponentOne";

export const Data = createContext();
export const Data1 = createContext();

const App = () => {
  const name = "Ashish Yadav Context API";
  const age = 22;
  return (
    <Data.Provider value={name}>
      <Data1.Provider value={age}>
        {/* <CopyInput /> */}
        {/* <Switcher /> */}
        {/* <UseEffect1 /> */}
        {/* <FetchData /> */}
        {/* <ComponentA name="Ashish Yadav is passed as a prop from Component A" /> */}
        <ComponentOne />
      </Data1.Provider>
    </Data.Provider>
  );
};

export default App;
