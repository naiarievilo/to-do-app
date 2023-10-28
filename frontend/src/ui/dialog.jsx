import * as DialogPrimitive from "@radix-ui/react-dialog";
import { forwardRef } from "react";
import { PropTypes } from "prop-types";
import { X } from "lucide-react";

import { cn } from "@/lib/utils.js";

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogClose = DialogPrimitive.Close;

const DialogOverlay = forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      `fixed inset-0 z-50 bg-white/80 backdrop-blur-sm
      data-[state=open]:animate-in data-[state=closed]:animate-out
      data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0`,
      className,
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
DialogOverlay.propTypes = {
  className: PropTypes.string,
  props: PropTypes.obj,
};

const DialogContent = forwardRef(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        `fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg
          translate-x-[-50%] translate-y-[-50%] gap-4 border border-slate-200
          bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in
          data-[state=closed]:animate-out data-[state=closed]:fade-out-0
          data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95
          data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2
          data-[state=closed]:slide-out-to-top-[48%]
          data-[state=open]:slide-in-from-left-1/2
          data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full`,
        className,
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close
        className="absolute right-4 top-4 rounded-sm opacity-70
          ring-offset-white transition-opacity hover:opacity-100
          focus:outline-none focus:ring-2 focus:ring-slate-950
          focus:ring-offset-2 disabled:pointer-events-none
          data-[state=open]:bg-slate-100 data-[state=open]:text-slate-500"
      >
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;
DialogContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.array,
  props: PropTypes.obj,
};

const DialogHeader = ({ className, ...props }) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className,
    )}
    {...props}
  />
);
DialogHeader.displayName = "DialogHeader";
DialogHeader.propTypes = {
  className: PropTypes.string,
  props: PropTypes.obj,
};

const DialogFooter = ({ className, ...props }) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className,
    )}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";
DialogFooter.propTypes = {
  className: PropTypes.string,
  props: PropTypes.obj,
};

const DialogTitle = forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className,
    )}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
DialogTitle.propTypes = {
  className: PropTypes.string,
  props: PropTypes.obj,
};

const DialogDescription = forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-slate-500", className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;
DialogDescription.propTypes = {
  className: PropTypes.string,
  props: PropTypes.obj,
};

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};