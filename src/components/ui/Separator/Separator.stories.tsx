import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect } from "storybook/test";

import { Separator } from "./Separator";

const meta = {
  title: "Components/Separator",
  component: Separator,
  render: (args) => (
    <div style={{ height: "100px", width: "100px" }}>
      <Separator {...args} />
    </div>
  ),
} satisfies Meta<typeof Separator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: {
    orientation: "horizontal",
    decorative: false,
  },
  play: async ({ canvas }) => {
    const separator = await canvas.findByRole("separator", { hidden: true });
    expect(separator).toHaveAttribute("data-orientation", "horizontal");
  },
};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
    decorative: false,
  },
  play: async ({ canvas }) => {
    const separator = await canvas.findByRole("separator", { hidden: true });
    expect(separator).toHaveAttribute("data-orientation", "vertical");
  },
};
