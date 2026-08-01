"use client"

import {ComponentProps} from "react";
import {cn} from "@/utils/classes";

const Textarea = ({ className, ...props}: ComponentProps<"textarea">) => {
  return(
    <textarea className={cn("min-h-20 resize-none w-full min-w-0 outline-none border-none bg-gray-200 rounded-md py-1 px-2.5 hover:bg-gray-300/80 focus-visible:ring-focus focus-visible:ring-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50")} {...props} />
  )
}

export { Textarea}
