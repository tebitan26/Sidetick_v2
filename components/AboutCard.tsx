// components/AboutCard.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LinkDef = { href: string; label: string; icon?: "linkedin" | "web" };
type Props = {
  image: string;
  title: string;
  subtitle?: string;
  description?: string;
  links?: LinkDef[];
  className?: string;
  priority?: boolean;
};

export default function AboutCard({
  image,
  title,
  subtitle,
  description,
  links = [],
  className,
  priority,
}: Props) {
  return (
    <div
      className={cn(
        "group relative [perspective:1200px]", // ← profondeur 3D
        className
      )}
    >
      {/* Conteneur 3D (se retourne) */}
      <div
        className={cn(
          "relative h-[360px] md:h-[400px] w-full rounded-2xl shadow-xl overflow-hidden",
          "transition-transform duration-700 [transform-style:preserve-3d]",
          "group-hover:[transform:rotateY(180deg)] group-focus-within:[transform:rotateY(180deg)]"
        )}
      >
        {/* FACE AVANT */}
        <div
          className={cn(
            "absolute inset-0 [backface-visibility:hidden] rounded-2xl overflow-hidden"
          )}
        >
          <Image
            src={image}
            alt={title}
            fill
            priority={priority}
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover"
          />

          {/* Voile pour garantir la lisibilité et masquer l’arrière */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />

          {/* Texte avant */}
          <div className="absolute inset-x-0 bottom-0 p-5">
            <h3 className="text-2xl font-extrabold drop-shadow-sm">{title}</h3>
            {subtitle && (
              <p className="text-white/85 font-medium">{subtitle}</p>
            )}
          </div>
        </div>

        {/* FACE ARRIÈRE */}
        <div
          className={cn(
            "absolute inset-0 rounded-2xl p-5 flex flex-col justify-between",
            "[transform:rotateY(180deg)] [backface-visibility:hidden]",
            // ← dégradé Sidetick plein pour éviter tout “transparaitre”
            "bg-gradient-to-br from-sidetick.violet/90 via-sidetick.orange/85 to-sidetick.night"
          )}
        >
          <div>
            <h3 className="text-2xl font-extrabold">{title}</h3>
            {subtitle && (
              <p className="mt-1 font-medium text-white/90">{subtitle}</p>
            )}
            {description && (
              <p className="mt-3 text-white/90 leading-relaxed">
                {description}
              </p>
            )}
          </div>

          {links.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {links.map((l, i) => (
                <Link
                  key={i}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 px-4 py-2 text-sm transition"
                >
                  {l.icon === "linkedin" ? (
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-4 w-4"
                      fill="currentColor"
                    >
                      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1V24h-4v-7.1c0-1.7-.03-3.89-2.37-3.89-2.37 0-2.73 1.85-2.73 3.77V24h-4V8z" />
                    </svg>
                  ) : (
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-4 w-4"
                      fill="currentColor"
                    >
                      <path d="M12 4a8 8 0 100 16 8 8 0 000-16zm6.32 7H14.1a18.9 18.9 0 00-.6-3.32A6.02 6.02 0 0118.32 11zM12 6c.8 1.04 1.34 2.7 1.55 5H10.45C10.66 8.7 11.2 7.04 12 6zM8.5 12h6.99a17.3 17.3 0 01-.54 3.28A6.06 6.06 0 0112 18a6.06 6.06 0 01-2.95-2.72A17.3 17.3 0 018.5 12zM9.9 7.68A18.9 18.9 0 009.4 11H5.68A6.02 6.02 0 019.9 7.68zM5.68 13H9.4c.14 1.15.38 2.26.7 3.32A6.02 6.02 0 015.68 13zM14.1 16.32c.32-1.06.56-2.17.7-3.32h3.72a6.02 6.02 0 01-4.42 3.32z" />
                    </svg>
                  )}
                  {l.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
