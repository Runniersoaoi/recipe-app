import { ArroyRightCircle } from "./Icons";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ItemOtherRecipes = ({ receap }) => {
  const { theme } = useContext(ThemeContext);
  const URL = "/recipe/" + receap.meals[0].idMeal;
  const navigate = useNavigate();
  const handleClickArrow = () => {
    navigate(URL);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div
      className={`flex flex-col items-center  ${
        theme ? "bg-white" : "bg-black"
      } min-h-60 p-2`}
    >
      <img src={receap.meals[0].strMealThumb} alt="" />
      <div
        className={`flex gap-5 ${
          theme ? " text-lime-700" : "text-slate-50"
        } items-center min-h-16`}
      >
        <p className="text-lg">{receap.meals[0].strMeal}</p>
        <button
          onClick={handleClickArrow}
          className={`${
            theme ? "hover:text-green-950 " : "hover:text-green-400 "
          } transition`}
        >
          <ArroyRightCircle />
        </button>
      </div>
    </div>
  );
};

export default ItemOtherRecipes;
