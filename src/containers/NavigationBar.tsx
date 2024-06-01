import { ColorButton, ThemeSwitch } from "@/components";

const NavigationBar = () => {
  return (
    <nav className="w-full px-24 flex items-center justify-between">
      <div />

      <div className="bg-white rounded-3xl py-4 px-8 flex items-center justify-between w-1/2">
        <span>Samuel</span>

        <ColorButton label="Resume" to="" />
      </div>

      <div />

      <ThemeSwitch />
    </nav>
  );
};

export default NavigationBar;
