import { Circle } from "lucide-react";
import { forwardRef } from "react";
import { PropTypes } from "prop-types";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

import { cn } from "@/lib/utils.js";

const RadioGroup = forwardRef(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;
RadioGroup.propTypes = {
  className: PropTypes.string,
  props: PropTypes.obj
};

const RadioGroupItem = forwardRef(
  ({ className, children, ...props }, ref) => {
    return (
      <RadioGroupPrimitive.Item
        ref={ref}
        className={cn(
          `aspect-square h-4 w-4 rounded-full border border-slate-900
          text-slate-900 ring-offset-white focus:outline-none
          focus-visible:ring-2 focus-visible:ring-slate-950
          focus-visible:ring-offset-2 disabled:cursor-not-allowed
          disabled:opacity-50 dark:border-slate-50 dark:text-slate-50
          dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300`,
          className,
        )}
        {...props}
      >
        <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
          <Circle className="h-2.5 w-2.5 fill-current text-current" />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
    );
  },
);
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;
RadioGroupItem.propTypes = {
  children: PropTypes.array,
  className: PropTypes.string,
  props: PropTypes.obj
};

export { RadioGroup, RadioGroupItem };
