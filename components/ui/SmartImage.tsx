"use client";
import Image, { ImageProps } from "next/image";
import { useState } from "react";
import { Skeleton } from "./Skeleton";
import { cn } from "@/lib/cn";

export function SmartImage({ className, ...props }: ImageProps & { className?: string }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={cn("relative", className)}>
      {!loaded && <Skeleton className="absolute inset-0" rounded="rounded-2xl" />}
      <Image
        {...props}
        onLoad={() => setLoaded(true)}
        className={cn("transition-opacity duration-500", loaded ? "opacity-100" : "opacity-0")}
      />
    </div>
  );
}
