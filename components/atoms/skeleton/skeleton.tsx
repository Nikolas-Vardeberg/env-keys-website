import { ComponentProps } from "react";
import {cn} from "@/utils/classes";

type Props = ComponentProps<"div"> & {
  height?: number;
}

const Skeleton = ({ height, className, ...props }: Props) => {
  return <div className={cn("animate-pulse bg-foreground/20", className)} style={{ height }} {...props} />;
};

export { Skeleton };
