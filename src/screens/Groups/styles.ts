import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 0px 28px;

  background-color: black;
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
`

export const Title = styled.Text`
  font-weight: bold;
  color: ${({theme}) => theme.COLORS.RED_DARK};
`

