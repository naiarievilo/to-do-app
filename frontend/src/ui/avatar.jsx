import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { forwardRef } from "react";
import { PropTypes } from "prop-types";

import { cn } from "@/lib/utils.js";

const Avatar = forwardRef(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className,
    )}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;
Avatar.propTypes = {
  className: PropTypes.string,
  props: PropTypes.obj,
};
const AvatarImage = forwardRef(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
AvatarImage.propTypes = {
  className: PropTypes.string,
  props: PropTypes.obj,
};

const AvatarFallback = forwardRef(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      `flex h-full w-full items-center justify-center rounded-full bg-slate-100`,
      className,
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
AvatarFallback.propTypes = {
  className: PropTypes.string,
  props: PropTypes.obj,
};

export { Avatar, AvatarImage, AvatarFallback };
