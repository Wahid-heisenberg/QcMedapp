import React from "react";
import styled from "styled-components";

const Container = styled.input`
  color: var(--white-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 28px 16px 0px;
  border: none;
  background-color: transparent;
  font-size: 24px;
  font-weight: 550;
  border-right:3px solid white ;
  &:hover {
color: var(--secondary-color);
    transition: all ease-in-out 0.3s;
  }
`;

const Container2 = styled.input`
  color: var(--white-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
  border-radius: 24px;
  border: 3px solid var(--white-color);
  background-color: transparent;
  font-size: 24px;
  font-weight: 600;
  &:hover {
    border: 3px solid var(--secondary-color);
    background-color: var(--secondary-color);
    transition: all ease-in-out 0.3s;
  }
`;
const Container3 = styled.input`
  color: var(--white-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 32px;
  border-radius: 32px;
  border: 3px solid var(--fourth-color);
  background-color: var(--fourth-color);
  font-size: 32px;
  font-weight: 500;
  &:hover {
    border: 3px solid var(--third-color);
    background-color: var(--third-color);
    transition: all ease-in-out 0.3s;
  }
`;
const Container4 = styled.input`
  color: var(--fourth-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 40px;
  border-radius: 32px;
  border: 4px solid var(--fourth-color);
  background-color: transparent;
  font-size: 32px;
  font-weight: 540;
  &:hover {
    border: 4px solid var(--fourth-color);
    opacity: 1;
    color: var(--white-color);
    background-color: var(--fourth-color);
    transition: all ease-in-out 0.3s;
  }
`;
function Btn1(props) {
  return <Container type="button" value={props.value} />;
}

function Btn2(props) {
  return <Container2 type="button" value={props.value} />;
}
function Btn3(props) {
  return <Container3 type="button" value={props.value} />;
}
function Btn4(props) {
  return <Container4 type="button" value={props.value} />;
}

export { Btn2, Btn3, Btn4 };
export default Btn1;
