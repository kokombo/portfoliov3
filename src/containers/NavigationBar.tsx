import { ColorButton, Profile, ThemeSwitch } from "@/components";

const NavigationBar = () => {
  return (
    <nav className="relative w-full px-4 md:px-6 lg:px-24 py-6 flex items-center justify-between">
      <div />

      <div className="bg-white dark:bg-fadedGray dark:opacity-50 rounded-[50px] py-3 lg:py-4 px-6 lg:px-8 flex items-center justify-between w-full lg:w-1/2">
        <Profile />

        <ColorButton label="Resume" to="" />
      </div>

      <div />

      <div className="absolute top-1/2 right-4 lg:right-8 transform -translate-x-1/2 -translate-y-1/2">
        <ThemeSwitch />
      </div>
    </nav>
  );
};

export default NavigationBar;
