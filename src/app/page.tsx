"use client";

import {
  ColorButton,
  TextGroup,
  TransparentButton,
  ThemeSwitch,
  ProjectCard,
} from "@/components";

const Home = () => {
  return (
    <main>
      <TextGroup heading="Title" subheading="BowalPay" />

      <ColorButton label="Let's talk" to="/" leftIcon="👋" />

      <TransparentButton label="Download Resume" to="/" rightIcon="↗" />

      <ThemeSwitch />

      <ProjectCard
        title="Croch Website"
        meta="Croch provides an online marketplace for crochet vendors to list, market, and sell their crafts to customers."
        to="/"
      />
    </main>
  );
};

export default Home;
