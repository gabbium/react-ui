import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn } from "storybook/test";

import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    children: {
      control: false,
      description: "Content inside the Button",
    },
    onClick: {
      control: false,
      description: "Callback function called when the button is clicked",
    },
  },
  args: {
    onClick: fn(),
    children: "Button",
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    size: "md",
  },
  play: async ({ args, canvas, userEvent }) => {
    const button = canvas.getByRole("button", { name: `${args.children}` });
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalled();
  },
};

export const Ghost: Story = {
  ...Primary,
  args: {
    variant: "ghost",
  },
};

export const Destructive: Story = {
  ...Primary,
  args: {
    variant: "destructive",
  },
};

export const Outline: Story = {
  ...Primary,
  args: {
    variant: "outline",
  },
};

export const Secondary: Story = {
  ...Primary,
  args: {
    variant: "secondary",
  },
};

export const Link: Story = {
  ...Primary,
  args: {
    variant: "link",
  },
};

export const Icon: Story = {
  ...Primary,
  args: {
    variant: "primary",
    size: "icon",
    children: "🔗",
  },
};
