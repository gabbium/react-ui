import type { Theme } from "../theme";
import type { Breakpoints } from "../tokens/breakpoints";
import type { Colors } from "../tokens/colors";
import type { Radius } from "../tokens/radius";
import type { Shadows } from "../tokens/shadows";
import type { Spacing } from "../tokens/spacing";
import type { Transitions } from "../tokens/transitions";
import type { Typography } from "../tokens/typography";

export const createBreakpoints = (): Breakpoints => ({
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
});

export const createColors = (): Colors => ({
  background: "0 0% 100%",
  text: "222 47% 11%",
  primary: "221 19% 24%",
  primaryForeground: "0 0% 98%",
  secondary: "210 12% 94%",
  secondaryForeground: "221 19% 24%",
  accent: "210 12% 94%",
  accentForeground: "221 19% 24%",
  muted: "210 12% 96%",
  mutedForeground: "215 16% 46%",
  destructive: "5 80% 48%",
  input: "0 0% 92%",
  border: "214 20% 86%",
  ring: "214 16% 68%",
});

export const createRadius = (): Radius => ({
  sm: "0.125rem",
  md: "0.375rem",
  lg: "0.5rem",
  full: "9999px",
});

export const createShadows = (): Shadows => ({
  xs: "0 1px 2px rgba(0,0,0,0.05)",
  sm: "0 1px 3px rgba(0,0,0,0.1)",
  md: "0 4px 6px rgba(0,0,0,0.1)",
});

export const createSpacing = (): Spacing => (factor: number) => `${0.25 * factor}rem`;

export const createTransitions = (): Transitions => ({
  duration: "150ms",
  timing: "cubic-bezier(0.4, 0, 0.2, 1)",
});

export const createTypography = (): Typography => ({
  textSm: { fontSize: "0.875rem", lineHeight: "1.25rem" },
  textMd: { fontSize: "1rem", lineHeight: "1.5rem" },
  textLg: { fontSize: "1.125rem", lineHeight: "1.75rem" },
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
});

export const createTheme = (): Theme => ({
  spacing: createSpacing(),
  typography: createTypography(),
  colors: createColors(),
  radius: createRadius(),
  transitions: createTransitions(),
  shadows: createShadows(),
  breakpoints: createBreakpoints(),
});

export const defaultTheme = createTheme();
