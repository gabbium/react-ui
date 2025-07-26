import { createColors, type Colors } from "./colors";
import { createSpacing, type Spacing } from "./spacing";
import type { Typography } from "./typography";
import { createTypography } from "./typography";

export interface Theme {
  colors: Colors;
  spacing: Spacing;
  typography: Typography;
}

export const createTheme = (): Theme => ({
  spacing: createSpacing(),
  typography: createTypography(),
  colors: createColors(),
});

export const defaultTheme = createTheme();

export const darkTheme: Theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    background: "#111827",
    text: "#f9fafb",
    primary: "#3b82f6",
    secondary: "#94a3b8",
    border: "rgba(255,255,255,0.1)",
    ring: "#334155",
  },
};
