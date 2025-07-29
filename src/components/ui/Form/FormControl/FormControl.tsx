import { Slot } from "@radix-ui/react-slot";
import type { ComponentProps } from "react";

import { useFieldContext } from "../FormItemContext";

interface FormControlProps extends ComponentProps<typeof Slot> {}

export const FormControl = ({ ...props }: FormControlProps) => {
  const { errors, formItemId, formDescriptionId, formMessageId } = useFieldContext();

  return (
    <Slot
      data-slot="form-control"
      id={formItemId}
      aria-describedby={!errors.length ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`}
      aria-invalid={!!errors.length}
      {...props}
    />
  );
};
