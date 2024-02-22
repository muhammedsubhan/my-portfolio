import React from "react";
import Navbar from "../Navbar/Navbar";
import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import github from "../../../../public/github.png";
import linkedin from "../../../../public/linkedin.png";

const Hero = () => {
  return (
    <>
      <div className="h-screen relative">
        <Navbar />
        <div className="flex flex-col gap-8 px-20 py-32 sm:items-center sm:px-0">
          <div className="flex flex-col gap-4 sm:text-center">
            <h1 className="text-3xl font-medium">Muhammad Subhan</h1>
            <div>
              <p className="text-2xl font-medium">Software Engineer</p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-6">
              <p className="animate-bounce">
                <Link
                  href="https://github.com/muhammedsubhan"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={github}
                    height={35}
                    width={32}
                    priority
                    alt="github"
                  />
                </Link>
              </p>
              <p className="animate-bounce">
                <Link
                  href="https://www.linkedin.com/in/muhammad-subhan-917b62206/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={linkedin}
                    height={35}
                    width={32}
                    priority
                    alt="linkedin"
                  />
                </Link>
              </p>
            </div>
          </div>
          <div className="flex items-end sm:justify-center ">
            <div className="flex items-center gap-3  absolute bottom-10">
              <div className="animate-bounce">
                <FontAwesomeIcon icon={faArrowDown} size="lg" />
              </div>
              <p className="text-sm font-medium">Scroll</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
