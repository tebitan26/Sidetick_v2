// app/faq/page.tsx
import type { Metadata } from "next";
import { faqCategories, allFaqsFlat } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "FAQ Sidetick – Billetterie sécurisée, revente officielle, UltraFan",
  description:
    "Toutes les réponses sur Sidetick : sécurité des billets, revente officielle, applis iOS/Android et programme UltraFan.",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  const jsonld = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allFaqsFlat().map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="section">
      <div className="container">
        <h1 className="text-4xl md:text-5xl font-bold">FAQ Sidetick</h1>
        <p className="mt-3 text-white/80 max-w-prose">
          Tout ce que tu dois savoir sur la sécurité des billets, la revente officielle,
          l’application iOS/Android et le programme UltraFan.
        </p>

        <div className="mt-10 space-y-10">
          {faqCategories.map((cat) => (
            <section key={cat.id} id={cat.id} className="scroll-mt-20">
              <h2 className="text-2xl md:text-3xl font-bold">
                <span className="mr-2">{cat.emoji}</span>{cat.title}
              </h2>
              <div className="mt-4 grid md:grid-cols-2 gap-4">
                {cat.items.map((f, i) => (
                  <div key={i} className="card">
                    <strong className="leading-6">{f.q}</strong>
                    <p className="mt-2 text-white/80">{f.a}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* JSON-LD SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonld) }}
        />
      </div>
    </div>
  );
}
