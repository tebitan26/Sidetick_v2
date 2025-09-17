// components/AboutCard.tsx
"use client";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/cn.ts";
import { shimmerDataURL } from "@/lib/shimmer.ts";

type LinkItem = { href: string; label: string; icon?: "linkedin" | "web" };

export default function AboutCard({
  image,
  title,
  subtitle,
  description,
  links = [],
  priority = false,
  className,
}: {
  image: string;
  title: string;
  subtitle?: string;
  description?: string;
  links?: LinkItem[];
  priority?: boolean;
  className?: string;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={cn(
        "group relative h-[380px] md:h-[420px] rounded-2xl shadow-xl",
        "cursor-pointer [perspective:1200px]",
        className
      )}
      onClick={() => setFlipped((s) => !s)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setFlipped((s) => !s);
        }
      }}
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
    >
      {/* inner 3D */}
      <div
        className={cn(
          "absolute inset-0 rounded-2xl transition-transform duration-700 will-change-transform",
          "[transform-style:preserve-3d]",
          flipped ? "[transform:rotateY(180deg)]" : "group-hover:[transform:rotateY(180deg)]"
        )}
      >
        {/* FRONT */}
        <div
          className={cn(
            "absolute inset-0 rounded-2xl overflow-hidden",
            "bg-white/5 border border-white/10 backdrop-blur",
            "[backface-visibility:hidden]"
          )}
        >
          {/* ✅ Correction: utiliser le prop 'image' (string) au lieu de l.src/l.alt */}
          <Image
            src={image}
            alt={title || "Portrait"}
            fill
            priority={priority}
            placeholder="blur"
            blurDataURL={shimmerDataURL(16, 9)}
            sizes="(min-width: 768px) 384px, 90vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
            <div className="text-sm text-white/80">{subtitle}</div>
            <h3 className="text-2xl font-extrabold leading-tight">{title}</h3>
            <p className="mt-2 text-white/75 line-clamp-2">{description}</p>
            <p className="mt-3 text-xs text-white/70">Appuie/Survole pour retourner ↺</p>
          </div>
        </div>

        {/* BACK */}
        <div
          className={cn(
            "absolute inset-0 rounded-2xl p-5 md:p-6",
            "border border-white/10",
            "bg-[radial-gradient(80%_120%_at_20%_0%,#6E56CF_0%,rgba(110,86,207,0)_60%),radial-gradient(100%_120%_at_100%_100%,#FF7A00_0%,rgba(255,122,0,0)_60%)]",
            "text-white",
            "[transform:rotateY(180deg)] [backface-visibility:hidden]"
          )}
        >
          <h3 className="text-2xl font-extrabold leading-tight">{title}</h3>
          {subtitle && <div className="text-sm text-white/85 mt-1">{subtitle}</div>}

          <div className="mt-3 pr-1 h-[220px] md:h-[260px] overflow-auto text-white/90">
            {description ? (
              <p className="leading-relaxed whitespace-pre-line">{description}</p>
            ) : (
              <p className="leading-relaxed text-white/80">Plus d’infos à venir. Reste branché·e 🔥</p>
            )}
          </div>

          {links?.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {links.map((l, i) => (
                <a
                  key={i}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white/10 hover:bg-white/20 px-3 py-1.5 text-sm transition"
                >
                  {l.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
