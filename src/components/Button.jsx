import React from "react";

const Button = ({ children, className }) => {
  return (
    <button
      className={`bg-[#FC5130] text-white py-2 px-6 rounded  hover:bg-[#d84315] font-semibold duration-500 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
