import React from "react";
import coder from "../assets/coder.svg";
import Button from "./Button";
import SocialMediaBtn from "./SocialMediaBtn";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const LandingPage = () => {
  const socialMediaIcons = [
    { icon: <FaGithub />, url: "https://github.com/sid21-1" },
    { icon: <FaTwitter />, url: "https://twitter.com/Siddhanth821" },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/siddhanthgupta0629/",
    },
  ];

  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <div className="w-full h-auto md:h-screen mt-20 md:mt-24 md:px-28 flex flex-col md:flex-row md:justify-between items-center mb-8 md:mb-1">
        <div className=" text-div  w-full md:w-3/5 px-8 md:px-0 order-2 md:order-1 ">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[1.3rem] md:text-5xl md:my-7 my-1"
          >
            Hello I'am <span className="font-bold">Siddhanth Gupta</span>
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-[#FC5130] font-extrabold text-3xl md:text-[3.5rem]"
          >
            Frontend <span>Developer</span>
          </motion.h1>
          <motion.div
            className=" mt-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button className="text-lg md:my-10">Resume</Button>
          </motion.div>
          <div className=" icon-div order-4 hidden md:flex md:items-center  w-full  mt-7 ">
            {socialMediaIcons.map(({ icon, url }, index) => (
              <SocialMediaBtn key={index} onClick={() => handleClick(url)}>
                {icon}
              </SocialMediaBtn>
            ))}
          </div>
        </div>
        <motion.div
          className="w-full md:w-2/5 order-1 md:order-2 flex justify-center items-center m-8 "
          animate={{
            y: [-10, 10, -10], // Vertical movement values
          }}
          transition={{
            duration: 2, // Duration of each cycle
            repeat: Infinity, // Repeat infinitely
            ease: "easeInOut", // Easing function
          }}
        >
          <img src={coder} alt="" />
        </motion.div>
        <div className="order-3 text-lg px-8 mt-7 md:hidden text-[#71717A]">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            sequi impedit adipisci inventore, architecto ullam. Consectetur
            voluptates sunt repellendus asperiores!
          </p>
        </div>
        <div className=" icon-div order-4 flex items-start w-full px-8 mt-7 md:hidden">
          {socialMediaIcons.map(({ icon, url }, index) => (
            <SocialMediaBtn key={index} onClick={() => handleClick(url)}>
              {icon}
            </SocialMediaBtn>
          ))}
        </div>
      </div>
    </>
  );
};

export default LandingPage;
