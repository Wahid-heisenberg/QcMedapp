import React from "react";
import styled from "styled-components";
import "../index.css";
import logo from "../assets/logo.png";
import Btn1 from "./Btn1";
import { Btn2 } from "./Btn1";
import { mobile } from "../../responsive"

const Container = styled.nav`
  color: var(--white-color);
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  padding: 0px 56px;
  width: 100%;
  background-color: var(--primary-color);
  border: none;
  border-bottom: 0.5px solid rgba(235, 223, 223, 0.552);
  box-shadow: 0px 2px 4px 0px rgba(255, 255, 255, 0.25);
  ${mobile({flexDirection:'column',padding:'0px 16px'})}
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 24px 0px;
  ${mobile({justifyContent:'flex-start',padding:'16px 0px'})}
`;
const Middle = styled.ul`
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 32px;
  ${mobile({flexDirection:'column'})}
`;
const LinkContainer = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &:hover {
    &::after {
      content: "";
      position: absolute;
      height: 4px;
      width: 100%;
      background-color: var(--secondary-color);
      bottom: -1px;
    }
  }
  &:hover > * {
    color: var(--secondary-color); /* Change the color of the Link */
  }
`;

const Link = styled.a`
display: flex;
align-items: center;
justify-content: center;
  font-size: 24px;
  font-weight: 550;
  height: 100%;
  color: var(--white-color);
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  ${mobile({display:'none'})}
`;
const Title = styled.span`
  ${mobile({fontSize:'20px'})}
  font-size: 28px;
  font-weight: 700;
`;
const Image = styled.img`
  ${mobile({width:'48px'})}
`;
function Navbar() {
  return (
    <Container>
      <Left>
        <Image src={logo} alt="logo" />
        <Title>QcMed</Title>
      </Left>
      <Middle>
        <LinkContainer>
          <Link href="#why">Pourquoi QcMed</Link>
        </LinkContainer>

        <LinkContainer>
          <Link href="#functionalities">Fonctionnalités</Link>
        </LinkContainer>

        <LinkContainer>
          <Link href="#offers">Offres</Link>
        </LinkContainer>

        <LinkContainer>
          <Link href="#faq">FAQ</Link>
        </LinkContainer>
      </Middle>
      <Right>
        <Btn1 value="Creer un compte" />
        <Btn2 value="Connexion" />
      </Right>
    </Container>
  );
}

export default Navbar;
