import styled from "@emotion/styled";
import type { ComponentProps } from "react";

import { useFieldContext } from "../FormItemContext";

interface FormMessageProps extends ComponentProps<"p"> {}

const StyledFormMessage = styled("p")(({ theme }) => ({
  color: `hsl(${theme.colors.destructive})`,
  fontSize: theme.typography.variants.sm.fontSize,
  lineHeight: theme.typography.variants.sm.lineHeight,
}));

export const FormMessage = ({ ...props }: FormMessageProps) => {
  const { errors, formMessageId } = useFieldContext();

  const body = errors.length ? String(errors.at(0)?.message ?? "") : props.children;

  if (!body) return null;

  return (
    <StyledFormMessage data-slot="form-message" id={formMessageId} {...props}>
      {body}
    </StyledFormMessage>
  );
};
