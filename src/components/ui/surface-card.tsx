import { cn } from "@/lib/utils";

interface SurfaceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export function SurfaceCard({
  className,
  hover = true,
  children,
  ...props
}: SurfaceCardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-card p-4 text-card-foreground",
        hover && "transition-colors hover:border-foreground/20",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
