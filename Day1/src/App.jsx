import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";

const App = () => {
  return (
    <div>
      <p>{2 + 2}</p>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;
