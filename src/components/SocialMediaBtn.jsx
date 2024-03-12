import React from "react";

const SocialMediaBtn = ({ children, onClick }) => {
  return (
    <button
      className="flex items-center justify-center px-5 py-4 mr-4 rounded  border-2 border-black hover:bg-[#303036] hover:text-white duration-500"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default SocialMediaBtn;
