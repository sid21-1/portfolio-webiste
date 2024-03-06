import React from "react";
import coder from "../assets/coder.svg";
import Button from "./Button";

const LandingPage = () => {
  return (
    <div className="w-full h-auto text-3xl mt-20 md:mt-24 md:px-10 flex flex-col md:flex-row md:justify-between items-center ">
      <div className="happy w-full md:w-3/5  order-2 md:order-1 px-10">
        <h1>
          Hello I'am <span>Siddhanth Gupta</span>
        </h1>
        <h1>
          Frontend <span>Developer</span>
        </h1>
        <div>
          <Button>Resume</Button>
        </div>
      </div>
      <div className="sad w-full md:w-2/5  order-1 md:order-2 flex justify-center items-center">
        <img  src={coder} alt="" />
      </div>
    </div>
  );
};

export default LandingPage;
