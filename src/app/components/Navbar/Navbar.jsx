import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="bg-black text-white py-6 px-60">
        <ul className="flex space-x-20 items-center">
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="#">Experience</Link>
          </li>
          <li>
            <Link href="#">Skills</Link>
          </li>
          <li>
            <Link href="#">Projects</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
