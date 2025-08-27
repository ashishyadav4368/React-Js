import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import Greet from "./components/Greet";
import ProductInfor from "./components/ProductInfor";
import RenderList from "./components/RenderList";
import RenderObject from "./components/RenderObject";

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
      <Footer />
    </div>
  );
};

export default App;
