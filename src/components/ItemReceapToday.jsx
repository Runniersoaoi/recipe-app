import { ArroyRightCircle } from "./Icons";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ItemReceapToday = ({ receap }) => {
  const { theme } = useContext(ThemeContext);
  const URL = "/recipe/" + receap.idMeal;
  const navigate = useNavigate();
  const handleClickArrow = () => {
    navigate(URL);
  };
  return (
    <div
      className={`flex flex-col items-center min-h-60 p-2 ${
        theme ? "bg-white" : "bg-black"
      }`}
    >
      <img src={receap.strMealThumb} alt="" />
      <div
        className={`flex gap-5  items-center min-h-16 ${
          theme ? "text-lime-700" : "text-slate-50"
        }`}
      >
        <p className="text-lg">{receap.strMeal}</p>
        <button
          onClick={handleClickArrow}
          className={`transition ${
            theme ? "hover:text-green-950 " : "hover:text-green-400 "
          }`}
        >
          <ArroyRightCircle />
        </button>
      </div>
    </div>
  );
};

export default ItemReceapToday;
