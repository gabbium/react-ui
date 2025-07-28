import "@emotion/react";

import type { Theme as BaseTheme } from "./theme";

declare module "@emotion/react" {
  export interface Theme extends BaseTheme {}
}
