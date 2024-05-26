/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import About from "./Components/About/About.jsx";
import Services from "./Components/Services/Services.jsx";
import MyProjects from "./Components/MyProjects/MyProjects.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <MyProjects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
