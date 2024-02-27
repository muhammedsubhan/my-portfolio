import React from "react";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

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
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
