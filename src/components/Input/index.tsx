import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";
import { PrimaryInput } from "./styles";

export function Input({...rest}: TextInputProps) {
  const {COLORS} = useTheme()

  return <PrimaryInput {...rest} placeholderTextColor={COLORS.GRAY_300} />
}