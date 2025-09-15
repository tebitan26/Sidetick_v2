"use client";
import { useState } from "react";
import Image from "next/image";
import { Linkedin, Instagram, Globe } from "lucide-react";

type Props = {
  image: string;
  title: string;
  subtitle?: string;
  description: string;
  links?: { href: string; label: string; icon?: "linkedin"|"instagram"|"web" }[];
  priority?: boolean; // pour l'image principale d'équipe
};

export default function AboutCard({ image, title, subtitle, description, links = [], priority=false }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="group relative rounded-2xl overflow-hidden shadow-soft bg-white/5 backdrop-blur-sm focus-within:ring-2 focus-within:ring-sidetick.violet"
      onClick={() => setOpen((v) => !v)} // tap mobile
      role="button"
      tabIndex={0}
      onKeyDown={(e)=>{ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); setOpen(v=>!v); } }}
      aria-label={`${title} – afficher les détails`}
    >
      {/* Image */}
      <div className="relative h-[320px] md:h-[360px]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width:768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.08] will-change-transform"
          priority={priority}
        />
      </div>

      {/* Panneau révélation */}
      <div
        className={[
          "absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/70",
          "translate-y-[72%] group-hover:translate-y-0",
          open ? "translate-y-0" : "",
          "transition-transform duration-500 ease-out"
        ].join(" ")}
      >
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="text-xl font-bold">{title}</h3>
          {subtitle && <p className="text-white/80 text-sm">{subtitle}</p>}
          <p className="mt-3 text-white/85">{description}</p>

          {links.length>0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {links.map((l,i)=>{
                const Icon = l.icon==="linkedin" ? Linkedin : l.icon==="instagram" ? Instagram : Globe;
                return (
                  <a key={i}
                     href={l.href} target="_blank" rel="noopener noreferrer"
                     className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-sm hover:bg-sidetick.orange hover:text-black transition"
                     aria-label={l.label}>
                    <Icon className="w-4 h-4" /> {l.label}
                  </a>
                );
              })}
            </div>
          )}

          <p className="mt-2 text-xs text-white/60">
            Astuce : sur mobile, tap pour ouvrir/fermer.
          </p>
        </div>
      </div>
    </div>
  );
}
