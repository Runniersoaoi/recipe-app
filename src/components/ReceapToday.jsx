import { ThemeContext } from "../context/ThemeContext";
import Container from "./Container";
import Section from "./Section";
import SliderReceapToday from "./SliderReceapToday";
import { useContext } from "react";

const ReceapToday = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Section>
      <Container>
        <h2
          className={` text-2xl font-semibold py-5 ${
            theme ? "text-lime-600" : "text-slate-50"
          }`}
        >
          The best of canadian food
        </h2>
        <SliderReceapToday />
      </Container>
    </Section>
  );
};

export default ReceapToday;
