// components/FAQ.tsx
"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

type QA = { q: string; a: string };

const faqs: QA[] = [
  {
    q: "Comment fonctionne la revente officielle de billets d’événement sur Sidetick ?",
    a: "La revente se fait directement dans l’app/plateforme Sidetick, via un circuit officiel et traçable. Le billet est sécurisé (tokenisé) et son QR dynamique empêche les copies. Une part de la revente revient à l’artiste/l’organisateur, ce qui rend le modèle équitable.",
  },
  {
    q: "Dois-je connaître la blockchain ou la crypto pour utiliser Sidetick ?",
    a: "Non. Tout se passe en euros avec un parcours classique (carte bancaire). La technologie blockchain est invisible pour l’utilisateur et sert uniquement à garantir l’authenticité et la traçabilité des billets.",
  },
  {
    q: "Jusqu’à quand puis-je revendre mon billet de spectacle/concert ?",
    a: "Tu peux revendre tant que l’organisateur n’a pas fermé la période de revente (souvent jusqu’à quelques heures avant l’événement). Les conditions exactes (deadline, plafond de prix) sont indiquées sur la page de l’événement.",
  },
  {
    q: "Pourquoi y a-t-il des frais (ex. 10 %) lors d’une revente de billet ?",
    a: "Ces frais servent à financer la sécurisation, la traçabilité et la redistribution équitable (artiste/organisateur). Ils permettent de lutter contre la spéculation et de garantir un marché secondaire sain.",
  },
  {
    q: "Comment Sidetick empêche la fraude et les faux billets ?",
    a: "Chaque billet est ancré sur une blockchain et associé à un QR code dynamique, régénéré et vérifié au contrôle. Les duplications, screenshots et reventes hors circuit sont invalidés.",
  },
  {
    q: "Qu’est-ce que le statut Ultra Fan et quels sont les avantages ?",
    a: "C’est un programme de fidélité gamifié : badges, accès anticipé, drops exclusifs, avantages selon ton niveau et ton historique (achats, présence, engagement). Les fans réguliers sont récompensés.",
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

        {/* JSON-LD FAQPage → à l'intérieur du composant, après le rendu */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map((f) => ({
                "@type": "Question",
                "name": f.q,
                "acceptedAnswer": { "@type": "Answer", "text": f.a },
              })),
            }),
          }}
        />
      </div>
    </section>
  );
}
