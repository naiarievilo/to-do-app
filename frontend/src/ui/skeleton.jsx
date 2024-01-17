import { PropTypes } from "prop-types";

import { cn } from "@/lib/utils.js";

function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn("bg-slate-200/75 animate-pulse rounded-md", className)}
      {...props}
    />
  );
}
Skeleton.propTypes = {
  className: PropTypes.string,
  props: PropTypes.obj,
};

export { Skeleton };
