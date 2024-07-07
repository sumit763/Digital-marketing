import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Features from "./Components/Features.jsx";
import Services from "./Components/Services.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import Footer from "./Components/Footer.jsx";
const App = () => {
  return (
    <div>
      <Home />
      <Features />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
