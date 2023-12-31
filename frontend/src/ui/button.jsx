import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { PropTypes } from "prop-types";

const Button = forwardRef(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return <Comp className={className} ref={ref} {...props} />;
});
Button.displayName = "Button";
Button.propTypes = {
  className: PropTypes.string,
  asChild: PropTypes.bool,
  props: PropTypes.obj,
};

export { Button };
