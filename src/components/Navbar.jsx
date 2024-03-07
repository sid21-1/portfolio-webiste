import React, { useState } from "react";
import Button from "./Button";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {
  let Links = [
    { name: "About Me", link: "/" },
    { name: "Skills", link: "/" },
    { name: "Project", link: "/" },
    { name: "Contact Me", link: "/" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="shadow-md w-screen top-0 left-0  fixed bg-[#FFFAFF]">
        <div className="md:flex items-center justify-between bg-white py-8  text-gray-800 md:px-28 px-7">
          <div className=" cursor-pointer font-bold text-lg leading-none font-[Sora] md:text-3xl">
            Siddhanth
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-9 md:hidden cursor-pointer"
          >
            {open ? <RxCross2 /> : <CiMenuBurger />}
          </div>

          <ul
            className={`md:flex items-center leading-none text-lg md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-7 transition-all duration-400 ease-in ${
              open ? "top-20" : "top-[-490px]"
            }`}
          >
            {Links.map((Link) => (
              <li
                key={Link.name}
                className="md:ml-20
                md:my-0 my-7  "
              >
                <a
                  className="text-gray-800 hover:text-gray-400 duration-500 cursor-pointer font-semibold "
                  href={Link.link}
                >
                  {Link.name}
                </a>
              </li>
            ))}
            <Button className="md:ml-8">Resume</Button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
