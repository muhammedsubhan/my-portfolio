import React from "react";
import Navbar from "../Navbar/Navbar";
import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import github from "../../../../public/github.svg";
import linkedin from "../../../../public/linkedin.svg";
import twitter from "../../../../public/twitter.svg";

const Hero = () => {
  return (
    <>
      <div className="h-screen relative  lg:bg-pw-blue" id="home">
        <Navbar />
        <div className="flex flex-col gap-8 px-20 py-64 lg:items-center sm:px-0">
          <div className="flex flex-col gap-4 lg:text-center ">
            <h1 className="text-4xl font-bold text-white text-stroke">
              Muhammad Subhan
            </h1>
            <div>
              <p className="text-2xl font-bold text-white">Software Engineer</p>
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
              <p className="animate-bounce">
                <Link href="#" target="_blank" rel="noreferrer">
                  <Image
                    src={twitter}
                    height={35}
                    width={32}
                    priority
                    alt="linkedin"
                  />
                </Link>
              </p>
            </div>
          </div>
          <div className="flex items-end lg:justify-center ">
            <div className="flex items-center gap-3 text-pw-grey absolute bottom-10 z-10">
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
