import React from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";
const Questin = styled.h1`
  color: var(--grey-3);
  font-size: 64px;
  font-weight: 600;
  ${mobile({  fontSize:'31px'})}
  display: flex;
  justify-content: center;
  gap: 8px;
  position: relative;
  align-self: center;
  &::after {
    content: "";
    height: 8px;
    width: 55%;
    position: absolute;
    background-color: var(--grey-3);
    top: 76px;
    ${mobile({top:'48px'})}
    left: -10%;
  }
`;
const Title = styled.h1`
  color: var(--grey-3);
  font-size: 64px;
  ${mobile({  fontSize:'31px'})}
  font-weight: 600;
align-self: center;
letter-spacing:${(props) => props.letterSpacing};
`;
const Question1 = (props) => {
  return <Title letterSpacing={props.letterSpacing}>{props.title} </Title>;
};
const Question = (props) => {
  return (
    <Questin>
      {props.question} {props.image && <img height="72px" src={props.image} />}
    </Questin>
  );
};
export { Question1 };
export default Question;
