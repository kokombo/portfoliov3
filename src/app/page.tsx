"use client";
import { Header, Projects, TechnicalSkills, About } from "@/containers";

const Home = () => {
  return (
    <main>
      <Header />
      <TechnicalSkills />
      <Projects />
      <About />
    </main>
  );
};

export default Home;
