import styled, { keyframes } from 'styled-components'

interface GoalProps {
  percentage: number
}

interface BarProps extends GoalProps {
  value: number
}

const progress = (percentage: number) => keyframes`
  0% {
    height: 0;
  }
  100% {
    height: ${`${percentage * 100}%`};
  }
`

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const Container = styled.div`
  flex-grow: 1;

  min-height: 12rem;
  max-width: 33rem;
  min-width: 16rem;

  position: relative;
`

export const Bars = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 1rem;

  position: absolute;
  z-index: 2;
`

export const BarContainer = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;

  span {
    font-size: 0.875rem;
    font-weight: 500;
    text-transform: lowercase;
  }
`

export const Bar = styled.div<BarProps>`
  width: 1rem;
  border-radius: 999px;

  position: relative;

  background: linear-gradient(#90f7ec, #32ccbc);

  animation: ${(props) => progress(props.percentage)} 1s linear forwards;

  &:hover {
    opacity: 0.8;
  }

  &:hover::before {
    content: '${(props) => props.value}';
    height: 1rem;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: -1.2rem;
    left: 50%;
    transform: translateX(-50%);

    font-size: 0.75rem;
    font-weight: 700;

    color: ${(props) => props.theme.text.main};

    animation: ${fadeIn} 200ms linear forwards;
  }
`

export const Goal = styled.div<GoalProps>`
  width: 100%;
  height: 3px;
  border-radius: 999px;

  background-color: ${(props) => props.theme.background.radialBar};

  position: absolute;
  top: ${(props) => `calc((${(1 - props.percentage) * 100}%) - 27.4px)`};
`
