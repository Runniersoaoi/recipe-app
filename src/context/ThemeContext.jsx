import { createContext } from "react";
import { useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(true);

  const handleTheme = () => {
    if (theme === true) {
      setTheme(false);
    } else {
      setTheme(true);
    }
  };

  const data = { theme, handleTheme };
  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
