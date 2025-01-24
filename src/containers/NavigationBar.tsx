"use client";
import { ColorButton, Profile, ThemeSwitch } from "@/components";

const NavigationBar = () => {
  return (
    <header>
      <nav className="relative w-full px-4 md:px-8 lg:px-24 py-6 flex items-center justify-between">
        <div />

        <div className="bg-fadedWhite dark:bg-fadedGray dark:opacity-50 rounded-[50px] py-3 lg:py-4 px-6 lg:px-8 flex items-center justify-between w-full lg:w-1/2">
          <Profile />

          <ColorButton
            label="Resume"
            to="https://drive.google.com/file/d/1yb9n6K34IQdJEHoui6tXxQmcM9I62m1h/view?usp=sharing"
            target="_blank"
          />
        </div>

        <div />

        <div className="absolute top-1/2  right-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <ThemeSwitch />
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;
