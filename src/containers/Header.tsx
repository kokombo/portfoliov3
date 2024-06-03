import NavigationBar from "./NavigationBar";
import Hero from "./Hero";
import { twMerge } from "tailwind-merge";
import { useTheme } from "next-themes";

const Header = () => {
  const { theme } = useTheme();

  return (
    <header
      className={twMerge(
        theme === "light"
          ? "bg-[url('/assets/images/herobackgroundlight.png')]"
          : " bg-[url('/assets/images/herobackgrounddark.png')]",
        "bg-no-repeat bg-center bg-cover bg-[#FFFFFF] dark:bg-[#000000]"
      )}
    >
      <NavigationBar />

      <Hero />
    </header>
  );
};

export default Header;
