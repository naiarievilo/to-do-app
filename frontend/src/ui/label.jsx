import { forwardRef } from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { PropTypes } from "prop-types";

import { cn } from "@/lib/utils.js";

const Label = forwardRef(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      `text-md leading-none peer-disabled:cursor-not-allowed
      peer-disabled:opacity-70`,
      className,
    )}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;
Label.propTypes = {
  className: PropTypes.string,
  props: PropTypes.obj,
};

export { Label };
