import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  height: 100%;
`

export const Title = styled.Text`
  color: ${({theme}) => theme.COLORS.RED_DARK};
`