import styled from 'styled-components';

function Inputs({ changeInputs }) {

  const setNewValue = (index, inputValue) => {
    changeInputs((inputs) => {
      let newArr = [...inputs]
      newArr[index] = inputValue
      return newArr
    }
    )
  }

  return (
    <InputsWrap>
      <input type="number" name="firstValue" onChange={
        (ev) => { setNewValue(0, Number(ev.target.value)) }} />
      <input type="number" name="secondValue" onChange={
        (ev) => { setNewValue(1, Number(ev.target.value)) }} />
    </InputsWrap>
  )
}

const InputsWrap = styled.div`
  display:grid;
  grid-area:inputs;
  grid-template-columns: 1fr 1fr;
  grid-gap:20px;
`

export default Inputs
