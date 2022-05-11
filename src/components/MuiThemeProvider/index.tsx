import React from "react";
import { ThemeProvider, createTheme, Theme } from "@mui/material/styles";

interface Props {
  children: React.ReactNode;
  providedTheme?: Theme;
}

export default function MuiThemeProvider({ children, providedTheme }: Props) {
  const theme = createTheme({ ...providedTheme });
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
