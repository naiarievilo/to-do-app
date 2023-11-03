import { cva } from "class-variance-authority";
import { forwardRef } from "react";
import { PropTypes } from "prop-types";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils.js";

const buttonVariants = cva(
  `inline-flex items-center justify-center whitespace-nowrap transition-colors
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-100
  disabled:pointer-events-none disabled:opacity-50`,
  {
    variants: {
      variant: {
        default: `bg-rose-500 text-slate-50 hover:bg-rose-500/90`,
        destructive: `bg-red-500 text-slate-50 hover:bg-red-500/90`,
        outline: `border border-slate-200 bg-white hover:bg-slate-100
          hover:text-slate-900`,
        secondary: `bg-slate-100 text-slate-900 hover:bg-slate-100/80`,
        ghost: `hover:bg-slate-100 hover:text-slate-900`,
        link: `text-slate-900 underline-offset-4 hover:underline`,
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
  },
);

const Button = forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
Button.propTypes = {
  asChild: PropTypes.bool,
  className: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  props: PropTypes.obj,
};

export { Button };
