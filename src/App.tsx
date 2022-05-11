import React from "react";
import { ThemeProvider } from "@emotion/react";
import theme from "theme";
import Layout from "app/Layout";
import LoadingScreen from "components/LoadingScreen";
import GlobalStyles from "theme/globalStyles/GlobalStyle";
import FontsStyles from "theme/globalStyles/FontsSetup";
import { creatRoutes } from "app/functions";
import { Routes } from "react-router-dom";
import routes from "app/routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <FontsStyles />
      <GlobalStyles />
      <Layout>
        <React.Suspense fallback={<LoadingScreen />}>
          <Routes>{routes.map((route) => creatRoutes(route))}</Routes>
        </React.Suspense>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
