import { cva } from "class-variance-authority";

export const infoboxVariants = cva("text-black border-none p-2 flex flex-col gap-1 rounded-md", {
  variants: {
    variant: {
      green: "bg-green-300",
      yellow: "bg-yellow-300",
      red: "bg-red-300",
    },
  },
  defaultVariants: {
    variant: "green",
  },
});
