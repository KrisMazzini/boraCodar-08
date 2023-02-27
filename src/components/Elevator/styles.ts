import styled from 'styled-components'

interface LabelProps {
  result: 'up' | 'down'
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > span {
    font-size: 1.5rem;
    font-weight: 500;
  }
`

export const Label = styled.div<LabelProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  img {
    ${(props) =>
      props.result === 'up' ? `margin-bottom: 6px;` : `margin-top: 6px;`}
  }

  span {
    font-size: 0.875rem;
    font-weight: 500;
  }
`
