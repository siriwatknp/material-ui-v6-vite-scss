import { createTheme } from "@mui/material/styles";
import type {} from "@mui/material/themeCssVarsAugmentation";

export const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: ".theme-%s",
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xSmall: 0,
      small: 600,
      medium: 960,
      large: 1280,
      xLarge: 1440,
      xxLarge: 1920,

      // generic device sizes
      mobile: 425,
      tablet: 640,
      laptop: 1024,
      desktop: 1280,
    },
  },
  typography: {
    fontFamily: "var(--font-family)",
  },
});
