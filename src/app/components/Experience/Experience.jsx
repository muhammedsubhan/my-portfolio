import React from "react";
import TimeLine from "../TimeLine/TimeLine";
import arrowDown from "../../../../public/arrow.svg";
import Image from "next/image";

const Experience = () => {
  const experienceData = [
    {
      id: 1,
      title: "Front-End Developer",
      company: "Orax Technologies",
      startDate: "Jan 2023",
      endDate: null,
      techStack: [
        { id: "1.1", title: "Javascript ," },
        { id: "1.2", title: "ReactJs," },
        { id: "1.3", title: "NextJs," },
        { id: "1.4", title: "FireBase," },
        { id: "1.5", title: "Tailwind CSS," },
        { id: "1.6", title: "Typescript." },
      ],
      summary: [
        "Frontend Web Developer at Orax Technologies, responsible for creating user-friendly web interfaces.",
        "Successfully developed and launched a responsive e-commerce website, leading to a 30% increase in user engagement.",
        "Resolved challenging issues related to user experience, performance optimization, and browser compatibility, ensuring smooth web application functionality.",
        "Kept updated with the latest industry trends and technologies to bring innovative solutions to projects",
      ],
    },
    {
      id: 2,
      title: "React Native Developer",
      company: null,
      startDate: "Aug 2023",
      endDate: null,
      techStack: [
        { id: "3.1", title: "Javascript ," },
        { id: "3.2", title: "React Native," },
        { id: "3.3", title: "FireBase," },
        { id: "3.4", title: "NativeWind." },
      ],
      summary: [
        "Spearheaded the development and launch of a responsive e-commerce mobile application, resulting in a notable 30% surge in user engagement.",
        "Successfully navigated intricate challenges surrounding user experience, performance enhancements, and cross-platform adaptability, ensuring flawless operation across diverse devices and OS environments.",
        "Maintained a proactive stance on industry advancements, assimilating cutting-edge technologies into projects to deliver innovative solutions and elevate user satisfaction levels.",
      ],
    },
  ];
  return (
    <>
      <div id="experience" className="py-20 px-20 md:px-10 sm:px-8 md:bg-none">
        <div className="flex flex-col gap-10 ">
          <h1 className="text-pw-orange text-3xl font-bold sm:text-2xl xs:text-xl">
            Over 1+ years experience.
          </h1>

          <div className=" space-y-6  relative px-4  before:absolute before:top-2 before:bottom-0 before:w-0.5 before:-left-3 before:dark:bg-pw-blue">
            {experienceData.map((item) => (
              <TimeLine key={item.id + item.title} item={item} />
            ))}
          </div>
        </div>
      </div>
      <div className="px-10 flex gap-3 items-center md:px-3">
        <Image
          src={arrowDown}
          alt="arrow-icon-down"
          className="animate-bounce"
        />
        <p className="text-sm font-medium">Scroll</p>
      </div>
    </>
  );
};

export default Experience;
