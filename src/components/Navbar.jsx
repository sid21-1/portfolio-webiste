import React, { useState } from "react";
import Button from "./Button";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {
  let Links = [
    { name: "ABOUT ME", link: "/" },
    { name: "SKILLS", link: "/" },
    { name: "PROJECT", link: "/" },
    { name: "CONTACT ME", link: "/" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="shadow-md w-screen top-0 left-0  fixed">
        <div className="md:flex items-center justify-between bg-white py-8  text-gray-800 md:px-10 px-7">
          <div className=" cursor-pointer font-bold text-2xl font-[Sora]">Siddhanth </div>
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-9 md:hidden cursor-pointer"
          >
            {open ? <RxCross2 /> : <CiMenuBurger />}
          </div>

          <ul
            className={`md:flex items-center text-sm md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-20" : "top-[-490px]"
            }`}
          >
            {Links.map((Link) => (
              <li
                key={Link.name}
                className="md:ml-8
                md:my-0 my-7 "
              >
                <a
                  className="text-gray-800 hover:text-gray-400 duration-500 cursor-pointer"
                  href={Link.link}
                >
                  {Link.name}
                </a>
              </li>
            ))}
            
          </ul>
          <Button>Get Started</Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
