import styled from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons'

export const Container = styled.View`
  width: 100%;
  height: 54px;

  margin-bottom: 14px;

  flex-direction: row;
  align-items: center;

  background-color: ${({theme}) => theme.COLORS.GRAY_500};

  border-radius: 6px;
`

export const Name = styled.Text`
  flex: 1;

  color: ${({theme}) => theme.COLORS.GRAY_200};
`

export const Icon = styled(MaterialIcons).attrs(({theme}) => ({
  color: theme.COLORS.GRAY_200,
  size: 24
}))`
  margin-left: 12px;
  margin-right: 8px;
`

