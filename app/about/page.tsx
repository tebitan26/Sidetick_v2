import type { Metadata } from "next";
import JSONLD from "@/components/JSONLD";
import AboutCard from "@/components/AboutCard";

export const metadata: Metadata = {
  title: "À propos — Sidetick",
  description:
    "Sidetick, la billetterie nouvelle génération : sécurité blockchain, revente officielle, et avantages Ultra Fan. Découvrez l’équipe et notre mission.",
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
      {
        "@type": "Person",
        name: "Esteban",
        jobTitle: "Fondateur",
      },
      {
        "@type": "Person",
        name: "Paul Denis (Pehoz)",
        jobTitle: "Artiste & Advisor",
        sameAs: [
          "https://open.spotify.com/intl-fr/artist/5gF7q8sA5i9iV0x1TwzA25",
          "https://www.youtube.com/channel/UCQY39iht-8226PKxsQWhksw",
          "https://www.linkedin.com/in/pauldenis-k-manjole/"
        ]
      }
    ]
  };

  return (
    <div className="section">
      <div className="container">
        <small className="text-white/70 block">À propos</small>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Une billetterie qui remet <span className="text-orange-400">la vibe</span> au centre
        </h1>
        <p className="mt-4 max-w-prose text-white/85">
          On adore les concerts et les festivals. Ce qu’on aime moins : la fraude, la spéculation et les
          galères à l’entrée. Sidetick sécurise les billets, simplifie l’expérience et récompense
          la fidélité des <strong>Ultra Fans</strong>.
        </p>

        {/* Grille cartes */}
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          <AboutCard
            image="/team/team.png" // ← mets ta photo d’équipe
            title="L’équipe Sidetick"
            subtitle="Produit, design & tech"
            description="Nous construisons une billetterie fiable, fluide et éthique, en collaboration avec des artistes et organisateurs."
            priority
          />

          <AboutCard
            image="/team/esteban.png" // ← photo d’Esteban
            title="Esteban — Fondateur"
            subtitle="Vision produit & business"
            description="Team builder et passionné de scène live. Objectif : une billetterie qui redistribue la valeur vers ceux qui créent la vibe."
            links={[
              { href: "mailto:contact@sidetick.app", label: "Contact", icon: "web" },
              { href: "https://www.linkedin.com/company/sidetick-app", label: "LinkedIn", icon: "linkedin" },
            ]}
          />

          <AboutCard
            image="/team/paul.png" // ← photo de Paul (Pehoz)
            title="Paul Denis (Pehoz) — Artiste & Advisor"
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

        {/* Mission / valeurs */}
        <div className="mt-12 grid md:grid-cols-3 gap-4">
          <div className="card p-6">
            <strong>Confiance</strong>
            <p className="mt-2 text-white/80">Tickets authentiques, QR dynamique, revente officielle intégrée.</p>
          </div>
          <div className="card p-6">
            <strong>Équité</strong>
            <p className="mt-2 text-white/80">Redistribution aux artistes et organisateurs. Scalping découragé.</p>
          </div>
          <div className="card p-6">
            <strong>Fun</strong>
            <p className="mt-2 text-white/80">Ultra Fan : badges, accès anticipés, drops. Plus tu vibres, plus tu gagnes.</p>
          </div>
        </div>
      </div>

      <JSONLD data={org} />
    </div>
  );
}
