import styled from "@emotion/styled";
import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Sets the visual style of the button */
  variant?: "primary" | "secondary" | "destructive" | "outline" | "ghost" | "link";

  /** Sets the button size */
  size?: "sm" | "md" | "lg" | "icon";
}

const ButtonRoot = styled("button")<ButtonProps>(({ theme, size, variant }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(2),
  whiteSpace: "nowrap",
  borderRadius: theme.radius.md,
  fontSize: theme.typography.textSm.fontSize,
  lineHeight: theme.typography.textSm.lineHeight,
  fontWeight: theme.typography.fontWeightMedium,
  transitionProperty: "all",
  transitionTimingFunction: theme.transitions.timing,
  transitionDuration: theme.transitions.duration,
  flexShrink: 0,
  outline: "none",

  "&:disabled": {
    pointerEvents: "none",
    opacity: 0.5,
  },

  "&:focus-visible": {
    borderColor: `hsl(${theme.colors.ring})`,
    boxShadow: `0 0 0 3px hsl(${theme.colors.ring} / 0.5)`,
  },

  "& svg": {
    pointerEvents: "none",
    flexShrink: 0,
  },

  "& svg:not([class*='size-'])": {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },

  ...(size === "sm" && {
    height: theme.spacing(8),
    gap: theme.spacing(1.5),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),

    "&:has(> svg)": {
      paddingLeft: theme.spacing(2.5),
      paddingRight: theme.spacing(2.5),
    },
  }),

  ...(size === "md" && {
    height: theme.spacing(9),
    padding: `${theme.spacing(2)} ${theme.spacing(4)}`,

    "&:has(> svg)": {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
  }),

  ...(size === "lg" && {
    height: theme.spacing(10),
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),

    "&:has(> svg)": {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
  }),

  ...(size === "icon" && {
    height: theme.spacing(9),
    width: theme.spacing(9),
  }),

  ...(variant === "primary" && {
    background: `hsl(${theme.colors.primary})`,
    color: `hsl(${theme.colors.primaryForeground})`,
    boxShadow: theme.shadows.xs,

    "&:hover": {
      background: `hsl(${theme.colors.primary} / 0.9)`,
    },
  }),

  ...(variant === "secondary" && {
    background: `hsl(${theme.colors.secondary})`,
    color: `hsl(${theme.colors.secondaryForeground})`,
    boxShadow: theme.shadows.xs,

    "&:hover": {
      background: `hsl(${theme.colors.secondary} / 0.8)`,
    },
  }),

  ...(variant === "destructive" && {
    background: `hsl(${theme.colors.destructive})`,
    color: "#fff",
    boxShadow: theme.shadows.xs,

    "&:hover": {
      background: `hsl(${theme.colors.destructive} / 0.9)`,
    },

    "&:focus-visible": {
      borderColor: `hsl(${theme.colors.destructive})`,
      boxShadow: `0 0 0 3px hsl(${theme.colors.destructive} / 0.2)`,
    },
  }),

  ...(variant === "outline" && {
    borderWidth: "1px",
    background: `hsl(${theme.colors.background})`,
    boxShadow: theme.shadows.xs,

    "&:hover": {
      background: `hsl(${theme.colors.accent})`,
      color: `hsl(${theme.colors.accentForeground})`,
    },
  }),

  ...(variant === "ghost" && {
    "&:hover": {
      background: `hsl(${theme.colors.accent})`,
      color: `hsl(${theme.colors.accentForeground})`,
    },
  }),

  ...(variant === "link" && {
    color: `hsl(${theme.colors.primary})`,
    textUnderlineOffset: "4px",

    "&:hover": {
      textDecoration: "underline",
    },
  }),
}));

export const Button = ({ variant = "primary", size = "md", ...props }: ButtonProps) => {
  return <ButtonRoot data-slot="button" variant={variant} size={size} {...props} />;
};
