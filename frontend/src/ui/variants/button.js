import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center tracking-wide whitespace-nowrap rounded-md text-md ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-700 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-blue-500 text-slate-50 hover:bg-blue-600/90",
        destructive: "bg-rose-600 text-slate-50 hover:bg-red-700/90",
        outline:
          "border border-blue-500 bg-white text-blue-500 hover:bg-slate-100 hover:text-blue-600/90 hover:border-blue-600/90",
        secondary: "bg-blue-100 text-blue-500 font-medium hover:bg-blue-100/80",
        ghost: "hover:bg-slate-100 hover:text-slate-900",
        link: "text-slate-900 underline-offset-4 hover:underline",
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
