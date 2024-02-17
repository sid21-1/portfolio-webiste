import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="relative  px-7 py-8 flex justify-between items-center bg-red-600">
        <div>
          <h1 className=" font-extrabold text-2xl">Siddhanth</h1>
        </div>
        <div className="absolute bg-yellow-400 min-h-[60vh] left-0 top-24 w-full px-7 flex flex-col  gap-14">
          {["Home", "About", "Skills", "Contact"].map((item, index) => (
            <a className=" cursor-pointer text-xl" key={index}>
              {item}
            </a>
          ))}
          <div>
          <button className=" bg-green-700 px-4 py-1 text-xl  font-bold  rounded cursor-pointer">
            Hire me
          </button>
        </div>
        </div>
        
      </nav>
    </>
  );
};

export default Navbar;
