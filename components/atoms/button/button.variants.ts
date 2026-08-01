import { cva } from "class-variance-authority";

export const buttonVariants = cva("inline-flex disabled:cursor-not-allowed items-center justify-center border-none outline-none cursor-pointer font-medium [&_svg]:size-4 gap-2 focus-visible:ring-2 focus-visible:ring-focus rounded-lg", {
  variants: {
    variant: {
      primary: "bg-primary text-black disabled:bg-primary/60",
      secondary: "bg-white text-black border-primary disabled:bg-white/60",
    },
    size: {
      md: "px-4 py-3 text-base",
      sm: "px-2 py-2 text-sm",
      lg: "",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "sm",
  },
});
