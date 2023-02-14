import styled, { css } from "styled-components/native";

export const PrimaryInput = styled.TextInput`
  width: 100%;
  padding: 16px;

  ${({theme}) => css`
    background-color: ${theme.COLORS.GRAY_700};
    color: ${theme.COLORS.GRAY_100};
  `}


  border-radius: 6px;
`