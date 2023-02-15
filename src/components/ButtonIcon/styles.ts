import styled from "styled-components/native";

import { MaterialIcons } from '@expo/vector-icons'

export type ButtonIconVariants = "primary" | "secondary"

interface ButtonStyleIconProps {
  variant: ButtonIconVariants
}

export const Container = styled.TouchableOpacity`
  width: 56px;
  height: 56px;

  border-radius: 6px;

  justify-content: center;
  align-items: center;

`

export const Icon = styled(MaterialIcons).attrs<ButtonStyleIconProps>(({theme, variant}) => ({
  size: 28,
  color: variant === 'primary' ? theme.COLORS.GREEN_500 : theme.COLORS.RED
}))``