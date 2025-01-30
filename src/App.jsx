import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
