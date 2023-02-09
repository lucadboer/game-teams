import { BackButton, BackIcon, Container, Logo } from "./styles";
import logo from '@assets/logo.png'
import { CaretLeft } from "phosphor-react-native";

interface HeaderProps {
  hasBackButton?: boolean
}

export function Header({ hasBackButton = false }: HeaderProps) {
  return (
    <Container>
      {hasBackButton && (
        <BackButton>
          <CaretLeft size={32} color='#fff' />
        </BackButton>
      )}
      <Logo source={logo} />
    </Container>
  )
}