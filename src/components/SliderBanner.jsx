import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { getReceaps } from "../api/getReceaps.js";
import Section from "./Section.jsx";
import Container from "./Container.jsx";
import ItemSliderBanner from "./ItemSliderBanner.jsx";

const receapsRandom = await getReceaps();

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
  return (
    <Section>
      <Container>
        <div>
          <Slider {...settings}>
            {receapsRandom.map((receap) => (
              <ItemSliderBanner key={receap.meals[0].idMeal} receap={receap} />
            ))}
          </Slider>
        </div>
      </Container>
    </Section>
  );
};

export default SliderBanner;
