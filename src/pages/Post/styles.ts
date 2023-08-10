import { styled } from "styled-components";

export const PostContainer = styled.div`
  max-width: 54rem;
  margin: 0 auto;
  cursor: pointer;

`
export const PostContent = styled.div`
  padding: 2.5rem;

`

export const CodeContent = styled.div`
  background: ${({ theme }) => theme.colors['base-post']};
  padding: 1rem;
  height: 110px; /* change*/
`