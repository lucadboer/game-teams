import { TouchableOpacity, Text } from 'react-native';
import styled from "styled-components";
import { css } from 'styled-components/native';

interface ButtonStyleProps {
  variant: string
}

export const Container = styled(TouchableOpacity)<ButtonStyleProps>`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px 0;

  height: 100%;
  max-height: 56px;

  background-color: ${({theme, variant}) => variant === 'primary' ? theme.COLORS.GREEN_500 : theme.COLORS.RED };
  border-radius: 6px;

  ${({disabled}) => disabled && css`
    opacity: 0.35;
  `}
`

export const Title = styled(Text)`
  font-weight: ${({theme}) => theme.FONT_FAMILY.BOLD};
  color: ${({theme}) => theme.COLORS.WHITE};
`