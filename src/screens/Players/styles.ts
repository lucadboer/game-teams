import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 0 24px;
  background-color: ${({theme}) => theme.COLORS.GRAY_600};
`

export const FormContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;

  background-color: ${({theme}) => theme.COLORS.GRAY_700};

  border-radius: 6px;

`

export const HeaderList = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;

  margin: 28px 0 32px;
`

export const QuantityPlayers = styled.Text`
  margin-left: 20px;
  padding: 3px 8px;

  text-align: center;

  ${({theme}) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-weight: bold;
    border: 1px solid ${theme.COLORS.GREEN_700};
  `};

  border-radius: 6px;
`


