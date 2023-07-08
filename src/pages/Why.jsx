import React from "react";
import styled from "styled-components";
import Question from "../components/Question";
import question from "../assets/question.svg";
import { ReactComponent as Student } from "../assets/photo5.svg";
import ArgumentCard from "../components/ArgumentCard";
import wilayas from "../assets/wilayas.png";
import error from "../assets/error.png";
import comments from "../assets/comments.png";
import collaboration from "../assets/collaboration.png";
import doctor from "../assets/doctor.png";
import exams from "../assets/exams.png";
import saturday from "../assets/saturday.png";
import service24 from "../assets/service24.png";
import vontre from "../assets/vontre.png";
import { ReactComponent as Line } from "../assets/line.svg";
import { mobile } from "../../responsive";
const Container = styled.section`
  padding-top: 248px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${mobile({marginTop:'135vh'})}
`;
const Argument = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 48px;
  padding: 0px 112px;
  ${mobile({padding:'0px 32px',flexDirection:'column'})}
`;
const Text = styled.h2`
  color: rgba(51, 51, 51, 0.8);
  font-size: 28px;
  font-weight: 600;
  ${mobile({fontSize:'18px'})}
`;
const Text2 = styled.span`
  font-size: 28px;
  ${mobile({fontSize:'18px'})}
  color: #222221;
  font-weight: 600;
  margin-top: 64px;
  display: block;
`;
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 32px;
  grid-row-gap: 64px;
  padding:  64px ;
  background-image: url(${vontre});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  & > * {
    flex: 1;
    width: 100%;
    height: 100%;
  }
  ${mobile({  gridTemplateColumns:'repeat(1, 1fr)',padding:'46px 16px'})}
`;

const SvhgContainer = styled.div`
  border-radius: 50%;
  transform: scale(1.6);
  width: 100%;
  z-index: 3; /* Adjusted z-index */
`;
const LineContainer = styled.div`
  width: 100%;
  z-index: 3; /* Adjusted z-index */
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ArgCards = [
  {
    id: 1,
    image: wilayas,
    desc: "Nous vous offrons l’acces aux question et examens des differents wilaya aux meme temps avec un seuls click",
    title: "Multi-wilaya",
  },
  {
    id: 2,
    image: error,
    desc: "On vous propose une platforme sans bug aux contraire des autres platformes et une resistance aux grands nombres des utilisateurs en ligne",
    title: "No bug",
  },
  {
    id: 3,
    image: comments,
    desc: "En cas d'erreur, nous fournissons des réponses expliquées, des liens vers des documentations et des vidéo explicatives.",
    title: "Le system de comentaires",
 
  },
  {
    id: 4,
    image: collaboration,
    desc: "Collaboration avec des Doctors en medecine de differents willayas pour corrigee les differrents questions ",
    title: "Collaboration avec +20 doctors",
  },
  {
    id: 5,
    image: doctor,
    desc: "on vous offre les conseils des majorants et des residants et leurs experience dans leurs cursus",
    title: "Les conseils des lauréates",

    

  },
  {
    id: 6,
    image: exams,
    desc: "QcMed contient les Examen des externats des trois dernieres annes, Plus les sujets de ratrapage  et tous les drives de tous les niveaux",
    title: "Examen d’externat disponible",
  },
  {
    id: 7,
    image: saturday,
    desc: "Tous les cours des samedi pedagogique sont - disponible",
    title: "Samedi Pedagogique",

  },
  {
    id: 8,
    image: service24,
    desc: "Notre platforme  travaille 24 heures et 7 jours durant la semaine",
    title: "24/24 service",
  },
];

const Why = () => {
  return (
    <Container id="why">
      <Question question="Pourquoi QcMed" image={question} />
      <Argument>
        <SvhgContainer>
          <Student />
        </SvhgContainer>

        <Text>
          L’equipe developante de Qcmed a etudie tous les cas possibles et les
          caracteristiques extraites qui devraient etre dans notre platforme et
          les erreur qui devraient etre evitee
          <Text2>Et les avantages de notre platforme sont :</Text2>
        </Text>
      </Argument>
      <CardsContainer>
        {ArgCards.map((card) => (
          <ArgumentCard
            key={card.id}
            image={card.image}
            title={card.title}
            desc={card.desc}
            // margin={card.margin}
            width={card.width}
            number={card.id}
          />
        ))}
      </CardsContainer>
<LineContainer>

<Line />
</LineContainer>
    
    </Container>
  );
};

export default Why;
