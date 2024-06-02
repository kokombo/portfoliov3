import { ColorButton, Profile, ThemeSwitch } from "@/components";

const NavigationBar = () => {
  return (
    <nav className="w-full px-4 md:px-6 lg:px-24 mt-6 flex items-center justify-between">
      <div />

      <div className="bg-white dark:bg-fadedGray dark:opacity-50 rounded-[50px] py-3 lg:py-4 px-6 lg:px-8 flex items-center justify-between w-full lg:w-1/2">
        <Profile />

        <ColorButton label="Resume" to="" />
      </div>

      <div />

      <ThemeSwitch />
    </nav>
  );
};

export default NavigationBar;
