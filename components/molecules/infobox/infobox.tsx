"use client"

import {ComponentProps} from "react";
import {infoboxVariants} from "@/components/molecules/infobox/infobox.variants";
import {cn} from "@/utils/classes";
import {Collapse} from "@/components/atoms";

type Props = ComponentProps<"div"> & {
  open?: boolean;
  title: string;
  description?: string;
  variant?: "green" | "yellow" | "red";
}

const Infobox = ({ title, description, variant, open = true, className, ...props}: Props) => {
  return(
    <Collapse open={open}>
      <div className={cn(infoboxVariants({ variant, className }))} {...props}>
        <h5 className="font-medium">{title}</h5>
        {description && <p>{description}</p>}
      </div>
    </Collapse>
  )
}

export { Infobox}
