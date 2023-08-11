import { styled } from "styled-components";

export const HomeContainer = styled.div`
  max-width: 54rem;
  margin: 0 auto;
`

export const SearchForm = styled.form`
  margin-top: 4.5rem;

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.75rem;
  }

  strong {
    font-size: 1.125rem;
    font-weight: 700;
  }

  input {
    width: 100%;
    background: ${({ theme }) => theme.colors['base-input']};
    border: 1px solid ${({ theme }) => theme.colors['base-border']};
    border-radius: 6px;
    padding: 16px 12px;

    color: ${({ theme }) => theme.colors['base-text']};

    
    &::placeholder {
      font-family: 'Nunito', sans-serif;
      font-size: 1rem;
    }
  }
`

export const PostsSection = styled.div`
  margin-top: 3rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  margin-bottom: 10rem;

`

