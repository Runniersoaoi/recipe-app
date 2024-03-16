import Container from "./Container";
import OtherRecipesRecomend from "./OtherRecipesRecomend";
import RecipeDetails from "./RecipeDetails";
import RecipeFirstCard from "./RecipeFirstCard";
import Section from "./Section";
import { useParams } from "react-router-dom";
import { getReceapById } from "../api/getReceapById";
import { useState, useEffect } from "react";

const Recipe = () => {
  const [receap, setReceap] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchReceapSearch = async () => {
      const data = await getReceapById(id);
      setReceap(data.meals);
    };

    fetchReceapSearch();
  }, [id]);

  console.log(receap);

  return (
    <Section>
      <Container>
        <RecipeFirstCard receap={receap[0]} />
        <div className="flex flex-col mt-5 gap-5 md:flex md:mt-5 md:gap-5 md:pb-5 md:flex-row">
          <RecipeDetails receap={receap[0]} />
          <OtherRecipesRecomend receap={receap[0]} />
        </div>
      </Container>
    </Section>
  );
};

export default Recipe;
