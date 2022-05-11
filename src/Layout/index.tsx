import React from "react";
import { ThemeProvider } from "@emotion/react";

import GlobalStyles from "theme/globalStyles/GlobalStyle";
import FontsStyles from "theme/globalStyles/FontsSetup";
import theme from "theme";
import LayoutWrapper from "./styles";
import Header from "./Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <LayoutWrapper>
        <FontsStyles />
        <GlobalStyles />
        <Header />
        <main className="content">{children}</main>
        {/* footer if any */}
      </LayoutWrapper>
    </ThemeProvider>
  );
}
