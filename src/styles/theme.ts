import { createColors, type Colors } from "./tokens/colors";
import { createRadius, type Radius } from "./tokens/radius";
import { createShadows, type Shadows } from "./tokens/shadows";
import { createSpacing, type Spacing } from "./tokens/spacing";
import { createTransitions, type Transitions } from "./tokens/transitions";
import type { Typography } from "./tokens/typography";
import { createTypography } from "./tokens/typography";

export interface Theme {
  colors: Colors;
  spacing: Spacing;
  typography: Typography;
  radius: Radius;
  transitions: Transitions;
  shadows: Shadows;
}

export const createTheme = (): Theme => ({
  spacing: createSpacing(),
  typography: createTypography(),
  colors: createColors(),
  radius: createRadius(),
  transitions: createTransitions(),
  shadows: createShadows(),
});

export const defaultTheme = createTheme();

export const darkTheme: Theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    background: "222 47% 11%",
    text: "0 0% 98%",
    primary: "210 12% 92%",
    primaryForeground: "221 19% 24%",
    secondary: "220 12% 27%",
    secondaryForeground: "0 0% 98%",
    accent: "220 12% 27%",
    accentForeground: "0 0% 98%",
    destructive: "5 75% 64%",
    border: "0 0% 100% / 10%",
    ring: "220 15% 50%",
  },
};
