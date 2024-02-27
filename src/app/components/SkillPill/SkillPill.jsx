import Image from "next/image";
import React from "react";

const SkillPill = ({ item }) => {
  return (
    <>
      <div key={item.id} className=" relative rounded p-3 hover:bg-gray-100">
        <Image
          src={item.icon}
          className="mx-auto mb-2 animate-pulse w-[35px] h-[35px]"
          alt={item.name}
          width={40}
          height={25}
          priority
        />
        <h2 className="text-xs lg:text-sm font-spartanSemiBold text-pw-blue text-center max-w-[8rem]">
          {item.name}
        </h2>
        <a
          href="#"
          className="absolute inset-0 rounded-m ring-pw-orange focus:z-10 focus:outline-none focus:ring-2"
          aria-label={item.name}
        />
      </div>
    </>
  );
};

export default SkillPill;
