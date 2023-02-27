import styled from 'styled-components'

interface LegendMarkProps {
  colors?: string[]
}

export const Container = styled.div`
  display: flex;
  align-items: center;

  p,
  span {
    font-size: 0.875rem;
    line-height: 160%;
  }

  p {
    font-weight: 500;
    margin-right: 10px;
  }
`

export const LegendMark = styled.div<LegendMarkProps>`
  width: 15px;
  height: 15px;
  margin-right: 4px;
  border-radius: 50%;

  background: ${(props) =>
    props.colors
      ? `linear-gradient(90deg, ${props.colors.join(', ')})`
      : props.theme.background.radialBar};
`
