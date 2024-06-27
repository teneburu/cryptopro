import { cva } from "class-variance-authority";

export const linkVariants = cva(
  "inline-flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "group border border-stone-900 font-semibold rounded-full border-input text-stone-900 hover:text-stone-600 hover:border-stone-600",
        nooutline:
          "group font-semibold text-stone-900 hover:text-stone-600",
        white:
          "group font-semibold rounded-full bg-stone-50 text-stone-900 hover:text-stone-600 hover:border-stone-500",
        black:
          "group font-semibold rounded-full bg-stone-900 text-stone-100 hover:bg-stone-400",
        secondary:
          "bg-stone-900 font-semibold text-white text hover:bg-stone-800/90",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-7 text-xs py-1 px-1.5 whitespace-nowrap tracking-tighter rounded-full",
        lg: "h-10 px-7 rounded-full text-lg font-bold",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
