import { useTheme } from "next-themes";
import Image from "next/image";
import { ICONS } from "@/constant";
import { useEffect, useState } from "react";

const ThemeSwitch = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (resolvedTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  if (!mounted) return null;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="absolute right-8 top-6"
    >
      <Image
        src={resolvedTheme === "dark" ? ICONS.darkmode : ICONS.lightmode}
        alt="theme mode icon"
        height={20}
        width={20}
        priority
      />
    </button>
  );
};

export default ThemeSwitch;
