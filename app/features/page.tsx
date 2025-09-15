import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, RefreshCw, CreditCard, Sparkles, QrCode, HandCoins, Smartphone, Trophy, Zap } from "lucide-react";
import WaitlistForm from "@/components/WaitlistForm";
import JSONLD from "@/components/JSONLD";

// ---- SEO de la page Features
export const metadata: Metadata = {
  title: "Fonctionnalités — Sidetick",
  description:
    "Tickets infalsifiables, revente officielle traçable, QR dynamique et programme Ultra Fan. Une billetterie fluide et éthique pour concerts et festivals.",
  alternates: { canonical: "/features" },
  openGraph: {
    title: "Fonctionnalités — Sidetick",
    description:
      "Sécurité blockchain, revente officielle, expérience fluide et avantages Ultra Fan.",
    url: "https://www.sidetick.app/features",
    images: [{ url: "/og/og-default.jpg", width: 1200, height: 630, alt: "Sidetick — Fonctionnalités" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fonctionnalités — Sidetick",
    description: "Sécurité, revente officielle, fluidité et Ultra Fan.",
    images: ["/og/og-default.jpg"],
  },
  robots: { index: true, follow: true },
};

const features = [
  {
    title: "Sécurité absolue",
    desc: "Chaque billet est ancré sur blockchain avec QR dynamique : infalsifiable, unique, traçable.",
    icon: ShieldCheck,
  },
  {
    title: "Revente officielle",
    desc: "Revente intégrée, légale et équitable : part redistribuée à l’artiste et à l’organisateur.",
    icon: RefreshCw,
  },
  {
    title: "Expérience fluide",
    desc: "Achat en euros, parcours simple, pas besoin de connaître la crypto.",
    icon: CreditCard,
  },
  {
    title: "Ultra Fan",
    desc: "Badges, drops, accès anticipé. Tes achats et ta fidélité débloquent des avantages.",
    icon: Sparkles,
  },
];

const steps = [
  { n: "01", title: "Achat sécurisé", desc: "Tu achètes en euros. Un ticket unique t’est attribué.", icon: Smartphone },
  { n: "02", title: "Contrôle à l’entrée", desc: "QR dynamique vérifié en temps réel — impossible à dupliquer.", icon: QrCode },
  { n: "03", title: "Revente sereine", desc: "Si tu ne peux plus venir, tu revends officiellement en 2 clics.", icon: HandCoins },
];

export default function FeaturesPage() {
  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Sidetick",
    applicationCategory: "Ticketing",
    operatingSystem: "iOS, Android, Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
    url: "https://www.sidetick.app/features",
    description:
      "Billetterie sécurisée nouvelle génération : tickets infalsifiables, revente officielle, QR dynamique, programme Ultra Fan.",
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "127" },
  };

  return (
    <div>
      {/* HERO */}
      <section className="section hero-gradient relative overflow-hidden">
        <div className="container grid md:grid-cols-2 items-center gap-8">
          <div>
            <small className="text-white/70 block">Fonctionnalités</small>
            <h1 className="mt-2 text-4xl md:text-5xl font-extrabold leading-tight">
              La billetterie <span className="text-orange-400">sécurisée</span>, <span className="text-orange-400">fluide</span> et <span className="text-orange-400">équitable</span>
            </h1>
            <p className="mt-4 text-white/80 max-w-prose">
              Tickets infalsifiables, revente officielle traçable, QR dynamique et avantages Ultra Fan.
              Tout en euros, sans complexité.
            </p>
            <div className="mt-6 max-w-md">
              <WaitlistForm />
            </div>
            <p className="mt-2 text-sm text-white/60">Rejoins la liste pour tester l’app en avant-première.</p>
          </div>

          <div className="relative h-[260px] md:h-[340px]">
            {/* Illustration (lazy) */}
            <Image
              src="/og/hero.jpg"
              alt="Aperçu expérience Sidetick"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover rounded-2xl shadow-soft"
              priority={false}
            />
          </div>
        </div>
      </section>

      {/* 4 PILIERS */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold">Ce que tu gagnes avec Sidetick</h2>
          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((f) => (
              <div key={f.title} className="card p-5">
                <f.icon className="w-6 h-6 text-sidetick-orange" aria-hidden="true" />
                <strong className="block mt-3">{f.title}</strong>
                <p className="mt-2 text-white/80">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMENT ÇA MARCHE */}
      <section className="section">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold">Comment ça marche</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {steps.map((s) => (
              <div key={s.title} className="card p-6">
                <div className="flex items-center gap-3">
                  <s.icon className="w-5 h-5" aria-hidden="true" />
                  <span className="text-white/60">{s.n}</span>
                </div>
                <strong className="block mt-3">{s.title}</strong>
                <p className="mt-2 text-white/80">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="card p-6">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5" />
                  <strong>Anti-fraude</strong>
                </div>
                <p className="mt-2 text-white/80">
                  QR dynamique, rotation de jeton, invalidation automatique en cas de revente. Chaque entrée valide
                  est **cryptographiquement** liée à un seul ticket.
                </p>
              </div>
              <div className="card p-6">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5" />
                  <strong>Ultra Fan</strong>
                </div>
                <p className="mt-2 text-white/80">
                  Tes achats et tes présences débloquent des niveaux, des avantages, et des accès anticipés.
                  **Plus tu vibres, plus tu gagnes.**
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POUR QUI ? */}
      <section className="section section-alt">
        <div className="container grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Zap className="w-5 h-5" /> Pour les fans
            </h3>
            <ul className="list-disc list-inside mt-3 text-white/85 space-y-1">
              <li>Achat simple en euros, billets infalsifiables</li>
              <li>Revente officielle intégrée (zéro arnaque)</li>
              <li>Statut Ultra Fan et avantages exclusifs</li>
            </ul>
          </div>
          <div className="card p-6">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <ShieldCheck className="w-5 h-5" /> Pour les organisateurs
            </h3>
            <ul className="list-disc list-inside mt-3 text-white/85 space-y-1">
              <li>Contrôle d’accès fiable (QR dynamique)</li>
              <li>Revenus sur le secondaire, lutte anti-scalping</li>
              <li>Fidélisation & analytics Ultra Fan</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold">Prêt à tester ?</h2>
          <p className="mt-2 text-white/80">Inscris-toi à la liste d’attente et deviens alpha-testeur.</p>
          <div className="mt-6 max-w-md mx-auto">
            <WaitlistForm />
          </div>
          <p className="mt-3 text-sm text-white/60">
            En t’inscrivant, tu acceptes de recevoir des infos sur le lancement. Désinscription en 1 clic.
          </p>
        </div>
      </section>

      <JSONLD data={softwareJsonLd} />
    </div>
  );
}
