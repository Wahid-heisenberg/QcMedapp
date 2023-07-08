import React from "react";
import styled from "styled-components";
// import { ReactComponent as Line } from "../assets/functionaliteline1.svg";
import { mobile } from "../../responsive";
const Container = styled.div`
  width: 100%;
  position: relative;
`;
const Title = styled.h1`
  position: absolute;
  color: #406e95;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 2.25px;
  left: 88px;
  bottom: 60px;
  ${mobile({  fontSize:'16px'})}
`;
const FonctionaliteTitle = (props) => {
  return (
    <Container>
      <Title>{props.title}</Title>
      {props.svg}
    </Container>
  );
};

export default FonctionaliteTitle;
