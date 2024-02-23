import React from "react";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";

const Home = () => {
  return (
    <>
      <div className="centered-container">
        <div className="bg-image">
          <Hero />
          <About />
        </div>
      </div>
    </>
  );
};

export default Home;
