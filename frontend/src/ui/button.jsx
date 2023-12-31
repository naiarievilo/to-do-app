import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot"
import { PropTypes } from "prop-types";

import { cn } from "@/lib/utils.js";
import { buttonVariants } from "./variants/button.js";

const Button = forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"
Button.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  asChild: PropTypes.bool,
  props: PropTypes.obj
};

export { Button }
