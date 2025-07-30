import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "../Button";
import { useAppForm } from "../Form";
import { Input } from "../Input";

const meta = {
  title: "Components/Form",
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const form = useAppForm({
      defaultValues: {
        name: "",
        email: "",
        password: "",
      },
    });

    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        style={{ display: "grid", gap: "1rem", width: "300px" }}
      >
        <form.AppField
          name="name"
          validators={{
            onChange: ({ value }) => (!value ? { message: "Name is required" } : undefined),
          }}
        >
          {(field) => (
            <field.FormItem>
              <field.FormLabel>Name</field.FormLabel>
              <field.FormControl>
                <Input
                  type="text"
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </field.FormControl>
              <field.FormMessage />
            </field.FormItem>
          )}
        </form.AppField>

        <form.AppField
          name="email"
          validators={{
            onChange: ({ value }) => (!value ? { message: "Email is required" } : undefined),
          }}
        >
          {(field) => (
            <field.FormItem>
              <field.FormLabel>Email</field.FormLabel>
              <field.FormControl>
                <Input
                  type="email"
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </field.FormControl>
              <field.FormMessage />
            </field.FormItem>
          )}
        </form.AppField>

        <form.AppField
          name="password"
          validators={{
            onChange: ({ value }) => (!value ? { message: "Password is required" } : undefined),
          }}
        >
          {(field) => (
            <field.FormItem>
              <field.FormLabel>Password</field.FormLabel>
              <field.FormControl>
                <Input
                  type="password"
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </field.FormControl>
              <field.FormDescription>Enter your password.</field.FormDescription>
              <field.FormMessage />
            </field.FormItem>
          )}
        </form.AppField>

        <form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
          {([canSubmit, isSubmitting]) => {
            return (
              <Button disabled={!canSubmit || isSubmitting} type="submit" variant="outline">
                Submit
              </Button>
            );
          }}
        </form.Subscribe>
      </form>
    );
  },
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole("button", { name: /submit/i }));
    await canvas.findByText("Name is required");
    await canvas.findByText("Email is required");
    await canvas.findByText("Password is required");

    await userEvent.type(canvas.getByLabelText("Name"), "My Name");
    await userEvent.type(canvas.getByLabelText("Email"), "myemail@mail.com");
    await userEvent.type(canvas.getByLabelText("Password"), "mypassword");
    await userEvent.click(canvas.getByRole("button", { name: /submit/i }));
  },
};
