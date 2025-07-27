import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect } from "storybook/test";

import { Input } from "./Input";

const meta = {
  title: "Components/Input",
  component: Input,
  argTypes: {
    placeholder: {
      control: false,
      description: "Placeholder text for the input",
    },
  },
  args: {
    placeholder: "Type something...",
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ args, canvas, userEvent }) => {
    const input = canvas.getByPlaceholderText(args.placeholder!);
    await userEvent.type(input, "Hello World");
    await expect(input).toHaveValue("Hello World");
  },
};

export const Invalid: Story = {
  ...Default,
  args: {
    "aria-invalid": true,
  },
};

export const Disabled: Story = {
  ...Default,
  args: {
    disabled: true,
  },
  play: async ({ args, canvas }) => {
    const input = canvas.getByPlaceholderText(args.placeholder!);
    await expect(input).toBeDisabled();
  },
};
