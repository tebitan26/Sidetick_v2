// app/about/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JSONLD from "@/components/JSONLD";
import AboutCard from "@/components/AboutCard";
import WaitlistForm from "@/components/WaitlistForm";
import {
  ShieldCheck, HeartHandshake, Sparkles, QrCode, Nfc, RefreshCw, Users, Trophy, HandCoins, Globe2
} from "lucide-react";

export const metadata: Metadata = {
  title: "À propos — Sidetick",
  description:
    "Sidetick, la billetterie nouvelle génération : sécurité (QR & NFC), revente officielle, et avantages UltraFan. Découvrez notre mission et l’équipe.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "À propos — Sidetick",
    description:
      "Notre mission : redonner confiance et créer plus de valeur pour les artistes et les fans.",
    url: "https://www.sidetick.app/about",
    images: [{ url: "/og/og-default.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/og/og-default.jpg"] },
  robots: { index: true, follow: true },
};

export default function Page() {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sidetick",
    url: "https://www.sidetick.app/about",
    sameAs: [
      "https://www.instagram.com/sidetick.app/",
      "https://x.com/sidetick_app",
      "https://www.linkedin.com/company/sidetick-app",
    ],
    founder: [
      { "@type": "Person", name: "Esteban", jobTitle: "Fondateur" },
      {
        "@type": "Person",
        name: "Paul Denis (Pehoz)",
        jobTitle: "Direction & Partenariat Artistique",
        sameAs: [
          "https://open.spotify.com/intl-fr/artist/5gF7q8sA5i9iV0x1TwzA25",
          "https://www.youtube.com/channel/UCQY39iht-8226PKxsQWhksw",
          "https://www.linkedin.com/in/pauldenis-k-manjole/",
        ],
      },
    ],
  };

  const values = [
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: "Confiance",
      desc: "Tickets authentiques, QR dynamique & NFC, revente officielle intégrée.",
    },
    {
      icon: <HeartHandshake className="h-5 w-5" />,
      title: "Équité",
      desc: "Redistribution transparente aux artistes et organisateurs. Anti-scalping.",
    },
    {
      icon: <Sparkles className="h-5 w-5" />,
      title: "Fun",
      desc: "UltraFan : points, accès anticipés, drops et expériences uniques.",
    },
  ];

  const milestones = [
    { k: "2024", title: "Idée & prototypes", desc: "Tests anti-fraude et flux de revente sécurisée.", icon: <QrCode className="h-4 w-4" /> },
    { k: "2025", title: "V1 publique", desc: "Waiting list, premiers artistes & organisateurs pilotes.", icon: <Users className="h-4 w-4" /> },
    { k: "2025-2026", title: "UltraFan & NFC", desc: "Lancement statuts/avantages + contrôle d’accès NFC.", icon: <Nfc className="h-4 w-4" /> },
    { k: "2026+", title: "Échelle & écosystème", desc: "Ouverture API, SideBox & SideDash pour pros.", icon: <Globe2 className="h-4 w-4" /> },
  ];

  return (
    <div className="relative">
      {/* HERO (image optionnelle /public/about/hero.jpg) */}
      <section className="section hero-gradient relative overflow-hidden">
        <Image
          src="/about/hero.jpg"
          alt=""
          fill
          sizes="100vw"
          className="absolute inset-0 -z-10 object-cover opacity-60"
          priority={false}
        />
        <div className="container">
          <small className="text-white/70 block">À propos</small>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Une billetterie qui remet <span className="text-orange-400">la vibe</span> au centre
          </h1>
          <p className="mt-4 max-w-prose text-white/85">
            On adore les concerts et les festivals. Ce qu’on aime moins : la fraude, la spéculation et les
            galères à l’entrée. Sidetick sécurise les billets, simplifie l’expérience et récompense
            la fidélité des <strong>UltraFans</strong>.
          </p>

          {/* KPIs / Promesse courte */}
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur text-sm">
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> Sécurité QR & NFC</div>
              <p className="text-white/70 mt-1">Contrôle en temps réel, billet unique et traçable.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur text-sm">
              <div className="flex items-center gap-2"><RefreshCw className="h-4 w-4" /> Revente officielle</div>
              <p className="text-white/70 mt-1">Redistribution équitable, zéros arnaques.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur text-sm">
              <div className="flex items-center gap-2"><Trophy className="h-4 w-4" /> UltraFan</div>
              <p className="text-white/70 mt-1">Points, statuts et avantages concrets.</p>
            </div>
          </div>

          {/* CTA rapide */}
          <div className="mt-8 max-w-md">
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* ÉQUIPE — cartes flip */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-extrabold">L’équipe</h2>
          <p className="mt-3 text-white/80 max-w-prose">
            Produit, design & tech — en collaboration étroite avec des artistes et des organisateurs.
          </p>

          <div className="mt-8 grid md:grid-cols-3 gap-5">
            <AboutCard
              image="/team/team.png"
              title="L’équipe Sidetick"
              subtitle="Produit, design & tech"
              description="Nous construisons une billetterie fiable, fluide et éthique, pour réconcilier fans, artistes et organisateurs."
              priority
            />
            <AboutCard
              image="/team/esteban.png"
              title="Esteban — Fondateur"
              subtitle="Vision produit & business"
              description="Team builder et passionné de scène live. Objectif : redistribuer la valeur vers ceux qui créent la vibe."
              links={[
                { href: "mailto:contact@sidetick.app", label: "Contact", icon: "web" },
                { href: "https://www.linkedin.com/company/sidetick-app", label: "LinkedIn", icon: "linkedin" },
              ]}
            />
            <AboutCard
              image="/team/paul.png"
              title="Paul Denis (Pehoz) — Direction & Partenariat Artistique"
              subtitle="Pont entre scène & produit"
              description="Apporte la perspective artiste et l’exigence d’une expérience fan moderne."
              links={[
                { href: "https://open.spotify.com/intl-fr/artist/5gF7q8sA5i9iV0x1TwzA25", label: "Spotify", icon: "web" },
                { href: "https://www.youtube.com/channel/UCQY39iht-8226PKxsQWhksw", label: "YouTube", icon: "web" },
                { href: "https://www.linkedin.com/in/pauldenis-k-manjole/", label: "LinkedIn", icon: "linkedin" },
                { href: "https://pauldeniskm.wixsite.com/joleman", label: "Site", icon: "web" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* VALEURS */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-extrabold">Nos valeurs</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">{v.icon}</span>
                  <strong>{v.title}</strong>
                </div>
                <p className="mt-2 text-white/80">{v.desc}</p>
              </div>
            ))}
          </div>
          {/* SEO invisible pour valeurs */}
          <ul className="sr-only">
            {values.map((v) => (
              <li key={v.title}>{v.title} — {v.desc}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* JALONS (timeline simple) */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-extrabold">Notre chemin</h2>
          <div className="mt-6 grid md:grid-cols-4 gap-4">
            {milestones.map((m) => (
              <div key={m.k} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <div className="text-white/60 text-sm flex items-center gap-2">
                  <span className="font-semibold">{m.k}</span> {m.icon}
                </div>
                <strong className="block mt-1">{m.title}</strong>
                <p className="mt-1 text-white/80 text-sm">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POURQUOI ON FAIT ÇA ? */}
      <section className="section section-alt">
        <div className="container grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <HandCoins className="h-5 w-5" /> Une valeur mieux distribuée
            </h3>
            <p className="mt-2 text-white/80">
              La spéculation pénalise les fans et les créateurs. Avec la revente officielle, on
              canalise la demande tout en reversant une part équitable aux artistes et aux organisateurs.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Sparkles className="h-5 w-5" /> Une expérience vraiment fan-first
            </h3>
            <p className="mt-2 text-white/80">
              UltraFan transforme ta passion en avantages concrets. Plus tu vibres, plus tu gagnes :
              accès anticipés, drops, et moments uniques avec tes artistes préférés.
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section relative overflow-hidden">
        <Image
          src="/cta/cta_final_lasers.jpg"
          alt="Rejoins la Side aujourd’hui"
          fill
          sizes="100vw"
          className="absolute inset-0 -z-10 object-cover opacity-60"
        />
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">Envie d’écrire la suite avec nous ?</h2>
          <p className="mt-2 text-white/80">Rejoins la liste d’attente pour tester l’app en avant-première.</p>
          <div className="mt-6 max-w-md mx-auto">
            <WaitlistForm />
          </div>
        </div>
      </section>

      <JSONLD data={org} />
    </div>
  );
}
