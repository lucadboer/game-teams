import styled, { css } from "styled-components/native";

export const PrimaryInput = styled.TextInput`
  flex: 1;
  width: 100%;
  padding: 16px;

  min-height: 56px;
  max-height: 56px;

  ${({theme}) => css`
    background-color: ${theme.COLORS.GRAY_700};
    color: ${theme.COLORS.GRAY_100};
  `}

  border-radius: 6px;
`