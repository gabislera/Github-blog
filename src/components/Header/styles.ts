import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  height: 18.5rem;
  /* width: 100vw; */
  background: ${({ theme }) => theme.colors['base-profile']};
  background-image: url(/src/assets/headerGradient.svg);
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: center;
`
export const Logo = styled.img`
  max-width: 9.25rem;
  margin-top: -3.125rem;
`

export const LeftDetail = styled.img`
  position: absolute;
  left: 0;
  top: 4.375rem;
`

export const RightDetail = styled.img`
  position: absolute;
  right: 0;
  top: 1.875rem;
`
