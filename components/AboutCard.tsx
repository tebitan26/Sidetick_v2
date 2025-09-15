// components/AboutCard.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn"; // si tu n'as pas cn, remplace par simple concaténation

type LinkItem = { href: string; label: string; icon?: "linkedin" | "web" };

export default function AboutCard({
  image,
  title,
  subtitle,
  description,
  links = [],
  priority = false,
}: {
  image: string;
  title: string;
  subtitle?: string;
  description?: string;
  links?: LinkItem[];
  priority?: boolean;
}) {
  return (
    <div
      className={cn(
        // ⬇️ le conteneur “carte” : group + relative + preserve-3d
        "group relative rounded-2xl overflow-hidden",
        "bg-white/5 ring-1 ring-white/10",
        "transition-transform duration-500 hover:-translate-y-1",
        "[transform-style:preserve-3d]"
      )}
    >
      {/* FACE AVANT */}
      <div className="relative h-72 md:h-80 backface-hidden">
        <Image
          src={image}
          alt={title}
          fill
          priority={priority}
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover"
        />
        {/* voile + texte avant */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5">
          <h3 className="text-xl font-bold">{title}</h3>
          {subtitle && <p className="text-white/80 text-sm">{subtitle}</p>}
        </div>
      </div>

      {/* FACE ARRIÈRE */}
      <div
        className={cn(
          "absolute inset-0 p-5 flex flex-col justify-between",
          "bg-sidetick.night/95 ring-1 ring-white/10",
          // ⬇️ on retourne la face arrière de 180° et on cache l’arrière des faces
          "rotate-y-180 backface-hidden",
          // ⬇️ l’animation de flip au survol de la carte
          "transition-transform duration-500 group-hover:rotate-y-0"
        )}
        // La face arrière commence tournée, on remet à 0 au hover.
        style={{ transform: "rotateY(180deg)" }}
      >
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          {subtitle && <p className="text-white/80 mt-1">{subtitle}</p>}
          {description && <p className="text-white/70 mt-3">{description}</p>}
        </div>

        {links?.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {links.map((l, i) => (
              <Link
                key={i}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                className="rounded-full bg-white/10 px-3 py-1.5 text-sm hover:bg-sidetick.orange hover:text-black transition"
              >
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Animation flip : la face avant se retourne au hover */}
      <style jsx>{`
        .group:hover > .backface-hidden:first-child {
          transform: rotateY(180deg);
          transition: transform 500ms;
        }
        .group:hover > .rotate-y-180 {
          transform: rotateY(0deg) !important;
        }
      `}</style>
    </div>
  );
}
