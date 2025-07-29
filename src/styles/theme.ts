import type { Breakpoints } from "./tokens/breakpoints";
import type { Colors } from "./tokens/colors";
import type { Containers } from "./tokens/containers";
import type { Radius } from "./tokens/radius";
import type { Shadows } from "./tokens/shadows";
import type { Spacing } from "./tokens/spacing";
import type { Transitions } from "./tokens/transitions";
import type { Typography } from "./tokens/typography";

export interface Theme {
  colors: Colors;
  spacing: Spacing;
  typography: Typography;
  radius: Radius;
  transitions: Transitions;
  shadows: Shadows;
  breakpoints: Breakpoints;
  containers: Containers;
}
