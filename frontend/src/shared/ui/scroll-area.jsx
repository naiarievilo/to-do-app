import { forwardRef } from "react";
import { PropTypes } from "prop-types";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

import { cn } from "@/lib/utils.js";

const ScrollArea = forwardRef(
  ({ className, children, ...props }, ref) => (
    <ScrollAreaPrimitive.Root
      ref={ref}
      className={cn("relative overflow-hidden", className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  ),
);
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;
ScrollArea.propTypes = {
  children: PropTypes.array,
  className: PropTypes.string,
  props: PropTypes.obj
};

const ScrollBar = forwardRef(
  ({ className, orientation = "vertical", ...props }, ref) => (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      ref={ref}
      orientation={orientation}
      className={cn(
        "flex touch-none select-none transition-colors",
        orientation === "vertical" &&
          "h-full w-2.5 border-l border-l-transparent p-[1px]",
        orientation === "horizontal" &&
          "h-2.5 flex-col border-t border-t-transparent p-[1px]",
        className,
      )}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        className={cn(
          "relative rounded-full bg-slate-200 dark:bg-slate-800",
          orientation === "vertical" && "flex-1",
        )}
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  ),
);
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;
ScrollBar.propTypes = {
  className: PropTypes.string,
  orientation: PropTypes.string,
  props: PropTypes.obj
};

export { ScrollArea, ScrollBar };
