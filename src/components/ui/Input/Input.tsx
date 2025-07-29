import styled from "@emotion/styled";
import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const StyledInput = styled("input")(({ theme }) => ({
  display: "flex",
  height: theme.spacing(9),
  width: "100%",
  minWidth: theme.spacing(0),
  borderColor: `hsl(${theme.colors.input})`,
  borderRadius: theme.radius.md,
  borderWidth: "1px",
  backgroundColor: "transparent",
  padding: `${theme.spacing(1)} ${theme.spacing(3)}`,
  fontSize: theme.typography.variants.md.fontSize,
  lineHeight: theme.typography.variants.md.lineHeight,
  boxShadow: theme.shadows.xs,
  transitionProperty: "color,box-shadow",
  transitionTimingFunction: theme.transitions.timing,
  transitionDuration: theme.transitions.duration,
  outline: "none",

  "&:disabled": {
    cursor: "not-allowed",
    pointerEvents: "none",
    opacity: 0.5,
  },

  "&::placeholder": {
    color: `hsl(${theme.colors.mutedForeground})`,
  },

  "&::selection ": {
    background: `hsl(${theme.colors.primary})`,
    color: `hsl(${theme.colors.primaryForeground})`,
  },

  "&:focus-visible": {
    borderColor: `hsl(${theme.colors.ring})`,
    boxShadow: `0 0 0 3px hsl(${theme.colors.ring} / 0.5)`,
  },

  "&[aria-invalid='true']": {
    borderColor: `hsl(${theme.colors.destructive})`,
  },

  "&[aria-invalid='true']:focus-visible": {
    boxShadow: `0 0 0 3px hsl(${theme.colors.destructive} / 0.2)`,
  },

  [`@media (min-width: ${theme.breakpoints.md})`]: {
    fontSize: theme.typography.variants.sm.fontSize,
    lineHeight: theme.typography.variants.sm.lineHeight,
  },
}));

export const Input = (props: InputProps) => {
  return <StyledInput data-slot="input" {...props} />;
};
