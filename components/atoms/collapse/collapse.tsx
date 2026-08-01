import { ReactNode } from "react";
import {cn} from "@/utils/classes";

type Props = {
  open: boolean;
  children: ReactNode;
  className?: string;
};

export const Collapse = ({ open, children, className }: Props) => {
  return (
    <div
      aria-hidden={!open}
      inert={!open ? true : undefined}
      className={cn(
        "grid transition-all ease-in-out duration-300",
        open ? "grid-rows-[1fr] opacity-100 visible" : "grid-rows-[0fr] opacity-0 invisible",
        className
      )}>
      <div className="overflow-hidden">{children}</div>
    </div>
  );
};
