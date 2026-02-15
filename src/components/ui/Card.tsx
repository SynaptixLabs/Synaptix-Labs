import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Card({ className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-md)] border border-border bg-surface p-8 transition-all hover:border-border-active hover:shadow-card",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
