import React from "react";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";

const Home = () => {
  return (
    <>
      <div className="centered-container">
        <div className="bg-image">
          <Hero />
          <About />
        </div>
        <div className="bg-image-2 ">
          <Experience />
        </div>
      </div>
    </>
  );
};

export default Home;
