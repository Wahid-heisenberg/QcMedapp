import React from "react";
import styled from "styled-components";
import FonctionaliteText from "./FonctionaliteText";
import FonctionaliteTitle from "./FonctionaliteTitle";
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Functionalite = (props) => {
  return (
    <Container>
      <FonctionaliteTitle title={props.title} svg={props.svg} />
      <FonctionaliteText
        text={props.text}
        text2={props.text2}
        text3={props.text3}
        title={props.title1}
      />
    </Container>
  );
};

export default Functionalite;
