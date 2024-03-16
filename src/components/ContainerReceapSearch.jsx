import React, { useState, useEffect } from "react";
import Container from "./Container";
import SearchReceapItem from "./SearchReceapItem";
import Section from "./Section";
import { useParams } from "react-router-dom";
import { getReceapSearch } from "../api/getReceapSearch";

const ContainerReceapSearch = () => {
  const [receapSearchs, setReceapSearchs] = useState([]);
  const { i } = useParams();

  useEffect(() => {
    const fetchReceapSearch = async () => {
      const data = await getReceapSearch(i);
      setReceapSearchs(data.meals);
    };

    fetchReceapSearch();
  }, [i]);

  if (receapSearchs) {
    if (receapSearchs.length === 0) {
      return (
        <Section>
          <Container>
            <div>Cargando...</div>
          </Container>
        </Section>
      );
    }
  }

  return (
    <Section>
      <Container>
        <div className="flex flex-col gap-5 ">
          {receapSearchs ? (
            receapSearchs.map((receap) => (
              <SearchReceapItem key={receap.idMeal} receap={receap} />
            ))
          ) : (
            <div className="flex text-center w-full h-96 m-auto justify-center items-center">
              <p className="text-lime-700 text-3xl">No recipes found</p>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
};

export default ContainerReceapSearch;
