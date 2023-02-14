import { UsersThree } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  background-color: ${({theme}) => theme.COLORS.GRAY_600};
`

export const Content = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`

export const NewGroupInput = styled.TextInput`
  ${({theme}) => css`
    background-color: ${theme.COLORS.GRAY_700};
    color: ${theme.COLORS.GRAY_100};
  `}
  border-radius: 6px;
`

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  size: 56,
  color: theme.COLORS.GREEN_500,
}))``