import styled from "@emotion/styled";
import { useId, useMemo, type ComponentProps } from "react";

import { FormItemContext } from "../FormItemContext";

interface FormItemProps extends ComponentProps<"div"> {}

const StyledFormItem = styled("div")(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(2),
}));

export const FormItem = ({ ...props }: FormItemProps) => {
  const id = useId();

  const value = useMemo(() => ({ id }), [id]);

  return (
    <FormItemContext.Provider value={value}>
      <StyledFormItem data-slot="form-item" {...props} />
    </FormItemContext.Provider>
  );
};
