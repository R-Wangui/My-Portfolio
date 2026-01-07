// import { useState } from "react";
// import PropTypes from "prop-types";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Footer from "../components/layout/Footer";
import Projects from "../components/Projects";
import AboutMe from "./AboutMe";
import Navbar from "@/components/layout/Navbar";
// import Resume from './Resume';

function Landing() {

  return (
    <>
      <div id="landing">
        <Navbar
          variant="default"
        />
        <Hero />
        <AboutMe />
        <Services />
        <Projects />
        <Footer />
      </div>
    </>
  );
}

export default Landing;
