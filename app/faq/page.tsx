// app/faq/page.tsx
import Image from "next/image";
import Link from "next/link";
import { faqsByCategory } from "@/lib/faqs";
import { HelpCircle, ChevronDown, Inbox } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ Sidetick — Billetterie sécurisée, revente officielle & Fan Graph",
  description:
    "Réponses aux questions fréquentes : sécurité des billets, revente officielle encadrée, Fan Graph, badges, UltraFan, et fonctionnement pour organisateurs.",
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
  // Liste invisible pour indexer toutes les Q/R (au-delà des 8 du JSON-LD)
  const allFaqs = faqsByCategory.flatMap((c) => c.items);

  return (
    <div className="relative">
      {/* HERO (image optionnelle) */}
      <section className="relative section hero-gradient overflow-hidden">
        {/* Mets ton image en /public/faq/faq_bg.jpg si tu veux l’activer */}
        <Image
          src="/faq/faq_bg.jpg"
          alt=""
          fill
          sizes="100vw"
          className="absolute inset-0 -z-10 object-cover opacity-50"
          priority={false}
        />
        <div className="container">
          {/* Fil d’Ariane simple */}
          <nav aria-label="breadcrumb" className="text-sm text-white/70 mb-2">
            <Link className="underline" href="/">Accueil</Link> / <span>FAQ</span>
          </nav>

          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-extrabold flex items-center gap-3">
              <HelpCircle className="h-9 w-9 text-orange-400" aria-hidden="true" />
              FAQ
            </h1>
            <p className="mt-3 text-white/80">
              Toutes les réponses sur Sidetick : sécurité, revente officielle, paiements,
              contrôle <strong>QR & NFC</strong>, appli mobile, UltraFan… et plus encore.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENU */}
      <section className="section">
        <div className="container grid lg:grid-cols-[280px_minmax(0,1fr)] gap-8">
          {/* Sommaire sticky à gauche */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <p className="text-sm font-semibold text-white/80">Parcourir par thème</p>
              <ul className="mt-3 space-y-1 text-sm">
                {faqsByCategory.map((cat) => (
                  <li key={cat.slug}>
                    <a
                      href={`#${cat.slug}`}
                      className="block rounded-md px-3 py-2 hover:bg-white/10 transition"
                    >
                      {cat.title}
                    </a>
                  </li>
                ))}
              </ul>

              {/* CTA discret */}
              <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-3">
                <p className="text-xs text-white/70">
                  Tu n’as pas trouvé ? Écris-nous ou{" "}
                  <Link href="/#waitlist" className="underline">
                    rejoins la liste
                  </Link>
                  .
                </p>
              </div>
            </div>
          </aside>

          {/* Colonne questions */}
          <div>
            {/* Sommaire en cartes (mobile / tablette) */}
            <div className="lg:hidden grid sm:grid-cols-2 gap-2 mb-6">
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

            {/* Sections */}
            {faqsByCategory.map((cat) => (
              <section key={cat.slug} id={cat.slug} className="mt-10 scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-bold">{cat.title}</h2>

                <div className="mt-4 grid md:grid-cols-2 gap-4">
                  {cat.items.map((item, i) => (
                    <details
                      key={i}
                      className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition"
                    >
                      <summary className="flex cursor-pointer items-start justify-between gap-3 font-semibold list-none">
                        <span className="leading-tight">{item.q}</span>
                        <ChevronDown
                          className="h-5 w-5 shrink-0 transition-transform duration-300 group-open:rotate-180"
                          aria-hidden="true"
                        />
                      </summary>
                      <div className="mt-2 text-white/80 leading-relaxed">
                        {/* On accepte déjà du texte riche dans lib/faqs si besoin */}
                        <p>{item.a}</p>
                      </div>
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

            {/* Bloc de contact rapide */}
            <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-center gap-3">
                <Inbox className="h-5 w-5" aria-hidden="true" />
                <strong>Encore une question ?</strong>
              </div>
              <p className="mt-2 text-white/80">
                Écris-nous et nous reviendrons vers toi rapidement.
                En attendant, rejoins la <Link href="/#waitlist" className="underline">liste d’attente</Link>{" "}
                pour tester l’app en avant-première.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Liste invisible pour indexation SEO complète */}
      <ul className="sr-only">
        {allFaqs.map((f, idx) => (
          <li key={idx}>
            {f.q} — {f.a}
          </li>
        ))}
      </ul>

      {/* JSON-LD SEO */}
      <FAQSchema />
    </div>
  );
}
