"use client";

import React from "react";
import { Tab } from "@headlessui/react";
import SkillPill from "../SkillPill/SkillPill";

const SkillList = ({ title, description, expertise }) => {
  return (
    <>
      <section id="skills" className="container">
        <div className="">
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-5  md:flex-col md:gap-16 lg:justify-between">
            <div className="flex flex-col gap-5 w-[650px] md:w-full md:text-center lg:w-full ">
              <h1 className="text-pw-orange text-3xl font-bold ">{title}</h1>
              <p className="text-pw-blue text-2xl font-normal leading-normal lg:text-xl sm:text-base">
                {description}
              </p>
            </div>
            <div className="w-[550px] md:w-full p-0 lg:w-full">
              <Tab.Group>
                <Tab.List className="flex xs:flex xs:flex-col xs:space-x-0 space-x-1 rounded bg-pw-blue p-1">
                  {expertise.map((category) => (
                    <Tab
                      key={category.id}
                      className={({ selected }) =>
                        selected
                          ? "w-full rounded py-2.5 sm:text-xs text-sm lg:text-sm font-medium font-spartanMedium ring-white ring-opacity-60 ring-offset-2 ring-offset-pw-orange focus:outline-none focus:ring-2 text-pw-orange bg-white shadow"
                          : "w-full rounded py-2.5 sm:text-xs text-sm lg:text-sm font-medium font-spartanMedium ring-white ring-opacity-60 ring-offset-2 ring-offset-pw-orange focus:outline-none focus:ring-2 text-pw-grey hover:bg-white/[0.12] hover:text-pw-orange h-[50px] "
                      }
                    >
                      {category.name}
                    </Tab>
                  ))}
                </Tab.List>
                <Tab.Panels className="mt-3 ">
                  {expertise.map((category) => (
                    <Tab.Panel
                      key={category.name}
                      className=" rounded bg-white p-3 shadow-lg ring-white ring-opacity-60 border-2 border-pw-blue border-double ring-offset-2 ring-offset-pw-blue focus:outline-none focus:ring-2"
                    >
                      <div className="flex flex-wrap gap-4 ">
                        {category.skills.map((item) => (
                          <SkillPill item={item} key={item.id} />
                        ))}
                      </div>
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </Tab.Group>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillList;
