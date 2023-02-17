import { css } from 'styled-components/native';
import { TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components/native';

export interface FilterStyleProps {
  isActive?: boolean;
}

export const Container = styled(TouchableOpacity)<FilterStyleProps>`
  min-height: 46px;
  min-width: 82px;
  
  max-height: 46px;
  max-width: 82px;


  justify-content: center;
  align-items: center;

  border-radius: 4px;

  ${({theme, isActive}) => css`
    border: 2px solid ${isActive ? theme.COLORS.GREEN_700 : theme.COLORS.GRAY_600};
  `}
`

export const Title = styled(Text)<FilterStyleProps>`
  text-transform: uppercase;

  ${({theme, isActive}) => css`
    font-size:  ${theme.FONT_SIZE.SM}px;
    font-weight: bold;
    color: ${isActive ? theme.COLORS.WHITE : theme.COLORS.GRAY_300};
  `}
`
