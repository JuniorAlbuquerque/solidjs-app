import { createGlobalStyles } from "solid-styled-components";
import { Theme } from "./theme/types";

const GlobalStyles = ({ theme }: { theme: Theme }) => createGlobalStyles`
    html,
    body {
      background: light;
    }

    * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
      -webkit-font-smoothing: antialiased;
    }

    body {
      height: 100%;
      background: ${theme.colors?.green[1]};
      font-family: 'Catamaran', sans-serif;
      color: ${theme.colors.gray[2]};
    }
  `;

export default GlobalStyles;
