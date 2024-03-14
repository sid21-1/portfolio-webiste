import React from "react";
import AboutUS from "../assets/AboutUS.png";
const About = () => {
  return (
    <>
      <div className="px-8 py-4 md:px-28  flex flex-col md:flex-row md:gap-7 mt-8 w-full">
        <div className="order-1 md:order-2 md:w-1/2 ">
          <img src={AboutUS} alt="" />
        </div>
        <div className="order-3 text-[#71717A] text-[1rem] md:w-1/2 ">
          <h1 className="order-2 md:order-1 text-4xl my-4 font-normal  text-black">
            About <span className="font-semibold"> Me</span>
          </h1>
          <p>
            I'm a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </p>
          <p>
            I began my journey as a web developer in 2015, and since then, I've
            continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            in my early thirties, 7 years after starting my web development
            journey, I'm building cutting-edge web applications using modern
            technologies such as Next.js, TypeScript, Nestjs, Tailwindcss,
            Supabase and much more
          </p>
          <p>
            When I'm not in full-on developer mode, you can find me hovering
            around on twitter or on indie hacker, witnessing the journey of
            early startups or enjoying some free time. You can follow me on
            Twitter where I share tech-related bites and build in public, or you
            can follow me on GitHub.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
