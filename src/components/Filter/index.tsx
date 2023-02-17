import { Text, TouchableOpacityProps } from "react-native";
import { Container, Title } from "./styles";

interface FilterProps extends TouchableOpacityProps {
  toActive?: boolean
  title: string
}

export function Filter({ toActive = false, title, ...rest}: FilterProps) {
  return (
    <Container isActive={toActive} {...rest}>
      <Title isActive={toActive}>{title}</Title>
    </Container>
  )
}