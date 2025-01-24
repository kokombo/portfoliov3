"use client";

import { Hero, Projects, TechnicalSkills, About } from "@/containers";
import { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <TechnicalSkills />
      <Projects />
      <About />
    </Fragment>
  );
};

export default Home;
