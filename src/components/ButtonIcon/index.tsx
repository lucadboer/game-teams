import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'

import { ButtonIconVariants, Container, Icon } from "./styles";

interface ButtonIconProps extends TouchableOpacityProps {
  icon: keyof typeof MaterialIcons.glyphMap;
  variant?: ButtonIconVariants;
}

export function ButtonIcon({ variant = 'primary', icon, ...rest }: ButtonIconProps) {
  return (
    <Container  {...rest}>
      <Icon variant={variant} name={icon} />
    </Container>
  )
}