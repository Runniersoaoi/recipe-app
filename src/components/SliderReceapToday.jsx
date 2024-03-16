import { getCanadianReceaps } from "../api/getCanadianReceaps";
import ItemReceapToday from "./ItemReceapToday";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const canadianReceaps = await getCanadianReceaps();
console.log(canadianReceaps);

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
  return (
    <Slider {...settings}>
      {canadianReceaps.meals.map((receap) => {
        return <ItemReceapToday key={receap.idMeal} receap={receap} />;
      })}
    </Slider>
  );
};

export default SliderReceapToday;
