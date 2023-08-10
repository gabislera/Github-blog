import { styled } from "styled-components";

export const PostContainer = styled.div`
  background: ${({ theme }) => theme.colors['base-post']};
  border-radius: 10px;
  max-width: 26rem;
  max-height: 16.25rem;
  padding: 2rem;

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.75rem;

    strong {
      font-size: 1.25rem;
      font-weight: 700;
      line-height: 160%;

      max-width: 17.68rem;
    }

    span {
      font-size: 0.875rem;
      max-height: 112px;
    }
  }

  p {
    max-height: 6rem; 
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4; 
    -webkit-box-orient: vertical;
  }
`