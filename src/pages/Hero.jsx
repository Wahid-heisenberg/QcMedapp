import React from "react";
import styled from "styled-components";
import background from "../assets/background.png";
import { Btn3, Btn4 } from "../components/Btn1";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import telegram from "../assets/telegram.svg";
import gmail from "../assets/gmail.svg";
import DescCard from "../components/DescCard";
import img1 from "../assets/img1.svg";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.svg";
import { mobile } from "../../responsive";
const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 102px 132px;
  width: 100%;
  background-image: url(${background});
  /* box-shadow: inset 1020px 1020px 880px rgba(91, 139, 178, 0.5); */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  ${mobile({ padding:'31px'})}
  
`;
const Gradient = styled.div`
  width: 100%;
  background: linear-gradient(
    180deg,
    #5b8bb2 0%,
    rgba(91, 139, 178, 0) 100%
  );
left: 0;
top: 0;
height: 100%;
position: absolute;

`;
const ButtonsContainer = styled.div`
z-index: 7;
  display: flex;
  padding: 28px 32px;
  gap: 24px;
  margin-top: 24px;
  margin-bottom: 96px;
  ${mobile({ flexDirection:'column',padding:'28px 4px'})}
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  position: absolute;
  top: 134px;
  right: 48px;
  ${mobile({  top:'31px',right:'auto',left:'auto'})}
`;

const Link = styled.a`
  font-size: 48px;
  &:hover img {
    filter: grayscale(50%);
    transition: all ease-in-out 0.4s;
  }
`;
const Title = styled.h1`
  width: 65%;
  color: var(--white-color);
  line-height: 112px;
  font-size: 60px;
  font-weight: 600;
  position: relative;
  ${mobile({  fontSize:'31px',lineHeight:'48px',width:' 100%'})}
  /*  */
  & > span {
    color: var(--third-color);
    opacity: 0.8;
  }
  &::after {
    position: absolute;
    content: "";
    background-color: var(--white-color);
    width: 25%;
    height: 8px;
    bottom: 0px;
    left: 0px;
  }
`;
const Title1 = styled.h1`
  width: 65%;
  color: var(--white-color);
  line-height:76px;
  font-size: 60px;
  font-weight: 600;
  position: relative;
  ${mobile({  fontSize:'43px',lineHeight:'43px',marginTop:'76px',width:' 100%'})}

`;
const Desc = styled.h3`
  margin-top: 32px;
  line-height: 48px;
  color: var(--white-color);
  width: 55%;
  font-size: 28px;
  font-weight: 530;
  z-index: 7;
  ${mobile({width:' 100%'})}
`;
const CardsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 0px 148px;
  width: 100%;
  position: absolute;
top: 100%;
  left: 50%;
  transform: translate(-50%,-50%);
  & > * {
    flex: 1;
    width: 100%;
    height: 100%;
  }
  ${mobile({  padding:' 0px 31px',flexDirection:'column',top:'239vh'})}
`;

const DescCards = [
  {
    id: 1,
    bg: "fff",
    textcolor: "3C3C3C",
    titlecolor: "000",
    image: img1,
    desc: "Restez branchee avec notre plateforme et avez l’exlusitivite des derniers sujets d’examen de differents niveaux .",
    title: "Mis a jour mensuelle",
  },
  {
    id: 2,
    bg: "5B8BB2",
    textcolor: "fff",
    titlecolor: "fff",
    image: img2,
    desc: "Lorem ipsum dolor it amet,  dolor sit amet, consectetur adipiscing enean viverra, enim at lacinia .",
    title: "PC, Tablette et Smartphone",
  },
  {
    id: 3,
    bg: "fff",
    textcolor: "3C3C3C",
    titlecolor: "000",
    image: img3,
    desc: "Les cours sont classes selon le module , la specialite et l’annee de scolarite dans une structure très claire .",
    title: "Cours bien structure",
  },
];
function Hero() {
  return (
    
    <Container id="hero">
    <Gradient/>
      <IconsContainer>
        <Link href="">
          <img src={instagram} alt="insta" />
        </Link>
        <Link href="">
          <img src={facebook} alt="facebook" />
        </Link>
        <Link href="">
          <img src={telegram} alt="telegram" />
        </Link>
        <Link href="">
          <img src={gmail} alt="gmail" />
        </Link>
      </IconsContainer>
      <Title1>
        ASSURER VOTRE 
      </Title1>
      <Title>
      CURSUS AVEC <span>QcMed</span>
      </Title>
      <Desc>
        Innovante plateforme d'apprentissage conçue spécialement pour les
        étudiants en sciences médicales avec +100 k questions : QCM , QROC.
      </Desc>
      <Desc>Multi-Wilaya : Alger - Constantine...</Desc>
      <ButtonsContainer>
        <Btn3 value="Créer un compte" />
        <Btn4 value="Essai gratuit" />
      </ButtonsContainer>
      <CardsContainer>
        {DescCards.map((card) => (
          <DescCard
            key={card.id}
            image={card.image}
            titlecolor={card.titlecolor}
            title={card.title}
            desc={card.desc}
            textcolor={card.textcolor}
            bg={card.bg}
          />
        ))}
      </CardsContainer>
    </Container>
    
  );
}

export default Hero;
