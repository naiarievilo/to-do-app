import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center tracking-wide whitespace-nowrap rounded-md text-md ring-offset-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-700 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-blue-600 text-slate-50 hover:bg-blue-500",
        destructive: "bg-rose-600 text-slate-50 hover:bg-rose-500",
        outline:
          "border border-blue-600 bg-white text-blue-600 hover:bg-slate-100 hover:text-blue-500 hover:border-blue-500",
        secondary: "bg-blue-300 text-blue-600 font-medium hover:bg-blue-200",
        ghost: "hover:bg-slate-100 hover:text-slate-900",
        link: "text-slate-800 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export { buttonVariants };
