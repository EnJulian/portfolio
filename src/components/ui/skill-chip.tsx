import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const skillChipVariants = cva(
  "inline-flex items-center rounded text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  {
    variants: {
      variant: {
        default:
          "bg-secondary px-2 py-1 text-secondary-foreground hover:bg-surface-muted hover:text-foreground",
        interactive:
          "cursor-pointer border border-transparent bg-secondary px-1.5 py-0.5 text-secondary-foreground hover:border-border hover:bg-surface-muted hover:text-foreground",
        selected:
          "bg-surface-muted px-1.5 py-0.5 text-foreground",
        project:
          "cursor-pointer border border-border/70 bg-surface-muted px-1.5 py-0.5 font-medium text-foreground shadow-sm hover:border-foreground/20 hover:bg-surface-elevated hover:text-foreground",
        projectSelected:
          "border border-brand/50 bg-surface-elevated px-1.5 py-0.5 font-medium text-foreground shadow-sm",
        projectOverflow:
          "cursor-pointer border border-border/60 bg-surface-muted/90 px-1.5 py-0.5 text-muted-foreground hover:border-foreground/20 hover:bg-surface-elevated hover:text-foreground",
        filter:
          "inline-flex items-center bg-secondary px-2 py-0.5 text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface SkillChipProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof skillChipVariants> {
  as?: "a" | "span" | "button";
}

export function SkillChip({
  className,
  variant,
  as = "a",
  children,
  ...props
}: SkillChipProps) {
  const classes = cn(skillChipVariants({ variant, className }));

  if (as === "span") {
    return (
      <span className={classes}>
        {children}
      </span>
    );
  }

  if (as === "button") {
    const { href: _href, target: _target, rel: _rel, ...buttonProps } = props;
    return (
      <button
        type="button"
        className={classes}
        {...(buttonProps as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    );
  }

  return (
    <a
      className={classes}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  );
}

export { skillChipVariants };
