import { IconSun } from "./Icons";
import { useContext } from "react";
import { MoonIcon } from "./Icons";
import { ThemeContext } from "../context/ThemeContext";

const ThemeButton = () => {
  const { theme, handleTheme } = useContext(ThemeContext);

  return (
    <button
      className={`${
        theme
          ? "hover:text-green-950 transition"
          : "hover:text-green-400 transition"
      }`}
      onClick={handleTheme}
    >
      {theme ? <MoonIcon /> : <IconSun />}
    </button>
  );
};

export default ThemeButton;
