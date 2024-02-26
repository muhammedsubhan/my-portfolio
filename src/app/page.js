import React from "react";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";

const Home = () => {
  return (
    <>
      <div className="centered-container">
        <div className="bg-image">
          <Hero />
          <About />
        </div>
        <div className="bg-image-2 md:bg-none">
          <Experience />
          <Skills />
          <Projects />
        </div>
      </div>
    </>
  );
};

export default Home;
