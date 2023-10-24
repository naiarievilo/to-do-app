import { cva } from "class-variance-authority";
import { forwardRef } from "react";
import { PropTypes } from "prop-types";

import { cn } from "@/lib/utils.js";

const alertVariants = cva(
  `relative w-full rounded-lg border border-slate-200 p-4 [&>svg~*]:pl-7
  [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4
  [&>svg]:text-slate-950 dark:border-slate-800 dark:[&>svg]:text-slate-50`,
  {
    variants: {
      variant: {
        default: "bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-50",
        destructive: `border-red-500/50 text-red-500 dark:border-red-500
          [&>svg]:text-red-500 dark:border-red-900/50 dark:text-red-900
          dark:dark:border-red-900 dark:[&>svg]:text-red-900`,
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Alert = forwardRef(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
));
Alert.displayName = "Alert";
Alert.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.obj,
  props: PropTypes.obj,
};

const AlertTitle = forwardRef(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";
AlertTitle.propTypes = {
  className: PropTypes.string,
  props: PropTypes.obj,
};

const AlertDescription = forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";
AlertDescription.propTypes = {
  className: PropTypes.string,
  props: PropTypes.obj,
};

export { Alert, AlertTitle, AlertDescription };
