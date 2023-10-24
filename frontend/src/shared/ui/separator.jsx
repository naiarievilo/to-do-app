import { forwardRef } from "react";
import { PropTypes } from "prop-types";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "@/lib/utils.js";

const Separator = forwardRef(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref,
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-slate-200 dark:bg-slate-800",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className,
      )}
      {...props}
    />
  ),
);
Separator.displayName = SeparatorPrimitive.Root.displayName;
Separator.propTypes = {
  className: PropTypes.string,
  decorative: PropTypes.bool,
  orientation: PropTypes.string,
  props: PropTypes.obj
};

export { Separator };
