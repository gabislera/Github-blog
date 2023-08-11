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
    align-items: start;
    margin-bottom: 0.75rem;

    strong {
      font-size: 1.25rem;
      font-weight: 700;
      line-height: normal;

      max-width: 17.68rem;
    }

    span {
      margin-top: 0.4rem;
      font-size: 0.75rem;
      max-height: 112px;
      line-height: normal;
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