import styled from 'styled-components';
import React, { useState } from 'react';
import Button from './components/Button'
import Inputs from './components/Inputs'
import Result from './components/Result'

function App() {

  const [count, setCount] = useState(0)
  const [inputs, changeInputs] = useState([1, 1])

  const button = {
    btnValuesArr: [
      { "+": (a, b) => { setCount(a + b) } },
      { "-": (a, b) => { setCount(a - b) } },
      { "*": (a, b) => { setCount(a * b) } },
      { "/": (a, b) => { setCount(a / b) } },
    ]
  }

  return (
    <Container>
      <ButtonWrap>
        <Button button={button.btnValuesArr[0]} inputs={inputs} />
        <Button button={button.btnValuesArr[1]} inputs={inputs} />
        <Button button={button.btnValuesArr[2]} inputs={inputs} />
        <Button button={button.btnValuesArr[3]} inputs={inputs} />
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

export default App;