import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function HudFrame({
  children,
  className,
  cornerSize = 16,
}: {
  children: ReactNode;
  className?: string;
  cornerSize?: number;
}) {
  const s = `${cornerSize}px`;
  const corner =
    "absolute w-4 h-4 border-primary/80 [filter:drop-shadow(0_0_6px_var(--primary))]";
  return (
    <div className={cn("relative", className)}>
      <span
        className={cn(corner, "top-0 left-0 border-t-2 border-l-2")}
        style={{ width: s, height: s }}
      />
      <span
        className={cn(corner, "top-0 right-0 border-t-2 border-r-2")}
        style={{ width: s, height: s }}
      />
      <span
        className={cn(corner, "bottom-0 left-0 border-b-2 border-l-2")}
        style={{ width: s, height: s }}
      />
      <span
        className={cn(corner, "bottom-0 right-0 border-b-2 border-r-2")}
        style={{ width: s, height: s }}
      />
      {children}
    </div>
  );
}
