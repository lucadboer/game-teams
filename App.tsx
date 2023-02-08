import { Group } from "@screens/Groups";
import main from "src/styles/themes/main";
import { ThemeProvider } from "styled-components";

export default function App() {
  return(
    <ThemeProvider theme={main}>
      <Group />
    </ThemeProvider>
  )
}