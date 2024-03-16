import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Fotter = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <footer
      className={`w-full flex justify-center items-center mt-10 h-[40px] ${
        theme ? "bg-lime-600 text-slate-50" : "bg-black text-slate-50"
      }`}
    >
      <div>Made with ❤️ by zmac, using TheMealDb API</div>
    </footer>
  );
};

export default Fotter;
