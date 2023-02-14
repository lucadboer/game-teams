import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  margin: 32px 0;
`

export const Title = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.XL}px;
  `}

  font-weight: bold;
  text-align: center;
`

export const Subtitle = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.GRAY_300};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
  text-align: center;
  
`
