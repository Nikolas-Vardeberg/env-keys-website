"use client"

import {ComponentProps} from "react";
import {buttonVariants} from "@/components/atoms/button/button.variants";

type Props = ComponentProps<"button"> & {
  variant?: "primary" | "secondary";
  label: string;
  disabled?: boolean;
}

const Button = ({ variant, label, className, disabled, ...props}: Props) => {
  return(
    <button disabled={disabled} className={buttonVariants({ variant, className })} {...props}>
      {label}
    </button>
  )
}

export { Button }
