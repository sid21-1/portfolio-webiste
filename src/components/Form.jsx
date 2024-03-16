import React, { useState } from "react";
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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  const validateForm = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const isValid = validateForm();
  if (isValid) {
    console.log("Form Submitted");
  } else {
    console.log("form imvalid");
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="w-full h-auto px-8 py-4 md:px-28 flex flex-col md:flex-row ">
      <div className=" form-div w-full md:w-1/2 ">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              className="border-2 border-black rounded-md px-3 py-2 w-full mb-5 md:w-[87%] focus:border-gray-500 "
              type="text"
              name="name"
              value={formData.name}
              placeholder="Enter your name"
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              className="border-2 border-black rounded-md px-3 py-2 w-full mb-5 md:w-[87%]"
              type="email"
              name="email"
              value={formData.email}
              placeholder="Enter your email"
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              className="border-2 border-black rounded-md px-3 py-10 w-full mb-5 md:w-[87%]"
              type="text"
              name="message"
              value={formData.message}
              placeholder="enter the message"
              onChange={handleChange}
            />
          </div>
          <button
            className="px-5 py-4 mr-4 rounded  border-2 border-black hover:bg-[#303036] hover:text-white duration-500"
            type="Submit"
          >
            Get in Touch
          </button>
        </form>
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
