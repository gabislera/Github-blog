import { styled } from "styled-components";

export const PostContainer = styled.button`
  background: ${({ theme }) => theme.colors['base-post']};
  border: none;
  border-radius: 10px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  text-align: start;
  
  div {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: start;
    margin-bottom: 0.75rem;
    
    strong {
      font-size: 1.25rem;
      font-weight: 700;
      line-height: normal;
      max-width: 300px;
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
