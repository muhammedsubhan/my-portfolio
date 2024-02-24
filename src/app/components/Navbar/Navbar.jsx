"use client";

import React, { useState, useEffect } from "react";

import SideDrawer from "../Drawer/SideDrawer";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (link) => {
    setActiveLink(link);
    // Scroll to the corresponding section
    const section = document.getElementById(link);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div
        className={`fixed z-[999] w-full py-[12px]  px-20 lg:px-0 md:flex md:items-center md:justify-center sm:px-10 sm:justify-start transition-all duration-300 ${
          isScrolled ? "bg-pw-blue" : ""
        }`}
      >
        <div className="hidden sm:flex">
          <SideDrawer />
        </div>
        <ul className="flex gap-12  text-pw-grey items-center text-xl md:gap-8 md:text-base sm:hidden font-medium">
          <li
            onClick={() => handleClick("home")}
            className={
              activeLink === "home" ? "active cursor-pointer" : "cursor-pointer"
            }
          >
            <p href="#">Home</p>
          </li>
          <li
            onClick={() => handleClick("about")}
            className={
              activeLink === "about"
                ? "active cursor-pointer"
                : "cursor-pointer"
            }
          >
            <p href="#">About</p>
          </li>
          <li
            onClick={() => handleClick("experience")}
            className={
              activeLink === "experience"
                ? "active cursor-pointer"
                : "cursor-pointer"
            }
          >
            <p href="#">Experience</p>
          </li>
          <li
            onClick={() => handleClick("skills")}
            className={
              activeLink === "skills"
                ? "active cursor-pointer"
                : "cursor-pointer"
            }
          >
            <p href="#">Skills</p>
          </li>
          <li
            onClick={() => handleClick("projects")}
            className={
              activeLink === "projects"
                ? "active cursor-pointer"
                : "cursor-pointer"
            }
          >
            <p href="#">Projects</p>
          </li>
          <li
            onClick={() => handleClick("contact")}
            className={
              activeLink === "contact"
                ? "active cursor-pointer"
                : "cursor-pointer"
            }
          >
            <p href="#">Contact</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
