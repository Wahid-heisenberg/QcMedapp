import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  background-color: #${(props) => props.bg};
  box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.25);
  padding: 24px;
  gap: 16px;
`;
const Image = styled.img`
  height: 50px;
  align-self: baseline;
  aspect-ratio: 3/1;
`;
const Title = styled.h2`
  color: #${(props) => props.titlecolor};
  font-size: 28px;
  font-weight: 600;
`;
const Desc = styled.p`
  color: #${(props) => props.textcolor};
  font-size: 24px;
`;
function DescCard(props) {
  return (
    <Container bg={props.bg}   >
      <Image src={props.image} />
      <Title titlecolor={props.titlecolor}>{props.title}</Title>
      <Desc textcolor={props.textcolor}>{props.desc}</Desc>
    </Container>
  );
}

export default DescCard;
