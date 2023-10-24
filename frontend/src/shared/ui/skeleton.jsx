import { PropTypes } from "prop-types";

import { cn } from "@/lib/utils.js";

function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-slate-100 dark:bg-slate-800",
        className,
      )}
      {...props}
    />
  );
}
Skeleton.propTypes = {
  className: PropTypes.string,
  props: PropTypes.obj
}

export { Skeleton };
