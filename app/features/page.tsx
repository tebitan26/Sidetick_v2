// app/features/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck, RefreshCw, CreditCard, Sparkles, QrCode, HandCoins,
  Smartphone, Trophy, Zap, Nfc, Stars, ShieldAlert
} from "lucide-react";
import WaitlistForm from "@/components/WaitlistForm";
import JSONLD from "@/components/JSONLD";

// ---- SEO de la page Features (ajout NFC)
export const metadata: Metadata = {
  title: "Fonctionnalités — Sidetick",
  description:
    "Tickets infalsifiables, revente officielle traçable, contrôle d’accès QR dynamique & NFC, et programme UltraFan. Une billetterie fluide et éthique pour concerts et festivals.",
  alternates: { canonical: "/features" },
  openGraph: {
    title: "Fonctionnalités — Sidetick",
    description:
      "Sécurité blockchain, revente officielle, contrôle QR & NFC, expérience fluide et avantages UltraFan.",
    url: "https://www.sidetick.app/features",
    images: [{ url: "/og/og-default.jpg", width: 1200, height: 630, alt: "Sidetick — Fonctionnalités" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fonctionnalités — Sidetick",
    description: "Sécurité, revente officielle, QR & NFC, fluidité et UltraFan.",
    images: ["/og/og-default.jpg"],
  },
  robots: { index: true, follow: true },
};

// --- Données UI
const pillars = [
  {
    title: "Sécurité par design",
    desc: "Billets infalsifiables, ancrés blockchain, traçabilité de bout en bout.",
    icon: ShieldCheck,
    gradient: "from-violet-600/25 to-indigo-600/25",
  },
  {
    title: "Revente officielle",
    desc: "Revente intégrée et équitable, avec redistribution transparente.",
    icon: RefreshCw,
    gradient: "from-blue-600/25 to-cyan-600/25",
  },
  {
    title: "Contrôle QR & NFC",
    desc: "QR dynamique et geste NFC « tap-to-enter » pour un accès ultra fluide.",
    icon: QrCode,
    altIcon: Nfc, // montré en badge
    gradient: "from-orange-600/25 to-rose-600/25",
  },
  {
    title: "UltraFan",
    desc: "Points, statuts et avantages. Plus tu vibres, plus tu gagnes.",
    icon: Sparkles,
    gradient: "from-amber-600/25 to-pink-600/25",
  },
];

const flow = [
  {
    n: "01",
    title: "Achat simple",
    desc: "Tu achètes en euros. Un ticket unique et traçable t’est attribué.",
    icon: CreditCard,
  },
  {
    n: "02",
    title: "Accès instantané",
    desc: "Contrôle à l’entrée en QR dynamique ou en NFC—rapide, fiable, anti-fraude.",
    icon: Smartphone,
  },
  {
    n: "03",
    title: "Revente sereine",
    desc: "Un imprévu ? Tu revends officiellement en 2 clics, sans arnaque.",
    icon: HandCoins,
  },
  {
    n: "04",
    title: "UltraFan",
    desc: "Tes achats/présences te rapportent des points et débloquent des drops.",
    icon: Trophy,
  },
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
      "Billetterie sécurisée nouvelle génération : tickets infalsifiables, revente officielle, QR & NFC, programme UltraFan.",
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "127" },
  };

  return (
    <div>
      {/* =========================
          HERO
      ========================== */}
      <section className="section hero-gradient relative overflow-hidden">
        <Image
          src="/hero/hero_festival_portal.jpg"
          alt="Sidetick — expérience de billetterie sécurisée"
          fill
          sizes="100vw"
          priority
          className="absolute inset-0 -z-10 object-cover opacity-70"
        />
        <div className="container grid md:grid-cols-2 items-center gap-8 relative">
          <div>
            <small className="text-white/70 block">Fonctionnalités</small>
            <h1 className="mt-2 text-4xl md:text-5xl font-extrabold leading-tight">
              La billetterie <span className="text-orange-400">sécurisée</span>,{" "}
              <span className="text-orange-400">fluide</span> et{" "}
              <span className="text-orange-400">équitable</span>
            </h1>
            <p className="mt-4 text-white/80 max-w-prose">
              Tickets infalsifiables, revente officielle traçable, contrôle d’accès en{" "}
              <strong>QR dynamique</strong> et <strong>NFC</strong>. Et avec UltraFan, tes
              interactions deviennent des avantages.
            </p>
            <div className="mt-6 max-w-md">
              <WaitlistForm />
            </div>
            <p className="mt-2 text-sm text-white/60">
              Rejoins la liste pour tester l’app en avant-première.
            </p>
          </div>

          <div className="relative h-[260px] md:h-[360px] rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
            <Image
              src="/solutions/solutions_full_stage.jpg"
              alt="Aperçu expérience Sidetick"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* =========================
          4 PILIERS (cards premium)
      ========================== */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-extrabold">Ce que tu gagnes avec Sidetick</h2>
          <p className="mt-3 max-w-prose text-white/80">
            Sécurité, fluidité et équité — pour les fans comme pour les organisateurs.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pillars.map((p) => (
              <article
                key={p.title}
                className={[
                  "group relative overflow-hidden rounded-2xl border border-white/10 p-5",
                  "backdrop-blur ring-1 hover:ring-white/20 transition",
                  `bg-gradient-to-br ${p.gradient}`,
                ].join(" ")}
              >
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                    <p.icon className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <strong className="text-lg">{p.title}</strong>
                </div>
                <p className="mt-2 text-white/80">{p.desc}</p>

                {/* Badges secondaires (ex: QR + NFC) */}
                {p.altIcon && (
                  <div className="mt-3 flex items-center gap-2 text-xs text-white/75">
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-1">
                      <QrCode className="h-3 w-3" /> QR dynamique
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-1">
                      <Nfc className="h-3 w-3" /> NFC tap-to-enter
                    </span>
                  </div>
                )}
              </article>
            ))}
          </div>

          {/* SEO invisible list des piliers */}
          <ul className="sr-only">
            {pillars.map((p) => (
              <li key={p.title}>
                {p.title} — {p.desc}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* =========================
          FLOW — Comment ça marche (timeline responsive)
      ========================== */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-extrabold">Comment ça marche</h2>

          <div className="mt-8 grid md:grid-cols-4 gap-4">
            {flow.map((s) => (
              <div
                key={s.title}
                className="relative rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
                    <s.icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-white/60 text-sm">{s.n}</span>
                </div>
                <strong className="block mt-3">{s.title}</strong>
                <p className="mt-2 text-white/80">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Bandeau sécurité succinct */}
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <ShieldAlert className="h-4 w-4" /> Anti-fraude avancée
            </div>
            <p className="mt-2 text-white/80">
              QR renouvelé côté serveur, vérifications cryptographiques, invalidation automatique
              lors d’une revente, et double mode de contrôle <strong>QR + NFC</strong> pour garantir
              une entrée unique et fiable.
            </p>
          </div>

          {/* SEO invisible list du flow */}
          <ul className="sr-only">
            {flow.map((s) => (
              <li key={s.title}>
                {s.n} — {s.title} : {s.desc}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* =========================
          POUR QUI ? (Fans / Organisateurs)
      ========================== */}
      <section className="section section-alt">
        <div className="container grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Zap className="w-5 h-5" /> Pour les fans
            </h3>
            <ul className="list-disc list-inside mt-3 text-white/85 space-y-1">
              <li>Achat simple en euros, billets infalsifiables</li>
              <li>Contrôle d’accès rapide en QR ou en NFC</li>
              <li>Revente officielle intégrée (zéro arnaque)</li>
              <li>Statut UltraFan et avantages exclusifs</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <ShieldCheck className="w-5 h-5" /> Pour les organisateurs
            </h3>
            <ul className="list-disc list-inside mt-3 text-white/85 space-y-1">
              <li>Contrôle d’accès hybride (QR dynamique + NFC)</li>
              <li>Revenus sur le secondaire, lutte anti-scalping</li>
              <li>Fidélisation & analytics via UltraFan</li>
            </ul>
          </div>
        </div>
      </section>

      {/* =========================
          CTA FINAL
      ========================== */}
      <section className="section relative overflow-hidden">
        <Image
          src="/cta/cta_final_lasers.jpg"
          alt="Rejoins la Side aujourd’hui"
          fill
          sizes="100vw"
          className="absolute inset-0 -z-10 object-cover opacity-60"
        />
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">Prêt à tester ?</h2>
          <p className="mt-2 text-white/80">
            Inscris-toi à la liste d’attente et deviens alpha-testeur.
          </p>
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
