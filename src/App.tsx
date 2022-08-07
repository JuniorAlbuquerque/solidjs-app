import type { Component } from "solid-js";
import Routes from "./routes";
import { Router } from "@solidjs/router";
import GlobalStyles from "./styles/global";
import { ThemeProvider } from "solid-styled-components";
import theme from "./styles/theme";

const App: Component = () => {
  const Global = GlobalStyles({
    theme,
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Global />
          <Routes />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
