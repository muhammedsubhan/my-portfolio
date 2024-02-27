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
        <div className="flex justify-center">
          <span className=" text-white text-sm text-center">
            Design inspiration from
            <Link
              href={"https://www.figma.com/community/file/1006095821656678611"}
              target="_blank"
              className=" text-sm font-spartanBold  text-pw-orange"
            >
              &nbsp;Akhil T J Portfolio Mockup Design{" "}
            </Link>
            <img
              src="/icons/figma-1.svg"
              alt=""
              className="w-5 h-5 animate-pulse inline-flex"
              loading="lazy"
            />
          </span>
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
