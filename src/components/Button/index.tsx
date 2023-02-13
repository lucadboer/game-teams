import { TouchableOpacityProps } from "react-native";
import { Container, Title } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: "primary" | "secondary";
}

export function Button({ title, variant = 'primary', ...rest }: ButtonProps) {
  return (
    <Container variant={variant} {...rest}>
      <Title>{title}</Title>
    </Container>
  )
}