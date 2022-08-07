// import original module declarations
import "solid-styled-components";
import { Theme } from "./styles/theme/types";

// and extend them!
declare module "solid-styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
