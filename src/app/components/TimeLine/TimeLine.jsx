"use client";
import React from "react";
import { Disclosure, Transition } from "@headlessui/react";
import arrowDown from "../../../../public/arrow.svg";
import Image from "next/image";
const TimeLine = ({ item }) => {
  return (
    <>
      <div
        key={item.id + item.title}
        className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-pw-blue"
      >
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className={"text-left"}>
                <div className="flex justify-between w-fit sm:flex-col items-end">
                  <div>
                    <h2 className="text-xl font-bold sm:text-base text-pw-blue">
                      {item.title}
                    </h2>
                    <h3 className="text-base sm:text-sm font-bold text-pw-orange my-2">
                      {item.company}
                    </h3>
                    <time className=" text-sm font-medium text-pw-blue">
                      {item.startDate} -{" "}
                      {item.endDate === null ? "present" : item.endDate}
                    </time>
                    <h4 className="text-base  font-bold text-pw-orange my-2">
                      <>
                        Tech Stack :{" "}
                        {item.techStack.map((item) => (
                          <span
                            className=" font-medium sm:text-sm text-pw-blue"
                            key={item.id + item.title}
                          >
                            {item.title}{" "}
                          </span>
                        ))}
                      </>
                    </h4>
                  </div>
                  <Image
                    src={arrowDown}
                    alt="arrow-icon-down"
                    className={`${
                      open ? "rotate-180 transform" : "animate-bounce"
                    } ml-2`}
                  />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel
                  className={
                    "my-2 ml-2 prose prose-headings:text-base prose-headings:font-spartanSemiBold prose-headings:text-pw-orange prose-li:text-pw-blue prose-li:font-spartanMedium prose-li:text-base"
                  }
                >
                  <ul className="list-disc text-base font-medium flex flex-col gap-2 w-[600px] md:w-full md:text-sm">
                    {Array.isArray(item.summary) &&
                      item.summary.map((item, index) => (
                        <li key={index + 1}>{item}</li>
                      ))}
                  </ul>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
};

export default TimeLine;
