import styled from 'styled-components';

function Result({ count }) {
  return (
    <CountResult>
      Результат = {count}
    </CountResult>
  )
}

const CountResult = styled.div`
  grid-area:result;
`

export default Result
