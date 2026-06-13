import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const surfaceCardVariants = cva("border border-border text-card-foreground", {
  variants: {
    variant: {
      default: "rounded-lg bg-card p-4",
      glass:
        "glass-shine-effect rounded-md bg-gradient-to-b from-card to-secondary/40 p-4 transition-all hover:-translate-y-0.5 hover:border-foreground/20 hover:bg-secondary/50 hover:shadow-md",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface SurfaceCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof surfaceCardVariants> {
  hover?: boolean;
  href?: string;
}

export function SurfaceCard({
  className,
  variant,
  hover = true,
  href,
  children,
  ...props
}: SurfaceCardProps) {
  const classes = cn(
    surfaceCardVariants({ variant }),
    variant === "default" &&
      hover &&
      "transition-colors hover:border-foreground/20",
    href && "block cursor-pointer",
    className,
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

export { surfaceCardVariants };
