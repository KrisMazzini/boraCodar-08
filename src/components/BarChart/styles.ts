import styled, { keyframes } from 'styled-components'

interface BarProps {
  percentage: number
}

const progress = (percentage: number) => keyframes`
  0% {
    height: 0;
  }
  100% {
    height: ${`${percentage * 100}%`};
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

  background: linear-gradient(#90f7ec, #32ccbc);

  animation: ${(props) => progress(props.percentage)} 1s linear forwards;

  &:hover {
    opacity: 0.8;
  }
`

export const Goal = styled.div<BarProps>`
  width: 100%;
  height: 3px;
  background-color: ${(props) => props.theme.background.radialBar};

  position: absolute;
  top: ${(props) => `calc((${(1 - props.percentage) * 100}%) - 27.4px)`};
`
