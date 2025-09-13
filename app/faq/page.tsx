// app/faq/page.tsx
import { faqsByCategory } from "@/lib/faqs";

export const metadata = {
  title: "FAQ — Sidetick",
  description:
    "Questions fréquentes sur l’achat, la revente officielle, les paiements, l’appli mobile et la sécurité.",
};

// Génère un JSON-LD à partir des 8 premières questions (meilleur SEO)
function FAQSchema() {
  const all = faqsByCategory.flatMap((c) => c.items);
  const top = all.slice(0, 8);
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: top.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      // @ts-ignore
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function FAQPage() {
  return (
    <div className="section">
      <div className="container">
        {/* Fil d’Ariane simple */}
        <nav aria-label="breadcrumb" className="text-sm text-white/60 mb-2">
          <a className="underline" href="/">Accueil</a> / <span>FAQ</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-extrabold">FAQ</h1>
        <p className="mt-3 text-white/80 max-w-prose">
          Les réponses aux questions les plus fréquentes sur Sidetick.
        </p>

        {/* Sommaire */}
        <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-2">
          {faqsByCategory.map((cat) => (
            <a
              key={cat.slug}
              href={`#${cat.slug}`}
              className="card px-4 py-3 hover:bg-white/10 transition"
            >
              {cat.title}
            </a>
          ))}
        </div>

        {faqsByCategory.map((cat) => (
          <section key={cat.slug} id={cat.slug} className="mt-10 scroll-mt-20">
            <h2 className="text-2xl md:text-3xl font-bold">{cat.title}</h2>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              {cat.items.map((item, i) => (
                <details key={i} className="card p-5 group">
                  <summary className="cursor-pointer font-semibold">
                    {item.q}
                  </summary>
                  <p className="mt-2 text-white/80">{item.a}</p>
                </details>
              ))}
            </div>
            <div className="mt-4">
              <a href="#top" className="text-sm underline text-white/60">
                ↑ Haut de page
              </a>
            </div>
          </section>
        ))}
      </div>

      {/* JSON-LD SEO */}
      <FAQSchema />
    </div>
  );
}
