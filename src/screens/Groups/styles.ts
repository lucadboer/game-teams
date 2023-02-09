import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 0px 28px;

  background-color: black;
`

export const Title = styled.Text`
  color: ${({theme}) => theme.COLORS.RED_DARK};
`