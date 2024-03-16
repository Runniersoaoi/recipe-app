import Fotter from "../components/Fotter";
import NavBar from "../components/NavBar";
import ReceapToday from "../components/ReceapToday";
import SliderBanner from "../components/SliderBanner";

const Home = () => {
  return (
    <>
      <NavBar />
      <SliderBanner />
      <ReceapToday />
      <Fotter />
    </>
  );
};

export default Home;
