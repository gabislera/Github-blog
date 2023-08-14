import { styled } from "styled-components"

export const PostHeaderContainer = styled.header`
  width: 100%;
  background: ${({ theme }) => theme.colors['base-profile']};
  padding: 2rem 2.5rem;
  border-radius: 10px;
  transform: translateY(-4.375rem);
  box-shadow: 0 1px 25px rgba(0, 0, 0, 0.8);

  strong {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors['base-title']};
  }
`

export const NavigationLinks = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.25rem;

  div {
    display: flex;
    align-items: center;
    gap: 8px;

    &:hover {
      border-bottom: 1px solid ${({ theme }) => theme.colors['blue']};
    }

    svg {
      color: ${({ theme }) => theme.colors['blue']};
      width: 0.75rem;
    }

    a {
      color: ${({ theme }) => theme.colors['blue']};
      font-size: 0.75rem;
      line-height: 0;
    }
  }
`

export const PostInfo = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.colors['base-span']};

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

`