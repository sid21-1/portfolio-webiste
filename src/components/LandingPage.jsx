import React from "react";
import coder from "../assets/coder.svg";
import Button from "./Button";

const LandingPage = () => {
  return (
    <div className="w-full h-auto mt-20 md:mt-24 md:px-28 flex flex-col md:flex-row md:justify-between items-center ">
      <div className="  w-full md:w-3/5 px-8 md:px-0 order-2 md:order-1 ">
        <h1 className="text-[1.3rem] md:text-5xl md:my-4">
          Hello I'am <span className="font-bold">Siddhanth Gupta</span>
        </h1>
        <h1 className="text-[#FC5130] font-extrabold text-3xl md:text-[3.5rem]">
          Frontend <span>Developer</span>
        </h1>
        <div className=" mt-4">
          <Button className="text-lg md:my-4">Resume</Button>
        </div>
      </div>
      <div className="w-full md:w-2/5  order-1 md:order-2 flex justify-center items-center m-8">
        <img src={coder} alt="" />
      </div>
      <div className="order-3 text-lg px-8 mt-7 md:hidden">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          sequi impedit adipisci inventore, architecto ullam. Consectetur
          voluptates sunt repellendus asperiores!
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
