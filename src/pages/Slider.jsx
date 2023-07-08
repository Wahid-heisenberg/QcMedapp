import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as LeftArrow } from "../assets/arrow-left.svg";
import { ReactComponent as RightArrow } from "../assets/arrowright.svg";
import face1 from "../assets/face1.png";
import face2 from "../assets/face2.png";
import face3 from "../assets/face3.png";
import face4 from "../assets/face4.png";
import face5 from "../assets/face5.png";
import { mobile } from "../../responsive";
const Container = styled.section`
  margin-top: 15vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--fivth-color);
  padding: 24px 74px;
  ${mobile({
    padding: "24px 4px",
  })}
`;
const Title = styled.h1`
  color: #222221;
  font-size: 42px;
  font-weight: 600;
  ${mobile({
    fontSize: "28px",
  })}
`;

const CommentsTop = styled.div`
  margin: 54px 0px;
  position: relative;
  padding: 58px 134px;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;

  & > div {
    width: 100%;
    height: 100%;
    transform: scale(0.8);
    opacity: 0.6;
    ${mobile({ transform: "scale(1)" })}
  }
  & .active {
    transform: scale(1.2);
    ${mobile({ transform: "scale(1.7)" })}
    margin: 0px 32px;
    opacity: 1;
  }
  ${mobile({
    padding: "24px 0px",
  })}
`;
const Comment = styled.h1`
  color: #000;
  font-size: 42px;
  font-weight: 580;
  margin-bottom: 32px;
  ${mobile({
    fontSize: "28px",
  })}
`;
const Name = styled.h2`
  color: #000;
  font-size: 32px;
  font-weight: 550;
  ${mobile({
    fontSize: "24px",
  })}
`;
const Date = styled.h2`
  color: #000;
  font-size: 32px;
  font-weight: 550;
  ${mobile({
    fontSize: "24px",
  })}
`;
const ImageContainer = styled.div`
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1/1;
  overflow: hidden;
  & > * {
    width: 100%;
    height: 100%;
  }
`;
const LeftArrowContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: transparent;
  border: none;
  top: 50%;
  left: 0px;
  transform: translateY(-50%);
  ${mobile({ left: "-28px" })}
`;
const RightArrowContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: transparent;
  border: none;
  top: 50%;
  right: 0px;
  ${mobile({ right: "-28px" })}
  transform: translateY(-50%);
`;
const Slider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % Comments.length);
  };

  const previousSlide = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + Comments.length) % Comments.length
    );
  };
  const Comments = [
    {
      image: face1,
      comment: "cette platforme est exelente",
      name: "Akram said",
      date: "19-06-2023",
    },
    {
      image: face2,
      comment: "cette platforme est la meilleur",
      name: "wahid slimani",
      date: "19-07-2023",
    },
    {
      image: face3,
      comment: "cette platforme est motivante",
      name: "salim abdoun",
      date: "19-08-2023",
    },
    {
      image: face4,
      comment: "cette platforme est exelente",
      name: "ahmed goussmia",
      date: "19-09-2023",
    },
    {
      image: face5,
      comment: "cette platforme est exelente",
      name: "cr7",
      date: "19-03-2023",
    },
  ];
  return (
    <Container>
      <Title>Commentaires</Title>
      <CommentsTop>
        <LeftArrowContainer onClick={previousSlide}>
          <LeftArrow />
        </LeftArrowContainer>
        <ImageContainer>
          <img
            className="pic1"
            src={
              Comments[
                (currentImageIndex - 2 + Comments.length) % Comments.length
              ].image
            }
            alt="pic1"
          />
        </ImageContainer>
        <ImageContainer>
          <img
            src={
              Comments[
                (currentImageIndex - 1 + Comments.length) % Comments.length
              ].image
            }
            alt="pic1"
          />
        </ImageContainer>
        <ImageContainer className="active">
          <img src={Comments[currentImageIndex].image} alt="pic1" />
        </ImageContainer>
        <ImageContainer>
          <img
            src={
              Comments[
                (currentImageIndex + 1 + Comments.length) % Comments.length
              ].image
            }
            alt="pic1"
          />
        </ImageContainer>
        <ImageContainer>
          <img
            className="pic4"
            src={
              Comments[
                (currentImageIndex + 2 + Comments.length) % Comments.length
              ].image
            }
            alt="pic1"
          />
        </ImageContainer>
        <RightArrowContainer onClick={nextSlide}>
          <RightArrow />
        </RightArrowContainer>
      </CommentsTop>
      <Comment>{Comments[currentImageIndex].comment}</Comment>
      <Name>{Comments[currentImageIndex].name}</Name>
      <Date>{Comments[currentImageIndex].date}</Date>
    </Container>
  );
};

export default Slider;
