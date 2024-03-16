import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const SearchReceapItem = ({ receap }) => {
  const URL = "/recipe/" + receap.idMeal;
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`flex-col max-h-[800px] md:flex md:max-h-[256px] md:flex-row ${
        theme ? "bg-white" : "bg-black "
      }`}
    >
      <div>
        <img
          className="w-[800px] max-h-64 object-cover md:min-w-64 md:min-h-64 md:w-64 md:h-64 md:object-contain"
          src={receap.strMealThumb}
          alt=""
        />
      </div>
      <div className="p-5 flex flex-col justify-center">
        <h4
          className={`text-xl min-h-16 ${
            theme ? "text-lime-600" : "text-slate-50 "
          }`}
        >
          {receap.strMeal}
        </h4>
        <div
          className={` pb-3 text-base ${
            theme
              ? "text-black truncated-text"
              : "text-slate-50 truncated-text-dark"
          }`}
        >
          <p>{receap.strInstructions}</p>
        </div>
        <div className="flex gap-5 items-center">
          <Link
            to={URL}
            className={` py-1 px-2 rounded-lg   transition ${
              theme
                ? "bg-lime-600 text-slate-50 hover:bg-lime-700"
                : "bg-zinc-900 text-slate-50 hover:bg-zinc-700"
            }`}
          >
            Ver más
          </Link>
          <a
            href={receap.strYoutube}
            target="__blanck"
            className={` py-1  px-2 rounded-lg  transition ${
              theme
                ? "bg-lime-600 text-slate-50 hover:bg-lime-700"
                : "bg-zinc-900 text-slate-50 hover:bg-zinc-700"
            }`}
          >
            Video with instruccions
          </a>
        </div>
      </div>
    </div>
  );
};

export default SearchReceapItem;
