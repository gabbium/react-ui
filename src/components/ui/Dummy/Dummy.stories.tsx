import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect } from "storybook/test";

import { Dummy } from "./Dummy";

const meta = {
  title: "Components/Dummy",
  component: Dummy,
} satisfies Meta<typeof Dummy>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText("I'm a totally useless component!")).toBeInTheDocument();
  },
};
