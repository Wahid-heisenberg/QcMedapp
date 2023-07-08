import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/logosvg.svg";
import { ReactComponent as Telegram } from "../assets/footer-telegram.svg";
import { ReactComponent as Instagram } from "../assets/footer-insta.svg";
import { ReactComponent as Facebook } from "../assets/footer-fb.svg";
import { ReactComponent as PhoneIcon } from "../assets/phone.svg";
import { ReactComponent as GmailIcon } from "../assets/gmailicon.svg";
import { mobile } from "../../responsive";
const Container = styled.footer`
  margin-top: 20%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--grey-3);
`;
const LogoContainer = styled.div`
  margin: 58px;
  display: flex;
  flex-direction: row;
  gap: 32px;
  align-items: center;
  justify-content: center;
  ${mobile({
flexDirection:  "column",gap:"18px"
  })}
`;
const Title = styled.h1`
  color: var(--white-color);
  font-size: 48px;
  font-weight: 700;
  letter-spacing: 14.85px;
`;
const IconsContainer = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-direction: row;
  gap: 82px;
  margin-bottom: 58px;
  ${mobile({
flexDirection:  "column",gap:"18px"
  })}
`;
const IconContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  background-color: #646464;
`;
const Contact = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 0px 90px;
  color: #ddd;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 4.73px;
  margin-bottom: 32px;
`;
const LeftContact = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;
const RightContact = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;
const Footerline = styled.hr`
width: 100%;
height: 3px;
background-color: #CCC;
`;
const CopyRight = styled.h2`
align-self: center;
text-align: center;
margin: 12px;
color: #DDD;
font-size: 28px;
font-weight: 500;
letter-spacing: 2px;
`;
const Footer = () => {
  return (
    <Container>
      <LogoContainer>
        <Logo />
        <Title>QcMed</Title>
      </LogoContainer>
      <IconsContainer>
        <IconContainer>
          <Facebook />
        </IconContainer>
        <IconContainer>
          <Instagram />
        </IconContainer>
        <Telegram />
      </IconsContainer>
      <Contact>
        <LeftContact>
          <PhoneIcon />
          <span>0542788740 Numero de Ahmed</span>
        </LeftContact>
        <RightContact>
          <GmailIcon />
          <span>qcmed.contact@gmail.com</span>
        </RightContact>
      </Contact>
      <Footerline/>
      <CopyRight>Copyrights 2023 , all rights is reserved</CopyRight>
    </Container>
  );
};

export default Footer;
