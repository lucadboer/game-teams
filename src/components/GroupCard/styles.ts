import { UsersThree } from "phosphor-react-native";
import { Text, TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  margin-top: 12px;
  flex-direction: row;
  background-color: ${({theme}) => theme.COLORS.GRAY_500};
  padding: 32px 24px;
  border-radius: 6px;
`

export const Title = styled(Text)`
  ${({theme}) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.LG}px;
    margin-left: 22px;
  `}
`

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.GREEN_500,
  weight: 'fill'
}))``

