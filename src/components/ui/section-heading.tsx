import { cn } from "@/lib/utils";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3";
  size?: "base" | "lg" | "xl";
}

export function SectionHeading({
  className,
  as: Tag = "h2",
  size = "base",
  children,
  ...props
}: SectionHeadingProps) {
  const sizeClasses = {
    base: "text-header-base font-medium",
    lg: "text-header-lg font-semibold font-display",
    xl: "text-header-xl font-bold font-display tracking-wide",
  };

  return (
    <Tag
      className={cn(
        "mb-4 text-foreground",
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
