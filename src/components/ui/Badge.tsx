import { cn } from "@/lib/utils";

interface BadgeProps {
  variant?: "default" | "live" | "beta";
  className?: string;
  children: React.ReactNode;
}

const variantStyles = {
  default: {
    wrapper: "border-border bg-surface/80 text-text-secondary",
    dot: "bg-text-muted",
  },
  live: {
    wrapper: "border-success/30 bg-success/10 text-success",
    dot: "bg-success",
  },
  beta: {
    wrapper: "border-accent-cool/30 bg-accent-cool/10 text-accent-cool",
    dot: "bg-accent-cool",
  },
};

export function Badge({
  variant = "default",
  className,
  children,
}: BadgeProps) {
  const styles = variantStyles[variant];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-xs",
        styles.wrapper,
        className
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", styles.dot)} />
      {children}
    </span>
  );
}
