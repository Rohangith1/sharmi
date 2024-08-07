import React from "react";

import { TypeAnimation } from "react-type-animation";
import {  Slide,  Zoom } from "react-awesome-reveal";
import Sharmi from '../assets/sharmi.png'



const Home = () => {
  return (
    <div className="space-y-10  lg:flex">
      <div className="flex items-center justify-center md:h-270 lg:flex-1 lg:order-2 ">
        <img className="lg:h-[400px] " src={Sharmi} alt="img" />
      </div>
      <div className="lg:flex-1 flex items-start m-4 space-y-3  flex-col justify-center">
        <Slide>
          <h1 className="text-6xl leading-tight bg-gradient-to-b from-slate-50 to-pink-100 bg-clip-text text-transparent gap-10 font-semibold">
            Hello
          </h1>
        </Slide>

        <Zoom delay={1000}>
          <TypeAnimation
            className="bg-gradient-to-br from-slate-50 via-pink-200 to-pink-500 bg-clip-text text-transparent font-extrabold text-5xl"
            sequence={[
              // Same substring at the start will only be typed once, initially
              "I'm ",
              2000,
              "I'm Sharmiii...🦋",
              1000,
              "I'm Sharmistha Bokolial",
              2000,
            ]}
            speed={40}
            style={{ fontSize: "2rem" }}
            repeat={Infinity}
          />
        </Zoom>
      </div>
    </div>
  );
};

export default Home;
