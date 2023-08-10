import { HeaderContainer, LeftDetail, Logo, RightDetail } from "./styles";
import leftDetail from '../../assets/leftDetail.svg'
import rightDetail from '../../assets/RightDetail.svg'
import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <LeftDetail src={leftDetail} />
      <Logo src={logo} alt="github profile logo" />
      <RightDetail src={rightDetail} />
    </HeaderContainer>
  )
}