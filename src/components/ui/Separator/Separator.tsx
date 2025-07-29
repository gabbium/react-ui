import styled from "@emotion/styled";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import type { ComponentProps } from "react";

interface SeparatorProps extends ComponentProps<typeof SeparatorPrimitive.Root> {
  /** Defines the direction of the separator. */
  orientation?: "horizontal" | "vertical";

  /** Hides the separator from assistive technologies.*/
  decorative?: boolean;
}

const StyledSeparator = styled(SeparatorPrimitive.Root)(({ theme }) => ({
  backgroundColor: `hsl(${theme.colors.border})`,
  flexShrink: 0,

  "&[data-orientation='horizontal']": {
    height: "1px",
    width: "100%",
  },

  "&[data-orientation='vertical']": {
    width: "1px",
    height: "100%",
  },
}));

export const Separator = ({ orientation = "horizontal", decorative = true, ...props }: SeparatorProps) => {
  return <StyledSeparator data-slot="separator" decorative={decorative} orientation={orientation} {...props} />;
};
