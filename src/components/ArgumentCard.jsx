import React from 'react'
import styled from 'styled-components';
import elipse from "../assets/elipse.svg";
const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--white-color);
  border-radius: 53px;
  background: #f2f2f2;
  box-shadow: 12px 12px 4px 0px rgba(0, 0, 0, 0.25) inset;
  padding: 0px 32px 24px 32px;
  position: relative;
`;
const ImageContainer = styled.div`
margin-top: 48px;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
max-height:25% ;
margin-bottom: 24px;
`;
const Image = styled.img`
max-width: 100%;
height: 100%;
`;
const Number = styled.div`
position: absolute;
top: -32px;
left: 50%;
width: 64px;
display: flex;
align-items: center;
justify-content: center;
color: var(--white-color);
font-size: 32px;
transform: translate(-50%);
aspect-ratio: 1/1;
background-image: url(${elipse});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
const Title = styled.h3`
color: #000;
font-size: 21px;
font-weight: 600;
margin-bottom: 12px;
`;
const Desc = styled.p`
color: rgba(0, 0, 0, 0.70);
font-size: 17px;
`;
const ArgumentCard = (props) => {
  return (
<Container>
  <Number>{props.number}</Number>
    <ImageContainer  >
    <Image src={props.image} alt={props.title} />
    </ImageContainer>
 <Title>{props.title}</Title>
 <Desc>{props.desc}</Desc>
</Container>
  )
}

export default ArgumentCard
