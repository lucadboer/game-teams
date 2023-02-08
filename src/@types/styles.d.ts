import main from 'src/styles/themes/main'
import 'styled-components'

type ThemeType = typeof main

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}