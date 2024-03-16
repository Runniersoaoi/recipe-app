import { getReceaps } from "../api/getReceaps";
import ItemOtherRecipes from "./ItemOtherRecipes";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const OtherRecipesRecomend = () => {
  const { theme } = useContext(ThemeContext);
  const [receaps, setReceaps] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const receapsData = await getReceaps(2);
      setReceaps(receapsData);
    };

    fetchData();
  }, [id]);

  return (
    <>
      <div
        className={`w-full md:w-1/4 ${
          theme ? "bg-white" : "bg-black"
        } flex flex-col p-4 max-h-[750px] overflow-y-auto`}
      >
        <h3
          className={`${
            theme ? " text-lime-700" : "text-slate-50"
          } text-xl pb-3`}
        >
          Other recipes
        </h3>
        <div className="flex md:flex-col">
          {receaps.map((recipe) => {
            return (
              <ItemOtherRecipes receap={recipe} key={recipe.meals[0].idMeal} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default OtherRecipesRecomend;
