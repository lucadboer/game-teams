import styled, { css } from "styled-components/native";

export const Title = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.GRAY_400};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}


  text-align: center;
  margin-top: 120px;
`