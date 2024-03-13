import React from "react";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import SkillsBtn from "./SkillsBtn";
const Skills = () => {
  const skillIcons = [
    { icon: <FaHtml5 />, text: "HTML" },
    { icon: <FaCss3Alt />, text: "CSS" },
    { icon: <IoLogoJavascript />, text: "Javascript" },
    { icon: <FaReact />, text: "React" },
    { icon: <SiTailwindcss />, text: "Tailwind" },
    { icon: <FaGitAlt />, text: "Git" },
  ];

  return (
    <div className="w-full  bg-[#303036]">
      <h1 className="text-center text-4xl py-8 font-semibold text-white ">
        {" "}
        My <span className="font-bold">Skills</span>
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 m-0 p-0">
        {skillIcons.map(({ icon, text }, index) => (
          <div key={index} className="flex justify-center">
            <SkillsBtn icon={icon}>{text}</SkillsBtn>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
