import { BackButton, Container, Logo } from "./styles";
import logo from '@assets/logo.png'
import { CaretLeft } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";

interface HeaderProps {
  hasBackButton?: boolean
}

export function Header({ hasBackButton = false }: HeaderProps) {
  const navigation = useNavigation()
  
  function handleGoHome() {
    navigation.navigate('groups')
  }

  return (
    <Container>
      {hasBackButton && (
        <BackButton onPress={handleGoHome}>
          <CaretLeft size={32} color='#fff' />
        </BackButton>
      )}
      <Logo source={logo} />
    </Container>
  )
}