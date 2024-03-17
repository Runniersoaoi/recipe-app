import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { getReceaps } from "../api/getReceaps.js";
import Section from "./Section.jsx";
import Container from "./Container.jsx";
import ItemSliderBanner from "./ItemSliderBanner.jsx";
import { useState, useEffect } from "react";

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 10000,
  cssEase: "linear",
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const SliderBanner = () => {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    const fetchReceaps = async () => {
      try {
        const receaps = await getReceaps();
        setRecipe(receaps);
      } catch (error) {
        console.error("Error fetching receaps:", error);
      }
    };

    fetchReceaps();
  }, []);

  return (
    <Section>
      <Container>
        <div>
          {recipe.length !== 0 ? (
            <Slider {...settings}>
              {recipe.map((receap) => (
                <ItemSliderBanner
                  key={receap.meals[0].idMeal}
                  receap={receap}
                />
              ))}
            </Slider>
          ) : (
            <div>Cargando... </div>
          )}
        </div>
      </Container>
    </Section>
  );
};

export default SliderBanner;
