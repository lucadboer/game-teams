import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 0px 28px;

  ${({theme}) => css`
    background-color: ${theme.COLORS.GRAY_600}
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}

  
`

export const Title = styled.Text`
  font-weight: bold;
  color: ${({theme}) => theme.COLORS.RED_DARK};
`

