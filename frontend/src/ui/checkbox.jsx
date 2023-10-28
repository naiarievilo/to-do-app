import { Check } from "lucide-react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { forwardRef } from "react";
import { PropTypes } from "prop-types";

import { cn } from "@/lib/utils.js";

const Checkbox = forwardRef(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      `peer h-4 w-4 shrink-0 rounded-sm border border-slate-400/90
      ring-offset-white focus-visible:outline-none focus-visible:ring-1
      focus-visible:ring-slate-600 focus-visible:ring-offset-1
      disabled:cursor-not-allowed disabled:opacity-50
      data-[state=checked]:border-blue-400 data-[state=checked]:bg-blue-400
      data-[state=checked]:text-slate-50`,
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;
Checkbox.propTypes = {
  className: PropTypes.string,
  props: PropTypes.obj,
};

export { Checkbox };
