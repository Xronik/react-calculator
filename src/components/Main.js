import styled from 'styled-components';
import React, { useState } from 'react';
import Button from './Button'
import Inputs from './Inputs'
import Result from './Result'

function Main() {
  const [count, setCount] = useState(0)
  const [inputs, changeInputs] = useState([1, 1])

  const button = [
    { "+": (a, b) => { setCount(a + b) } },
    { "-": (a, b) => { setCount(a - b) } },
    { "*": (a, b) => { setCount(a * b) } },
    { "/": (a, b) => { setCount(a / b) } },
  ]


  return (
    <Container>
      <ButtonWrap>
        {
          button.map((el) => (<Button button={el} inputs={inputs} />))
        }
      </ButtonWrap>
      <Inputs changeInputs={changeInputs} />
      <Result count={count} />
    </Container>
  );
}

const ButtonWrap = styled.div`
    display: grid;
    grid-gap:20px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-area:buttons;
    button {
      width:60px;
      height:60px;
      font-size:24px;
    }
`

const Container = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 200px repeat(2, 30px);
    grid-auto-flow:column;
    align-items: center;
    justify-items:center;
    grid-template-areas: "buttons buttons buttons buttons" ". inputs inputs ." ". result result .";
`

export default Main
