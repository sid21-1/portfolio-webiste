import React, { useEffect, useState } from "react";
import image1 from "../assets/image2.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/imagenew2.svg";
import image5 from "../assets/imagenew2.svg";
import image6 from "../assets/imagenew3.svg";
import { HiExternalLink } from "react-icons/hi";

const projectsData = [
  {
    id: 1,
    image: image1,
    newImage: image4,
    title: "Crypto Screener Application",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem fuga nemo voluptatum sapiente illum, nesciunt maxime, quae atque temporibus odit eos impedit vitae iste quo ratione, totam adipisci nisi perferendis.",
  },
  {
    id: 2,
    image: image2,
    newImage: image5,
    title: "Euphoria - Ecommerce (Apparels) Website Template",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem fuga nemo voluptatum sapiente illum, nesciunt maxime, quae atque temporibus odit eos impedit vitae iste quo ratione, totam adipisci nisi perferendis.",
  },
  {
    id: 3,
    image: image3,
    newImage: image6,
    title: "Blog Website Template",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem fuga nemo voluptatum sapiente illum, nesciunt maxime, quae atque temporibus odit eos impedit vitae iste quo ratione, totam adipisci nisi perferendis.",
  },
];

const ProjectList = () => {
  const [isMd, setIsMd] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMd(window.innerWidth >= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="bg-[#303036]">
      <h1 className="text-4xl font-normal text-white text-center my-7 py-7">
        My <span className="font-semibold">Projects</span>
      </h1>
      <div className="flex justify-center items-center flex-col md:flex-row md:flex-wrap">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="px-8 py-4 md:px-28 flex flex-col md:flex-row md:justify-center md:items-center md:w-full md:gap-3"
          >
            <div
              className={`flex justify-center items-center md:w-1/2 ${
                project.id % 2 == 0 ? " md:order-2" : " "
              }`}
            >
              <img src={isMd ? project.newImage : project.image} alt="" />
            </div>
            <div
              className={`md:w-1/2 md:mb-28 ${
                project.id % 2 == 0 ? "md:order-1" : " "
              } `}
            >
              <p className="text-white text-2xl md:text-3xl my-4 font-extrabold">
                0{project.id}
              </p>
              <p className="text-white text-2xl md:text-3xl my-4 font-extrabold">
                {project.title}
              </p>
              <p className="text-[#71717A] text-[1rem]">
                {project.description}
              </p>
            </div>
            {/* <div className="text-white text-2xl mt-3 flex justify-start items-start ">
              <a href="#">
                <HiExternalLink />
              </a>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
