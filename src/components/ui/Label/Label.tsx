import styled from "@emotion/styled";
import * as LabelPrimitive from "@radix-ui/react-label";
import type { ComponentProps } from "react";

interface LabelProps extends ComponentProps<typeof LabelPrimitive.Root> {}

const StyledLabel = styled(LabelPrimitive.Root)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  fontSize: theme.typography.variants.sm.fontSize,
  lineHeight: 1,
  fontWeight: theme.typography.weights.medium,
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
  return <StyledLabel data-slot="label" {...props} />;
};
