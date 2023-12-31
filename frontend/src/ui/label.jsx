import { forwardRef } from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { PropTypes } from "prop-types";

const Label = forwardRef(({ className, ...props }, ref) => (
  <LabelPrimitive.Root ref={ref} className={className} {...props} />
));
Label.displayName = LabelPrimitive.Root.displayName;
Label.propTypes = {
  className: PropTypes.string,
  props: PropTypes.obj,
};

export { Label };
