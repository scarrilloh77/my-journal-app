import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { purpleTheme } from ".";

interface IAppTheme {
  children?: any;
}

export const AppTheme = ({ children }: IAppTheme) => {
  return (
    <ThemeProvider theme={purpleTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
