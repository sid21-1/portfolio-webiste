import { useState } from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import Form from "./components/Form";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <LandingPage />
      {/* <Skills/> */}
      <About />
      <Projects />
      <Form />
      <Footer />
    </>
  );
}

export default App;
