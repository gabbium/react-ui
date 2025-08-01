import type { Theme } from "../theme";
import type { Breakpoints } from "../tokens/breakpoints";
import type { Colors } from "../tokens/colors";
import type { Containers } from "../tokens/containers";
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

export const createContainers = (): Containers => ({
  xs: "20rem",
  sm: "24rem",
  md: "28rem",
  lg: "32rem",
  xl: "36rem",
});

export const createRadius = (): Radius => ({
  sm: "0.125rem",
  md: "0.375rem",
  lg: "0.5rem",
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
  variants: {
    sm: { fontSize: "0.875rem", lineHeight: "1.25rem" },
    md: { fontSize: "1rem", lineHeight: "1.5rem" },
    lg: { fontSize: "1.125rem", lineHeight: "1.75rem" },
  },
  weights: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  },
});

export const createTheme = (): Theme => ({
  breakpoints: createBreakpoints(),
  colors: createColors(),
  containers: createContainers(),
  radius: createRadius(),
  shadows: createShadows(),
  spacing: createSpacing(),
  transitions: createTransitions(),
  typography: createTypography(),
});

export const baseTheme = createTheme();
