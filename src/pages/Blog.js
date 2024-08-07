import React from "react";
import { Fade, Slide } from "react-awesome-reveal";

import { FaSearch } from "react-icons/fa";
const Blog = () => {
  return (
    <div className="flex flex-col gap-8 md:flex-col lg:flex-col space-y-6 m-4 lg:justify-between">
      <Slide>
        <h1 className=" text-2xl font-bold bg-gradient-to-b from-slate-50 to-pink-100 bg-clip-text text-transparent">
          My blogs
        </h1>
      </Slide>
      <form action="" className="flex flex-col gap-5 md:flex-col rounded-md ">
        <Fade
          cascade
          delay={1000}
          className="flex flex-col gap-5 md:flex-col rounded-md"
        >
          <div className="relative flex items-center">
            <input
              type="email"
              className="rounded-md px-5 py-4 italic md:px-20 w-full"
              placeholder="search.."
              name=""
              id=""
            />
            <FaSearch className="absolute right-4 text-gray-500 cursor-pointer" />
          </div>
        </Fade>
      </form>
      <Slide>
        <p className="font-semibold bg-gradient-to-b from-slate-50 to-pink-100 bg-clip-text text-transparent">
          Available soon...
        </p>
      </Slide>
    </div>
  );
};

export default Blog;
