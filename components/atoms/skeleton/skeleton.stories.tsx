import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {Skeleton} from "@/components/atoms/skeleton/skeleton";

const meta = {
  title: "Atoms/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-40">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    height: 100,
    className: "w-full",
  },
};

