import { forwardRef } from "react";
import { PropTypes } from "prop-types";

import { cn } from "@/lib/utils.js";

const Input = forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        `flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2
        text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm
        file:font-medium placeholder:text-slate-500 focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-slate-950
        focus-visible:ring-offset-2 disabled:cursor-not-allowed
        disabled:opacity-50`,
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";
Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  props: PropTypes.obj,
};

export { Input };
