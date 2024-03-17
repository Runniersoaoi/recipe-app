import { getCanadianReceaps } from "../api/getCanadianReceaps";
import ItemReceapToday from "./ItemReceapToday";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { useState, useEffect } from "react";

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 7,
  slidesToScroll: 2,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 5000,
  cssEase: "linear",
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const SliderReceapToday = () => {
  const [recipeCanadian, setRecipeCanadian] = useState([]);

  useEffect(() => {
    const fetchReceaps = async () => {
      try {
        const receaps = await getCanadianReceaps();
        setRecipeCanadian(receaps);
      } catch (error) {
        console.error("Error fetching receaps:", error);
      }
    };

    fetchReceaps();
  }, []);
  return (
    <div>
      {recipeCanadian.length !== 0 ? (
        <Slider {...settings}>
          {recipeCanadian.meals.map((receap) => (
            <ItemReceapToday key={receap.idMeal} receap={receap} />
          ))}
        </Slider>
      ) : (
        <div>Cargando</div>
      )}
    </div>
  );
};

export default SliderReceapToday;
