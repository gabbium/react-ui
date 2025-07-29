import styled from "@emotion/styled";
import type { ComponentProps } from "react";

import { useFieldContext } from "../FormItemContext";

interface FormDescriptionProps extends ComponentProps<"p"> {}

const StyledFormDescription = styled("p")(({ theme }) => ({
  color: `hsl(${theme.colors.mutedForeground})`,
  fontSize: theme.typography.variants.sm.fontSize,
  lineHeight: theme.typography.variants.sm.lineHeight,
}));

export const FormDescription = ({ ...props }: FormDescriptionProps) => {
  const { formDescriptionId } = useFieldContext();

  return <StyledFormDescription data-slot="form-description" id={formDescriptionId} {...props} />;
};
