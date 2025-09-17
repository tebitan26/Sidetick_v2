import { cn } from "@/lib/utils";

export function Skeleton({
  className,
  rounded = "rounded-xl",
}: { className?: string; rounded?: string }) {
  return (
    <div
      aria-hidden
      className={cn("relative isolate overflow-hidden bg-gray-200/40", rounded, className)}
    >
      <div className="absolute inset-0 sidetick-shimmer" />
    </div>
  );
}
