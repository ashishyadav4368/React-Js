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
      <Footer />
    </div>
  );
};

export default App;
