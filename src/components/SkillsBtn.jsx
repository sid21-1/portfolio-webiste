import React from "react";

const SkillsBtn = ({ icon, children }) => {
  return (
    <div className=" bg-white w-28 h-28 text-black border-black border-2 flex flex-col justify-center items-center text-center">
      {React.cloneElement(icon, { className: "text-5xl" })}
      <span className=" text-center">{children}</span>
    </div>
  );
};

export default SkillsBtn;
