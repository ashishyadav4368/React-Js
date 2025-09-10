import React from "react";
import CopyInput from "./components/CopyInput";
import Switcher from "./components/Switcher";
import UseEffect1 from "./components/UseEffect/UseEffect1";
import FetchData from "./components/UseEffect/FetchData";
import ComponentA from "./components/PropDrilling/ComponentA";
import { createContext } from "react";
import ComponentOne from "./components/ContextAPI/ComponentOne";
import Comp1 from "./components/UseContext/Comp1";
import {
  UserContext,
  UserProvider,
} from "./components/UseContext/Challenge/UserContext";
import UserProfile from "./components/UseContext/Challenge/UserProfile";
import UpdateUser from "./components/UseContext/Challenge/UpdateUser";
import UseReducer from "./components/UseReducer/UseReducer";

export const Data = createContext();
export const Data1 = createContext();

const App = () => {
  const name = "Ashish Yadav Context API";
  const age = 22;
  return (
    // <Data.Provider value={name}>
    //   <Data1.Provider value={age}>
    //     {/* <CopyInput /> */}
    //     {/* <Switcher /> */}
    //     {/* <UseEffect1 /> */}
    //     {/* <FetchData /> */}
    //     {/* <ComponentA name="Ashish Yadav is passed as a prop from Component A" /> */}
    //     {/* <ComponentOne /> */}
    //     {/* <Comp1 /> */}
    //   </Data1.Provider>
    // </Data.Provider>

    // <UserProvider>
    //   <UserProfile />
    //   <UpdateUser />
    // </UserProvider>

    <>
      <UseReducer />
    </>
  );
};

export default App;
