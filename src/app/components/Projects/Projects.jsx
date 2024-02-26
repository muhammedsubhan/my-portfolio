"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { projectsContent } from "./data";
import Link from "next/link";
import Image from "next/image";
import nextsliderHover from "../../../../public/icons/slider-next-hover.svg";
import prevsliderHover from "../../../../public/icons/slider-previous-hover.svg";

const Projects = () => {
  const [swiper, setSwiper] = useState(null);

  const { title, projects } = projectsContent;

  const handleSliderNavigation = (direction) => {
    if (swiper) {
      if (direction === "prev") {
        swiper.slidePrev();
      } else if (direction === "next") {
        swiper.slideNext();
      }
    }
  };

  return (
    <>
      <section id="projects" className="">
        <main className="container px-20 flex flex-col gap-10 lg:px-3 ">
          <div className="px-3 py-10 ">
            <h1 className=" text-pw-orange lg:text-3xl font-bold hidden lg:flex">
              {title}
            </h1>
          </div>
          <Swiper
            slidesPerView={"auto"}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Navigation]}
            className="w-full "
            onSwiper={setSwiper}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id} className="">
                <div className="flex items-center justify-between gap-10 lg:items-start lg:justify-center lg:gap-20 md:flex-col md:items-center md:justify-center md:gap-0 flex-row-reverse">
                  <div className="relative">
                    {/* <img
                      src="/images/net-bg.svg"
                      alt="net-bg"
                      className="animate-pulse top-1 absolute w-[400px] left-96"
                      loading="lazy"
                    /> */}
                    <div className="relative grayscale">
                      <div className="relative">
                        <img
                          className="w-[480px] h-[520px] lg:w-[250px] lg:h-[250px] md:w-[300px]"
                          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/03fdb466-60c7-4df2-8aeb-8f9f008d2afa/db8o23g-c69fffc4-ad01-4d0a-8add-832de1a26de7.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAzZmRiNDY2LTYwYzctNGRmMi04YWViLThmOWYwMDhkMmFmYVwvZGI4bzIzZy1jNjlmZmZjNC1hZDAxLTRkMGEtOGFkZC04MzJkZTFhMjZkZTcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.u2KXFJm5O_QWDqHAScT-QTWe_pwrUaCubl4UMxl1Gw0"
                          alt="gif"
                          loading="lazy"
                        />
                        <div className="w-full">
                          <div className=" absolute top-60 lg:top-28 flex items-center justify-between w-full ">
                            {/* Custom prev and next sliders */}
                            <Image
                              src={prevsliderHover}
                              height={90}
                              width={90}
                              onClick={() => handleSliderNavigation("prev")} // Go to previous slide on click
                              alt="Previous Slider"
                              className="cursor-pointer w-[90px] lg:w-[60px]"
                            />
                            <Image
                              src={nextsliderHover}
                              height={90}
                              width={90}
                              onClick={() => handleSliderNavigation("next")} // Go to next slide on click
                              alt="Next Slider"
                              className="cursor-pointer  w-[90px] lg:w-[60px]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" w-[700px] lg:w-[370px] mt-10 md:w-full md:px-10 sm:px-0 md:flex md:items-center md:justify-center md:text-center ">
                    <div className="flex flex-col items-start gap-3 lg:gap-1  md:items-center md:justify-center md:text-center">
                      <h1 className=" text-pw-orange text-3xl font-bold lg:hidden">
                        {title}
                      </h1>
                      <h2 className=" text-pw-orange text-2xl my-3 font-semibold lg:text-xl">
                        {project.title}
                      </h2>
                      <p className="text-pw-blue text-xl  mb-3 leading-loose lg:leading-7 lg:text-base">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap mb-3 gap-3 md:justify-center md:items-center md:gap-2">
                        {project.techStack.map((stack) => (
                          <span
                            key={stack.id}
                            className="cursor-pointer py-2 px-3 bg-pw-grey text-sm font-spartanSemiBold text-white rounded mr-4 transition delay-150 duration-300 ease-in-out hover:bg-pw-orange mb-3 lg:mb-0"
                          >
                            {stack.stack}
                          </span>
                        ))}
                      </div>
                      <div className="inline-flex justify-center md:justify-start">
                        <Link
                          href={project.githubLink}
                          target="_blank"
                          className={`${
                            project.githubLink.length < 1 && "hidden"
                          } "transition delay-150 duration-300 ease-in-out hover:scale-125"`}
                        >
                          <img
                            src="/icons/github-filled.svg"
                            alt="github link"
                            className="mr-4"
                            loading="lazy"
                          />
                        </Link>
                        <Link
                          href={project.websiteLink}
                          target="_blank"
                          className={`${
                            project.websiteLink.length < 1 && "hidden"
                          } "transition delay-150 duration-300 ease-in-out hover:scale-125"`}
                          aria-label="globe icon link"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="text-pw-grey w-[37px] h-[37px] mr-4"
                            aria-label="globe icon"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </main>
      </section>
    </>
  );
};

export default Projects;
