import styled from "@emotion/styled";
import { useId, type ComponentProps } from "react";

import { FormItemContext } from "../FormItemContext";

interface FormItemProps extends ComponentProps<"div"> {}

const StyledFormItem = styled("div")(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(2),
}));

export const FormItem = ({ ...props }: FormItemProps) => {
  const id = useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <StyledFormItem data-slot="form-item" {...props} />
    </FormItemContext.Provider>
  );
};
