import React, { useState } from "react";
import styled from "styled-components";
import {ReactComponent as  AccordinationClose } from  "../assets/accordination-close.svg"
import {ReactComponent as  AccordinationOpen  } from  "../assets/accordination-open.svg"
import { mobile } from "../../responsive";
const Container = styled.div`
  width: 100%;
  &:nth-child(2){
  margin-top: 32px;
  }
`;
const Title = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 16px;
  border: 5px solid var(--white-color);
  background-color: var(--fourth-color);
  color: #000;
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 2.25px;
  padding: 24px 48px 24px 64px;
  ${mobile({fontSize:'24px',padding:'14px 38px 14px 48px'})}
`;
const Content = styled.div`
  border-radius: 17px;
  background: rgba(91, 139, 178, 0.7);
  width: 100%;
  color: #000;
  font-size: 32px;
  padding: 58px;
  font-weight: 500;
  margin-bottom: 16px;
  letter-spacing: 2.25px;
  ${mobile({fontSize:'24px',padding:'36px'})}
`;

const Accordination = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Container>
      <Title onClick={toggleAccordion}>{props.title} {isOpen ? <AccordinationClose/> : <AccordinationOpen/>}</Title>
      {isOpen && <Content>{props.content}</Content>}
    </Container>
  );
};

export default Accordination;
