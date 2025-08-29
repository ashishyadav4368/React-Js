import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import Greet from "./components/Greet";
import ProductInfor from "./components/ProductInfor";
import RenderList from "./components/RenderList";
import RenderObject from "./components/RenderObject";
import UserList from "./components/UserList";
import ProductList from "./components/ProductList";
import Prop from "./components/Prop";
import PropExercise from "./components/PropExercise";
import Card from "./components/Card";
import ConditionRender from "./components/ConditionRender";

const App = () => {
  return (
    <div>
      <p>{2 + 2}</p>
      <Header />
      <Greet />
      <MainContent />

      <ProductInfor />
      <RenderList />
      <RenderObject />
      <UserList />
      <ProductList />
      {/* passing props  */}
      <Prop
        name="Ashish Yadav"
        age={22}
        isMarried={false}
        hobbies={["sleeping", "coding", "eating"]}
      />

      <PropExercise name="Ashish Yadav" age={22} />
      <Card>
        <h1>this is my card</h1>
        <p>here is some content for the card </p>
        {/* //now how will thi be accessed uisng props , so pops.children comes here
        to do so . */}
      </Card>

      <ConditionRender isValid={true} />
      <Footer />
    </div>
  );
};

export default App;
