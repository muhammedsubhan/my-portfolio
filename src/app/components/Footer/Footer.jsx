import Link from "next/link";
import React from "react";
import { socialMediaProfileContent } from "../Projects/data";
import SocialLinks from "../SocialLinks/SocialLinks";

const Footer = () => {
  return (
    <footer className=" bg-pw-blue">
      <main className="bg-[url('/images/footer-bg.svg')] lg:bg-none bg-right bg-contain bg-no-repeat px-5 pt-5 pb-5">
        <h1 className=" text-white text-sm text-center mb-5">
          Find me on social media....
        </h1>
        <div className="flex justify-center mb-5">
          <div className="inline-flex">
            {socialMediaProfileContent.map((item) => (
              <SocialLinks item={item} key={item.name} />
            ))}
          </div>
        </div>
       
        <div className="flex items-center justify-center mt-5">
          <h2 className=" text-white text-sm  text-center">
            All Rights Reserved ©
          </h2>
        </div>
      </main>
    </footer>
  );
};

export default Footer;
