import Image from "next/image";
import React from "react";

import gif from "../../../../public/giphy.gif";
const About = () => {
  return (
    <>
      <div className="py-20 px-28 lg:px-10 sm:px-5 lg:bg-pw-blue" id="about">
        <div className="flex items-center gap-10 justify-between sm:flex-col-reverse sm:gap-16">
          <div className="grayscale md:max-w-[320px]">
            <Image src={gif} width="480" height="500" priority alt="gif" />
          </div>

          <div className="w-[600px] sm:w-full">
            <div className="flex flex-col gap-8 sm:text-center">
              <h1 className="text-3xl font-bold md:text-2xl text-pw-orange">
                About Me.
              </h1>
              <p className="text-2xl md:text-base text-pw-grey">
                With a passion for technology and a focus on continuous
                learning, I am a software engineer with expertise in JavaScript
                and a willingness to explore new technologies. I am a proactive
                problem-solver and enjoy working on complex projects that
                require me to think creatively and outside the box.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
