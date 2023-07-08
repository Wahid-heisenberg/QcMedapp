import React from "react";
import styled from "styled-components";
import { Question1 } from "../components/Question.jsx";
import Clouds from "../assets/clouds.svg";
import Accordination from "../components/Accordination.jsx";
import { mobile } from "../../responsive.js";
const Container = styled.section`
  /* margin-top: 20%; */
  padding: 0% 6%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const QuestionContainer = styled.div`
  width: 100%;
  padding: 0% 15%;
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${Clouds});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  ${mobile({ height:'15vh'})}
`;

const Faq = () => {
  return (
    <Container id="faq">
      <QuestionContainer>
        <Question1 letterSpacing="7.4px" title="FAQ" />
      </QuestionContainer>
      <Accordination
        title="Quelles - sont les methode de payment ?"
        content="On accepte le payment en ligne par : baridi-mob ou par carte visa  et payment main a main sur des point de vente "
      />
      <Accordination
        title="Quelles - sont les sources de questions ?"
        content="Les examen officiele d’externat et de residanat de wilaya d’alger et constantine et bientot Oran et annaba"
      />
      <Accordination
        title="Est ce que il y a specialite medecine-dentaire et pharmacie ? "
        content="Pour le moment Non mais bientot oui"
      />
      <Accordination
        title="Quelle est la source de votre corigee des questions ?"
        content="c’est des des doctors en medecine de different wilaya et la correction est faite selon 3 etapes"
      />
    </Container>
  );
};

export default Faq;
