import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ReceapDetails = ({ receap }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      {receap ? (
        <div
          className={`w-full px-10 py-3 md:w-3/4 ${
            theme ? "bg-white" : "bg-black"
          }`}
        >
          <div>
            <h3
              className={`text-xl ${
                theme ? " text-lime-700" : "text-slate-50"
              } py-2`}
            >
              Ingredients
            </h3>
            <ul
              className={`list-disc pl-5 ${
                theme ? "text-black" : "text-slate-50"
              }`}
            >
              <li>
                {receap.strIngredient1}{" "}
                <p
                  className={` ${
                    theme ? "text-lime-700" : "text-lime-400"
                  } inline`}
                >
                  Amount:{" "}
                </p>
                {receap.strMeasure1}
              </li>
              <li>
                {receap.strIngredient2}{" "}
                <p
                  className={`${
                    theme ? "text-lime-700" : "text-lime-400"
                  } inline`}
                >
                  Amount:{" "}
                </p>
                {receap.strMeasure2}
              </li>
              <li>
                {receap.strIngredient3}{" "}
                <p
                  className={`${
                    theme ? "text-lime-700" : "text-lime-400"
                  } inline`}
                >
                  Amount:{" "}
                </p>
                {receap.strMeasure3}
              </li>
              <li>
                {receap.strIngredient4}{" "}
                <p
                  className={`${
                    theme ? "text-lime-700" : "text-lime-400"
                  } inline`}
                >
                  Amount:{" "}
                </p>
                {receap.strMeasure4}
              </li>
              <li>
                {receap.strIngredient5}
                <p
                  className={`${
                    theme ? "text-lime-700" : "text-lime-400"
                  } inline`}
                >
                  Amount:{" "}
                </p>{" "}
                {receap.strMeasure5}
              </li>
              <li>
                {receap.strIngredient6}{" "}
                <p
                  className={`${
                    theme ? "text-lime-700" : "text-lime-400"
                  } inline`}
                >
                  Amount:{" "}
                </p>
                {receap.strMeasure6}
              </li>
              <li>
                {receap.strIngredient7}{" "}
                <p
                  className={`${
                    theme ? "text-lime-700" : "text-lime-400"
                  } inline`}
                >
                  Amount:{" "}
                </p>
                {receap.strMeasure7}
              </li>
              <li>
                {receap.strIngredient8}{" "}
                <p
                  className={`${
                    theme ? "text-lime-700" : "text-lime-400"
                  } inline`}
                >
                  Amount:{" "}
                </p>
                {receap.strMeasure8}
              </li>
              <li>
                {receap.strIngredient9}{" "}
                <p
                  className={`${
                    theme ? "text-lime-700" : "text-lime-400"
                  } inline`}
                >
                  Amount:{" "}
                </p>
                {receap.strMeasure9}
              </li>
            </ul>
          </div>
          <div>
            <h3
              className={`text-xl  ${
                theme ? "text-lime-700" : "text-slate-50"
              } py-2`}
            >
              Preparation
            </h3>
            <p className={` ${theme ? " text-black" : "text-slate-50"}`}>
              {receap.strInstructions}
            </p>
          </div>
          <div className="flex items-center justify-center p-5 gap-5 flex-col md:flex-row">
            <h3
              className={`text-2xl ${
                theme ? " text-lime-700" : "text-slate-50"
              } py-2 text-center font-semibold`}
            >
              Video with instructions
            </h3>
            {receap.strYoutube ? (
              <iframe
                className="w-full min-h-52"
                src={`https://www.youtube.com/embed/${
                  receap.strYoutube.split("v=")[1]
                }`}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            ) : (
              <div
                className={`text-2xl ${
                  theme ? " text-lime-700" : "text-slate-50"
                } py-2 text-center font-semibold`}
              >
                Video not found
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>Cargando... </div>
      )}
    </>
  );
};

export default ReceapDetails;
