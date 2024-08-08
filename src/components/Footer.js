import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="flex flex-col gap-8 md:flex-row space-y-6 m-4 lg:justify-between">
      <Slide>
        <h1 className=" text-2xl font-bold bg-gradient-to-b from-slate-50 to-pink-100 bg-clip-text text-transparent">
          Reach me out...
        </h1>
      </Slide>
      <form
        action=""
        className="flex flex-col gap-5 md:flex-col shadow-2xl p-6 rounded-md "
      >
        <Fade
          cascade
          delay={1000}
          className="flex flex-col gap-5 md:flex-col  rounded-md "
        >
          <input
            type="text"
            className="rounded-md px-5 py-4  italic md:px-20 "
            placeholder="Enter Your Name"
            name=""
            id=""
          />
          <input
            type="email"
            className="rounded-md px-5 py-4  italic md:px-20 "
            placeholder="Enter Your Email"
            name=""
            id=""
          />
        
        <textarea type="text"
            className="rounded-md px-5 py-10  italic md:px-20 "
            placeholder="Leave a message..."
            name=""
            id=""></textarea>
          <button
            className="bg-gradient-to-r from-slate-700 via-gray-400 to-slate-600 hover:from-pink-500 hover:to-yellow-500 text-s text-white rounded-md px-4 py-3  md:px-2"
            type="submit"
          >
            Send
          </button>
          <div className="gap-5 flex ">
            <input type="checkbox" className="size-5 " name="" id="" />
            <p className="bg-gradient-to-b from-slate-50 to-pink-100 bg-clip-text text-transparent font-semibold">
              Get updates on Email.
            </p>
          </div>
        </Fade>
      </form>
      <Slide>
        <ul className="flex flex-col gap-4 text-3xl md:text-5xl items-end ">
          <li className="">
            <a href="mailto:rohanuix@gmail.com">
              <IoIosMail className="text-zinc-50" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/sharmi__sam__/">
              <RiInstagramFill className="text-zinc-50" />
            </a>
          </li>
          <li>
            <a href="https://x.com/Sam99573">
              <FaXTwitter className="text-zinc-50" />
            </a>
          </li>
        </ul>
      </Slide>
    </div>
  );
};

export default Footer;
