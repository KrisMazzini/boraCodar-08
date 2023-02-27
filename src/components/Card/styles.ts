import styled from 'styled-components'

export interface CardContainerProps {
  justify?: 'center' | 'space-between'
  align?: 'center' | 'flex-start'
}

export const Container = styled.div<CardContainerProps>`
  min-width: 18.5rem;
  flex-grow: 1;
  padding: 29px 1rem;

  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justify || 'space-between'};
  align-items: ${(props) => props.align || 'center'};
  gap: 2rem;

  border-radius: 16px;
  box-shadow: 3px 4px 26px rgba(0, 0, 0, 0.25);

  background-color: ${(props) => props.theme.background.card};

  > p {
    font-size: 1.5rem;
    font-weight: 600;
  }

  @media (min-width: 400px) {
    padding: 29px 3rem;
  }
`
