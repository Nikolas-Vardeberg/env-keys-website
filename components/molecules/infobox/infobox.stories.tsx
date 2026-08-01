import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";
import { Infobox } from "./infobox";

const meta = {
  title: "Molecules/Infobox",
  component: Infobox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Infobox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Primary infobox",
    description: "Beskrivelse av en infobox",
  },
};

export const Yellow: Story = {
  args: {
    title: "Yellow infobox",
    description: "Beskrivelse av en infobox",
    variant: "yellow",
  },
};

export const Red: Story = {
  args: {
    title: "Red infobox",
    description: "Beskrivelse av en infobox",
    variant: "red",
  },
};


