import { LuAlarmClock } from "react-icons/lu";
import { BiCategoryAlt } from "react-icons/bi";
import { BiHappyBeaming } from "react-icons/bi";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ReceapFirstCard = ({ receap }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      {receap ? (
        <div
          className={`flex-col max-h-[800px] md:flex md:max-h-[256px] md:flex-row ${
            theme ? "bg-white" : "bg-black"
          }`}
        >
          <img
            src={receap.strMealThumb}
            alt=""
            className="w-[800px] max-h-64 object-cover md:min-w-64 md:min-h-64 md:w-64 md:h-64 md:object-contain"
          />
          <div className="flex flex-col gap-5 p-5 justify-center">
            <h2
              className={`text-3xl font-semibold ${
                theme ? "text-lime-700" : "text-slate-50"
              } `}
            >
              {receap.strMeal.toUpperCase()}
            </h2>
            <div className="flex items-center gap-8 text-lg">
              <div
                className={`${
                  theme ? "text-lime-700" : "text-slate-50"
                } flex items-center gap-1`}
              >
                <LuAlarmClock /> 2h
              </div>
              <div
                className={`${
                  theme ? "text-lime-700" : "text-slate-50"
                } flex items-center gap-1`}
              >
                <BiCategoryAlt /> {receap.strCategory}
              </div>
              <div
                className={`${
                  theme ? "text-lime-700" : "text-slate-50"
                } flex items-center gap-1`}
              >
                <BiHappyBeaming /> Difficulty
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Cargando...</div>
      )}
    </>
  );
};

export default ReceapFirstCard;
