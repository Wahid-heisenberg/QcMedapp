import React from 'react'
import styled from 'styled-components'
import Question from '../components/Question';
import { ReactComponent as Demosvg } from "../assets/demo.svg";
import { mobile } from '../../responsive';
const Container = styled.section`
  padding: 28px 0px 0px 0px ;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 132px;
  ${mobile({fontSize:'24px',padding:'36px',overflowX:"hidden"})}
`;
const Demo = () => {
  return (
    <Container>
        <Question question="Demo" />
      <Demosvg/>
    </Container>
  )
}

export default Demo
