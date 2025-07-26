import styled from "@emotion/styled";
import * as LabelPrimitive from "@radix-ui/react-label";
import type { ComponentProps } from "react";

interface LabelProps extends ComponentProps<typeof LabelPrimitive.Root> {}

const LabelRoot = styled(LabelPrimitive.Root)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  fontSize: theme.typography.textSm.fontSize,
  lineHeight: 1,
  fontWeight: theme.typography.fontWeightMedium,
  userSelect: "none",

  ".group[data-disabled='true'] &": {
    pointerEvents: "none",
    opacity: 0.5,
  },

  ".peer:disabled ~ &": {
    cursor: "not-allowed",
    opacity: 0.5,
  },
}));

export const Label = ({ ...props }: LabelProps) => {
  return <LabelRoot data-slot="label" {...props} />;
};
