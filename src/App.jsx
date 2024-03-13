import { useState } from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Skills from "./components/Skills";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar />
      <LandingPage/>
      {/* <Skills/> */}
      <About/>
    </>
  );
}

export default App;
