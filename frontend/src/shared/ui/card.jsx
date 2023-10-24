import { forwardRef } from "react";
import { PropTypes } from "prop-types";

import { cn } from "@/lib/utils.js";

const Card = forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      `rounded-lg border border-slate-200 bg-white text-slate-950 shadow-sm
      dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50`,
      className,
    )}
    {...props}
  />
));
Card.displayName = "Card";
Card.propTypes = {
  className: PropTypes.string,
  props: PropTypes.obj,
};

const CardHeader = forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";
CardHeader.propTypes = {
  className: PropTypes.string,
  props: PropTypes.obj,
};

const CardTitle = forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className,
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";
CardTitle.propTypes = {
  className: PropTypes.string,
  props: PropTypes.obj,
};

const CardDescription = forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-slate-500 dark:text-slate-400", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";
CardDescription.propTypes = {
  className: PropTypes.string,
  props: PropTypes.obj,
};

const CardContent = forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";
CardContent.propTypes = {
  className: PropTypes.string,
  props: PropTypes.obj,
};

const CardFooter = forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";
CardFooter.propTypes = {
  className: PropTypes.string,
  props: PropTypes.obj,
};

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
