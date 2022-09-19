import { CssBaseline } from "@mui/material";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";

const PRIMARY = {
  lighter: "#483838",
  light: "#42855B ",
  main: "#003545",
  dark: "#003545",
  darker: "#D2D79F",
  contrastText: "#FFF",
};
const SECONDARY = {
  lighter: "#100F0F",
  light: "#0F3D3E",
  main: "#0F3D3E",
  dark: "#E2DCC8",
  darker: "#F1F1F1",
  contrastText: "#FFF",
};
const SUCCESS = {
  lighter: "#382933",
  light: "#519872",
  main: "#0F3D3E",
  dark: "#3B5249",
  darker: "#A4B494",
  contrastText: "#FFF",
};

function ThemeProvider({ children }) {
  const themeOptions = {
    palette: {
      primary: PRIMARY,
      secondary: SECONDARY,
      success: SUCCESS,
    },
    shape: { borderRadius: 8 },
  };

  const theme = createTheme(themeOptions);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}

export default ThemeProvider;
