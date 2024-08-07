import React from "react";
import { Fade, Slide } from "react-awesome-reveal";

import { FaSearch } from "react-icons/fa";
const About = () => {
  return (
    <div className="flex flex-col gap-8 md:flex-col space-y-6 m-4 lg:justify-between lg:flex-col">
      <Slide>
        <h1 className=" text-2xl font-bold bg-gradient-to-b from-slate-50 to-pink-100 bg-clip-text text-transparent">
          About Me
        </h1>
      </Slide>
      <div action="" className="flex flex-col gap-5 md:flex-col rounded-md">
        <Fade
          cascade
          delay={1000}
          className="flex flex-col gap-5 md:flex-col rounded-md"
        >
          <div className=" flex items-center">
            <p className="text-white font-semibold">
              Hi, I'm Sharmistha, and I'm currently pursuing a Bachelor of
              Science (B.Sc.) degree in Physics at Jorhat Institute of Science
              and Technology.{" "}
            </p>
            {/*<input
              type="email"
              className="rounded-md px-5 py-4 italic md:px-20 w-full"
              placeholder="search.."
              name=""
              id=""
            />
            <FaSearch className="absolute right-4 text-gray-500 cursor-pointer" />*/}
          </div>
        </Fade>
      </div>
      
    </div>
  );
};

export default About;
