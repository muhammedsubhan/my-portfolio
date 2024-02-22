import Link from "next/link";
import React from "react";

import SideDrawer from "../Drawer/SideDrawer";

const Navbar = () => {
  return (
    <>
      <div className="py-6 px-20 lg:px-20 md:flex md:items-center md:justify-center sm:px-10 sm:justify-start">
        <div className="hidden sm:flex ">
          <SideDrawer />
        </div>
        <ul className="flex gap-16 items-center md:gap-10 sm:hidden font-medium">
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
