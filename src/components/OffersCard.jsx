import React from "react";
import styled from "styled-components";
import { ReactComponent as Information } from "../assets/information.svg";
const Container = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--white-color);
  border-radius: 23px;
  box-shadow: 7px 8px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 24px 12px;
`;
const Header = styled.h3`
  color: rgba(34, 34, 33, 0.7);
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 1.65px;
  margin-bottom: 4px;
`;
const Title = styled.h2`
  color: #222221;
  font-size: 28px;
  font-weight: 500;
  letter-spacing: 1.875px;
  margin-bottom: 24px;
`;
const Price = styled.h1`
  color: #222221;
  font-size: 32px;
  font-weight: 500;
  letter-spacing: 2.1px;
  margin-bottom: 24px;
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;
const Image = styled.img`
  width: fit-content;
`;
const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0px 16px;
  gap: 16px;
  justify-content: space-between;
  > * {
    width: 100%;
  }
`;
const StartButton = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white-color);
  background-color: var(--fourth-color);
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 1.275px;
  border: none;
  padding: 8px;
  border-radius: 9px;
`;
const InformationButton = styled.button`
  border-radius: 9px;
  font-size: 20px;
  display: flex;
  border: none;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  background-color: var(--white-color);
  padding:  8px;
 
`;
const OffersCard = (props) => {
  return (
    <Container>
      <Header>{props.header}</Header>
      <Title>{props.title}</Title>
      <ImageContainer margin={props.margin}>
        <Image src={props.image} alt={props.title} />
      </ImageContainer>
      <Price>{props.price}</Price>
      <ButtonsContainer>
        <StartButton type="button" value={props.button} />
        <InformationButton>
          <Information /> <span>S'avoir plus </span>
        </InformationButton>
      </ButtonsContainer>
    </Container>
  );
};

export default OffersCard;
