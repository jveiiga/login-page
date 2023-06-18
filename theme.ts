import { extendTheme, ThemeConfig } from "@chakra-ui/react"

const chakraConfig: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const customTheme = extendTheme({
  config: chakraConfig,
  colors: {
    primary: "#000000",
    secondary: "#E30614",
    tertiary: "#D2AA42",
    dark: {
      primary: "#000000", // Nova cor primária para o modo dark
    },
  },
  fonts: {
    body: "Arial, sans-serif",
    heading: "Helvetica, sans-serif",
  },
  styles: {
    global: {
      body: {
        margin: 0,
        padding: 0,
      },
    },
  },
});

export default customTheme;







