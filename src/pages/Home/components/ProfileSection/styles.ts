import { styled } from "styled-components"

export const ProfileContainer = styled.div`
  display: flex;
  width: 100%;
  background: ${({ theme }) => theme.colors['base-post']};
  padding: 2rem 2.5rem;
  border-radius: 10px;
  gap: 2rem;
  transform: translateY(-4.375rem);

  img {
    max-width: 9.25rem;
    border-radius: 8px;
  }
`

export const ProfileSection = styled.div`
  display: flex; 
  flex-direction: column; 
  justify-content: center;
  width: 100%;

  p {
    margin-bottom: 1.5rem;
    line-height: 160%;
  }
`

export const UserName = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;

  strong {
    font-size: 1.5rem;
    font-weight: 700;
  }

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

export const ProfileInfo = styled.div`
  display: flex;
  gap: 1.5rem;
  color: ${({ theme }) => theme.colors['base-span']};


  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

`