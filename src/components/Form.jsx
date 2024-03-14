import React from "react";
import SocialMediaBtn from "./SocialMediaBtn";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
const Form = () => {
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
    <div className="w-full h-auto px-8 py-4 md:px-28 flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 ">
        <h1>hello my name is siddhanth</h1>
        <div className=" icon-div  flex items-start mb-10  w-full  mt-7 ">
          {socialMediaIcons.map(({ icon, url }, index) => (
            <SocialMediaBtn key={index} onClick={() => handleClick(url)}>
              {icon}
            </SocialMediaBtn>
          ))}
        </div>
      </div>
      <div className=" w-full md:w-1/2">
        <h1 className="text-3xl font-extrabold">Let's talks for </h1>
        <h1 className="text-3xl font-extrabold mb-3">Something Special </h1>
        <p className="text-[#71717A] text-[1rem] mb-6">
          I seek to push the limits of creativity to create high-engaging,
          user-friendly, and memorable interactive experiences.
        </p>
        <a
          href="mailto:guptasiddhanth2@gmail.com"
          className="text-black font-medium flex items-center text-[1.2rem] hover:text-gray-700 duration-300"
        >
          guptasiddhanth2@gmail.com <HiExternalLink />
        </a>
      </div>
    </div>
  );
};

export default Form;
