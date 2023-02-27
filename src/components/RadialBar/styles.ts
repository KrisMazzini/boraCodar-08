import styled, { keyframes } from 'styled-components'

export interface RadialBarStrokeProps {
  percentage: number
}

const progress = (percentage: number) => keyframes`
  0%{
    stroke-dashoffset: 520
  }
  100% {
    stroke-dashoffset: ${(1 - percentage) * 520};
  }
`

export const Container = styled.div<RadialBarStrokeProps>`
  width: 196px;
  height: 196px;
  position: relative;

  svg {
    height: inherit;
    width: inherit;
    position: absolute;
    top: 0;
    left: 0;
    transform: rotate(-90deg);
  }

  circle {
    stroke-width: 15%;
    stroke-dasharray: 520;

    animation: ${(props) => progress(props.percentage)} 1s linear forwards;

    &:hover {
      opacity: 0.8;
    }
  }
`

export const OuterCircle = styled.div`
  width: inherit;
  height: inherit;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.background.radialBar};
`

export const InnerCircle = styled.div`
  width: 70%;
  height: 70%;
  border-radius: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.background.card};

  span:first-child {
    font-size: 2.125rem;
    font-weight: 700;
  }

  span:last-child {
    margin-top: -1rem;
  }
`
