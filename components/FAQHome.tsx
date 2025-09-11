// components/FAQHome.tsx
"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { homeEssentials } from "../lib/faqs";

export default function FAQHome() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section">
      <div className="container">
        <p className="text-xs tracking-widest uppercase text-white/50">FAQ</p>
        <h2 className="mt-2">Questions essentielles</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          {homeEssentials.map((f, i) => {
            const isOpen = open === i;
            return (
              <button
                key={i}
                onClick={() => setOpen(isOpen ? null : i)}
                className={`text-left card w-full transition group ${isOpen ? "ring-1 ring-white/20" : ""}`}
                aria-expanded={isOpen}
              >
                <div className="flex items-start justify-between gap-4">
                  <strong className="leading-6">{f.q}</strong>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </div>
                {isOpen && <p className="mt-2 text-white/80">{f.a}</p>}
              </button>
            );
          })}
        </div>

        <div className="mt-6 text-center">
          <a href="/faq" className="btn">Voir toute la FAQ</a>
        </div>
      </div>
    </section>
  );
}
