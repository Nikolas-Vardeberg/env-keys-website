import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Collapse } from "./collapse";

const meta = {
  title: "Atoms/Collapse",
  component: Collapse,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Collapse>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true,
    children: (
      <p>This content is revealed when the collapse is open.</p>
    ),
  },
};


