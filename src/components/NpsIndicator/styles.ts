import styled from 'styled-components'

export const EmojiContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  img {
    width: 3.375rem;
    height: 3.375rem;
  }

  > p {
    color: ${(props) => props.theme.text.success};
  }
`
