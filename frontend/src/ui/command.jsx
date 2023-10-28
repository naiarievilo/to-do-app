import { Command as CommandPrimitive } from "cmdk";
import { forwardRef } from "react";
import { PropTypes } from "prop-types";
import { Search } from "lucide-react";

import { cn } from "@/lib/utils.js";
import { Dialog, DialogContent } from "./dialog.jsx";

const Command = forwardRef(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      `flex h-full w-full flex-col overflow-hidden rounded-md bg-white
      text-slate-950`,
      className,
    )}
    {...props}
  />
));
Command.displayName = CommandPrimitive.displayName;
Command.propTypes = {
  className: PropTypes.string,
  props: PropTypes.obj,
};

const CommandDialog = ({ children, ...props }) => {
  return (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0 shadow-lg">
        <Command
          className="[&_[cmdk-group-heading]]:px-2
          [&_[cmdk-group-heading]]:font-medium
          [&_[cmdk-group-heading]]:text-slate-500
          [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0
          [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5
          [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12
          [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5
          [&_[cmdk-item]_svg]:w-5"
        >
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
};
CommandDialog.propTypes = {
  children: PropTypes.array,
  props: PropTypes.obj,
};

const CommandInput = forwardRef(({ className, ...props }, ref) => (
  <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        `flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none
        placeholder:text-slate-500 disabled:cursor-not-allowed
        disabled:opacity-50`,
        className,
      )}
      {...props}
    />
  </div>
));
CommandInput.displayName = CommandPrimitive.Input.displayName;
CommandInput.propTypes = {
  className: PropTypes.string,
  props: PropTypes.obj,
};

const CommandList = forwardRef(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
    {...props}
  />
));
CommandList.displayName = CommandPrimitive.List.displayName;
CommandList.propTypes = {
  className: PropTypes.string,
  props: PropTypes.obj,
};

const CommandEmpty = forwardRef((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="py-6 text-center text-sm"
    {...props}
  />
));
CommandEmpty.displayName = CommandPrimitive.Empty.displayName;
CommandEmpty.propTypes = {
  props: PropTypes.obj,
};

const CommandGroup = forwardRef(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      `overflow-hidden p-1 text-slate-950 [&_[cmdk-group-heading]]:px-2
      [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs
      [&_[cmdk-group-heading]]:font-medium
      [&_[cmdk-group-heading]]:text-slate-500`,
      className,
    )}
    {...props}
  />
));
CommandGroup.displayName = CommandPrimitive.Group.displayName;
CommandGroup.propTypes = {
  className: PropTypes.string,
  props: PropTypes.obj,
};

const CommandSeparator = forwardRef(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 h-px bg-slate-200", className)}
    {...props}
  />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;
CommandSeparator.propTypes = {
  className: PropTypes.string,
  props: PropTypes.obj,
};

const CommandItem = forwardRef(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      `relative flex cursor-default select-none items-center rounded-sm px-2
      py-1.5 text-sm outline-none aria-selected:bg-slate-100
      aria-selected:text-slate-900 data-[disabled]:pointer-events-none
      data-[disabled]:opacity-50`,
      className,
    )}
    {...props}
  />
));
CommandItem.displayName = CommandPrimitive.Item.displayName;
CommandItem.propTypes = {
  className: PropTypes.string,
  props: PropTypes.obj,
};

const CommandShortcut = ({ className, ...props }) => {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-slate-500",
        className,
      )}
      {...props}
    />
  );
};
CommandShortcut.displayName = "CommandShortcut";
CommandShortcut.propTypes = {
  className: PropTypes.string,
  props: PropTypes.obj,
};

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};
