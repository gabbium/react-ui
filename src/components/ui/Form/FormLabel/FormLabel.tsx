import styled from "@emotion/styled";
import type { ComponentProps } from "react";

import { Label } from "../../Label";
import { useFieldContext } from "../FormItemContext";

interface FormLabelProps extends ComponentProps<typeof Label> {}

const StyledFormLabel = styled(Label)(({ theme }) => ({
  "&[data-error='true']": {
    color: `hsl(${theme.colors.destructive})`,
  },
}));

export const FormLabel = ({ ...props }: FormLabelProps) => {
  const { formItemId, errors } = useFieldContext();

  return <StyledFormLabel data-slot="form-label" data-error={!!errors.length} htmlFor={formItemId} {...props} />;
};
