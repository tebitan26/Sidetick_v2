// components/SolutionsScroller.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";

type Step = {
  title: string;
  desc: string;
  colorClass: string; // ex: "from-violet-300 to-violet-500"
};
type Slide = { src: string; alt: string };

export default function SolutionsScroller({
  slides,
  steps,
  overlay = true,
  heightVh = 320, // hauteur de la section pour scroller (en vh)
}: {
  slides: Slide[]; // 3 images, même scène
  steps: Step[];   // 3 steps, même ordre que slides
  overlay?: boolean;
  heightVh?: number;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  // calcule l'index actif en fonction du scroll (0,1,2)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const viewH = window.innerHeight || 1;
        const total = (heightVh / 100) * viewH - viewH; // longueur scrollable interne
        // progress 0 → 1 sur la section
        const start = rect.top * -1;
        const progress = Math.min(Math.max(start / Math.max(total, 1), 0), 1);

        // 3 zones : [0, 1/3), [1/3, 2/3), [2/3, 1]
        const idx = progress < 1 / 3 ? 0 : progress < 2 / 3 ? 1 : 2;
        setActive(idx);
        ticking = false;
      });
    };

    // trigger au montage + scroll
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [heightVh]);

  const step = steps[active];

  return (
    <section className="section p-0">
      {/* conteneur qui crée la “longueur” de scroll */}
      <div ref={containerRef} style={{ height: `${heightVh}vh` }}>
        {/* wrapper sticky plein écran */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {/* Pile d’images en fondu */}
          <div className="absolute inset-0">
            {slides.map((s, i) => (
              <Image
                key={s.src}
                src={s.src}
                alt={s.alt}
                fill
                sizes="100vw"
                priority={i === 0}
                className={cn(
                  "absolute inset-0 object-cover transition-opacity duration-700",
                  i === active ? "opacity-100" : "opacity-0"
                )}
              />
            ))}
            {overlay && <div className="absolute inset-0 bg-black/35" aria-hidden />}
          </div>

          {/* Texte overlay (morphing léger + couleur) */}
          <div className="relative z-10 flex h-full items-end md:items-center">
            <div className="w-full px-5 pb-10 md:pb-0 md:px-12">
              <div className="max-w-3xl">
                <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
                  <span
                    className={cn(
                      "bg-clip-text text-transparent inline-block transition-all duration-500 ease-out",
                      `bg-gradient-to-r ${step.colorClass}`
                    )}
                    // micro “morphing” : tracking & blur léger lors du changement
                    style={{
                      filter: "drop-shadow(0 6px 24px rgba(0,0,0,.25))",
                    }}
                  >
                    {step.title}
                  </span>
                </h2>

                <p
                  key={active} // force une transition au changement
                  className="mt-3 text-base md:text-lg text-white/90 transition-opacity duration-500"
                >
                  {step.desc}
                </p>

                {/* Dots de progression */}
                <div className="mt-6 flex gap-2">
                  {steps.map((_, i) => (
                    <span
                      key={i}
                      className={cn(
                        "h-1.5 w-8 rounded-full transition-colors",
                        i === active ? "bg-white" : "bg-white/40"
                      )}
                      aria-hidden
                    />
                  ))}
                </div>
                {/* ✅ SEO invisible list (accessible aux moteurs de recherche et aux lecteurs d'écran) */}
<ul className="sr-only">
  {steps.map((s, i) => (
    <li key={i}>
      {s.title} — {s.desc}
    </li>
  ))}
</ul>
              </div>
            </div>
          </div>

          {/* Légère bordure arrondie si tu veux un cadre */}
          {/* <div className="absolute inset-4 rounded-3xl ring-1 ring-white/10 pointer-events-none" /> */}
        </div>
      </div>
    </section>
  );
}
