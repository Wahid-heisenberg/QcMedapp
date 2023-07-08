import React from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
  padding: 48px 24px;
  ${mobile({padding:'31px 14px',fontSize:'22px'})}
`;
const Title = styled.h3`
  color: #000;
  font-size: 24px;
  ${mobile({fontSize:'22px'})}
  font-weight: 600;
  letter-spacing: 1.575px;
`;
const Text = styled.h3`
  color: #000;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 1.575px;
  ${mobile({fontSize:'22px'})}
`;
const FonctionaliteText = (props) => {
  return (
    <Container>
      <Title>{props.title}</Title>
     { props.text3 && <Text style={{ color: "red" }}>{props.text3}</Text>}
      <Text>{props.text}</Text>
      <Text>{props.text2}</Text>
    </Container>
  );
};

export default FonctionaliteText;
