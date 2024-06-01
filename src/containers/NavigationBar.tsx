import { ColorButton, ThemeSwitch } from "@/components";
import { ICONS } from "@/constant";
import Image from "next/image";

const NavigationBar = () => {
  return (
    <nav className="w-full px-24 mt-6 flex items-center justify-between">
      <div />

      <div className="bg-white dark:bg-fadedGray dark:opacity-50 rounded-[50px] py-4 px-8 flex items-center justify-between w-1/2">
        <span className="flex items-center gap-4">
          <Image
            src={ICONS.samuel}
            alt="profile image"
            priority
            quality={100}
            height={48}
            width={48}
            className="rounded-100"
          />

          <h5 className="text-black dark:text-white text-lg font-medium">
            Samuel
          </h5>
        </span>

        <ColorButton label="Resume" to="" />
      </div>

      <div />

      <ThemeSwitch />
    </nav>
  );
};

export default NavigationBar;
