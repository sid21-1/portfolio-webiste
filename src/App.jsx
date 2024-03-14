import { useState } from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Navbar />
      <LandingPage/>
      {/* <Skills/> */}
      <About/>
      <Projects/>
    </>
  );
}

export default App;
