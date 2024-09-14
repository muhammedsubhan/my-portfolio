import React from "react";
import SkillList from "../SkillsList/SkillList";
import Image from "next/image";
import arrowDown from "../../../../public/arrow.svg";

const Skills = () => {
  const skillsContent = {
    title: "Skills.",
    description:
      "With a diverse range of skills, including expertise in ReactJS, React Native, NodeJS, MongoDB, and GraphQL, I am a versatile software engineer with the ability to tackle a wide variety of projects and challenges.",
    expertise: [
      {
        id: 1,
        name: "Front-end Development",
        skills: [
          {
            id: 4,
            name: "HTML",
            icon: "/icons/html.png",
          },
          {
            id: 5,
            name: "CSS",
            icon: "/icons/css.png",
          },
          {
            id: 6,
            name: "SASS",
            icon: "/icons/sass.png",
          },
          {
            id: 2,
            name: "Javascript",
            icon: "/icons/js.png",
          },
          {
            id: 3,
            name: "Typescript",
            icon: "/icons/typescript.png",
          },
          {
            id: 7,
            name: "React",
            icon: "/icons/react-2.svg",
          },
          {
            id: 8,
            name: "NextJS",
            icon: "/icons/next-js.svg",
          },
          {
            id: 9,
            name: "Bootstrap",
            icon: "/icons/bootstrap.png",
          },
          {
            id: 10,
            name: "TailwindCSS",
            icon: "/icons/tailwindcss.svg",
          },
        ],
      },
      {
        id: 11,
        name: "Mobile App Development",
        skills: [
          {
            id: 12,
            name: "React Native",
            icon: "/icons/react-native-1.svg",
          },
        ],
      },
      {
        id: 13,
        name: "Backend Development",
        skills: [
          {
            id: 14,
            name: "Python",
            icon: "/icons/python.png",
          },
          {
            id: 15,
            name: "Django",
            icon: "/icons/django.jpg",
          },
          {
            id: 16,
            name: "Django Rest FrameWork",
            icon: "/icons/djangoREST.png",
          },
          {
            id: 17,
            name: "Node Js",
            icon: "/icons/node.png",
          },
          {
            id: 18,
            name: "Express Js",
            icon: "/icons/express.png",
          },
        ],
      },
    ],
  };

  return (
    <>
      <div className="py-28 px-16 md:px-10 sm:px-3 lg:px-5">
        <SkillList
          title={skillsContent.title}
          description={skillsContent.description}
          expertise={skillsContent.expertise}
        />
        <div className="mt-20 flex gap-3 items-center md:px-3">
          <Image
            src={arrowDown}
            alt="arrow-icon-down"
            className="animate-bounce"
          />
          <p className="text-sm font-medium">Scroll</p>
        </div>
      </div>
    </>
  );
};

export default Skills;
