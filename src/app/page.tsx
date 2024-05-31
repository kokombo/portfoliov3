"use client";

import {
  ColorButton,
  TextGroup,
  TransparentButton,
  ThemeSwitch,
} from "@/components";

const Home = () => {
  return (
    <div>
      <TextGroup heading="Title" subheading="BowalPay" />

      <ColorButton label="Let's talk" to="/" leftIcon="👋" />

      <TransparentButton label="Download Resume" to="/" rightIcon="↗" />

      <ThemeSwitch />
    </div>
  );
};

export default Home;
