import type { Theme } from "../theme";

import { baseTheme } from "./baseTheme";

export const darkTheme: Theme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    background: "222 47% 11%",
    text: "0 0% 98%",
    primary: "210 12% 92%",
    primaryForeground: "221 19% 24%",
    secondary: "220 12% 27%",
    secondaryForeground: "0 0% 98%",
    accent: "220 12% 27%",
    accentForeground: "0 0% 98%",
    muted: "217 15% 18%",
    mutedForeground: "215 20% 65%",
    destructive: "5 75% 64%",
    input: "0 0% 100% / 15%",
    border: "0 0% 100% / 10%",
    ring: "220 15% 50%",
  },
};
