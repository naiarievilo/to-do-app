import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronRight } from "lucide-react";
import { forwardRef } from "react";
import { PropTypes } from "prop-types";

import { cn } from "@/lib/utils.js";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";
AccordionItem.propTypes = {
  className: PropTypes.string,
  props: PropTypes.obj,
};

const AccordionTrigger = forwardRef(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Header className="flex border-none">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          `flex flex-1 items-center py-4 text-center font-medium
        transition-all [&[data-state=open]>svg]:rotate-90`,
          className,
        )}
        {...props}
      >
        <ChevronRight className="mr-1 h-5 w-5 shrink-0 transition-transform duration-200" />
        {children}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  ),
);
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
AccordionTrigger.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  props: PropTypes.obj,
};

const AccordionContent = forwardRef(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
      ref={ref}
      className={cn(
        `overflow-hidden text-sm transition-all
      data-[state=closed]:animate-accordion-up
      data-[state=open]:animate-accordion-down`,
        className,
      )}
      {...props}
    >
      <div className="pb-4 pt-0">{children}</div>
    </AccordionPrimitive.Content>
  ),
);
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
AccordionContent.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  props: PropTypes.obj,
};

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
