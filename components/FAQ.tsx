// components/FAQ.tsx
"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Comment Sidetick empêche la fraude ?",
    a: "Chaque billet est tokenisé (ancré sur une blockchain) avec un QR dynamique. Un billet ne peut pas être dupliqué ni revendu hors circuit officiel."
  },
  {
    q: "Dois-je connaître la crypto ?",
    a: "Non. Tout se fait en euros, avec un parcours classique. La techno est invisible pour l’utilisateur."
  },
  {
    q: "La revente est-elle légale ?",
    a: "Oui. La revente est intégrée, traçable et équitable : l’artiste et l’organisateur récupèrent leur part."
  },
  {
    q: "Qu’est-ce que le statut Ultra Fan ?",
    a: "Un programme de fidélité gamifié : badges, accès anticipé, drops exclusifs et avantages selon ton niveau."
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section">
      <div className="container">
        <p className="text-xs tracking-widest uppercase text-white/50">FAQ</p>
        <h2 className="mt-2">Questions fréquentes</h2>

        <div className="mt-6 grid md:grid-cols-2 gap-4">
          {faqs.map((f, i) => {
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

        {/* JSON-LD FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map((f) => ({
                "@type": "Question",
                "name": f.q,
                "acceptedAnswer": { "@type": "Answer", "text": f.a }
              }))
            }),
          }}
        />
      </div>
    </section>
  );
}
