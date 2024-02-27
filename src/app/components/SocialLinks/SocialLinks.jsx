import Link from "next/link";
import React from "react";

const SocialLinks = ({ item }) => {
  return (
    <>
      <Link
        key={item.name}
        href={item.href}
        target="_blank"
        className="transition delay-150 duration-300 ease-in-out hover:scale-125"
      >
        <img src={item.icon} alt={item.name} className=" mr-4" loading="lazy" />
      </Link>
    </>
  );
};

export default SocialLinks;
