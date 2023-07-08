import React from "react";
import styled from "styled-components";
import { Question1 } from "../components/Question";
import OffersCard from "../components/OffersCard";
import free from "../assets/free.svg";
import twofingers from "../assets/twofingers.svg";
import students1 from "../assets/students1.svg";
import students2 from "../assets/students2.svg";
import finger from "../assets/finger.svg";
import bg from "../assets/bg2.svg";
import { ReactComponent as Offersline } from "../assets/offersline.svg";
import  Twoelipses from "../assets/twoelipses.svg";
import { mobile } from "../../responsive";
const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  z-index: 1;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  position: relative;
  transform: translateY(-80vh);
  &::after {
    position: absolute;
    bottom:-14%;
    left: 0%;
    content: "";
    background: url(${Twoelipses}) ;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height:50% ;
    z-index: -1;
  }
`;


const TitleContainer = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 15vh;
  margin-top: 135vh;
`;
const OffersCardsContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 48px;
  grid-row-gap: 64px;
  padding: 32px 112px;
  margin-bottom: 20vh;
  & > * {
    flex: 1;
    width: 100%;
    height: 100%;
  }
  ${mobile({  gridTemplateColumns:'repeat(1, 1fr)',padding:'16px 16px',gridColumnGap:'31px',gridRowGap:'48px'})}
`;
const OffersCards = [
  {
    id: 1,
    image: free,
    header: "Bi-wilaya",
    title: "Pack d’essai gratuit",
    price: "0 DA",
    button: "Commencer",
  },
  {
    id: 2,
    image: twofingers,
    header: "Bi-wilaya",
    title: "Residanat 2024",
    price: "4000 DA",
    button: "S’inscrire",
  },
  {
    id: 3,
    image: finger,
    header: "Uni-wilaya",
    title: "Residanat 2024",
    price: "3000 DA",
    button: "S’inscrire",
  },
  {
    id: 4,
    image: students1,
    header: "Bi-wilaya",
    title: "1  jusqu’a 6 éme année",
    price: "1700 DA",
    button: "S’inscrire",
  },
  {
    id: 5,
    image: students2,
    header: "Uni-wilaya",
    title: "1  jusqu’a 6 éme année",
    price: "1300 DA",
    button: "S’inscrire",
  },
];

const Offers = () => {
  return (
    <Container id="offers">
      <TitleContainer>
        <Question1 title="Offres" />
        <Offersline />
      </TitleContainer>
      <OffersCardsContainer>
        {OffersCards.map((card) => (
          <OffersCard
            key={card.id}
            image={card.image}
            title={card.title}
            header={card.header}
            button={card.button}
            price={card.price}
          />
        ))}
      </OffersCardsContainer>

    </Container>
  );
};

export default Offers;
