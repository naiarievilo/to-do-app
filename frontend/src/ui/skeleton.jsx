import { PropTypes } from "prop-types";

import { cn } from "@/lib/utils.js";

function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-slate-200/7", className)}
      {...props}
    />
  );
}
Skeleton.propTypes = {
  className: PropTypes.string,
  props: PropTypes.obj,
};

export { Skeleton };
