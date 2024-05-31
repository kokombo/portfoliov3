import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <button type="button" onClick={toggleTheme}>
      {theme === "light" ? (
        <MdOutlineLightMode color="#9C7BC3" height={30} width={30} />
      ) : (
        <MdOutlineDarkMode color="#F8F8F8" height={30} width={30} />
      )}
    </button>
  );
};

export default ThemeSwitch;
