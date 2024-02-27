"use client";

import React, { useState, useEffect } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const SideDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

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
      <p className="text-white ">
        <FontAwesomeIcon
          icon={faBars}
          size="xl"
          ref={btnRef}
          onClick={onOpen}
        />
      </p>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="xs"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
            <ul className="flex flex-col gap-10 items-center text-xl justify-center font-bold text-pw-blue">
              <li
                onClick={() => handleClick("home")}
                className={activeLink === "home" ? "active-link" : ""}
              >
                <p href="#">Home</p>
              </li>
              <li
                onClick={() => handleClick("about")}
                className={activeLink === "about" ? "active-link" : ""}
              >
                <p href="#">About</p>
              </li>
              <li
                onClick={() => handleClick("experience")}
                className={activeLink === "experience" ? "active-link" : ""}
              >
                <p href="#">Experience</p>
              </li>
              <li
                onClick={() => handleClick("skills")}
                className={activeLink === "skills" ? "active-link" : ""}
              >
                <p href="#">Skills</p>
              </li>
              <li
                onClick={() => handleClick("projects")}
                className={activeLink === "projects" ? "active-link" : ""}
              >
                <p href="#">Projects</p>
              </li>
              <li
                onClick={() => handleClick("contact")}
                className={activeLink === "contact" ? "active-link" : ""}
              >
                <p href="#">Contact</p>
              </li>
            </ul>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideDrawer;
