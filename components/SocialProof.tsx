// components/SocialProof.tsx
import Image from "next/image";

type Logo = { src: string; alt: string; href?: string };

// ⚠️ Mets bien tes images dans /public/og/...
const supporters: Logo[] = [
  { src: "og/supporter1.png", alt: "Waldos Legend", href: "https://www.waldoslegend.com" },
  { src: "og/supporter2.png", alt: "Sato Creative", href: "https://satocreative.com" },
  { src: "og/supporter3.png", alt: "Allfeat", href: "https://allfeat.com" },
  { src: "og/supporter4.png", alt: "Smoothy Labs", href: "https://www.smoothy-labs.com" },
  { src: "og/supporter5.png", alt: "Web3 Society", href: "https://web3society.io" },
  { src: "og/supporter6.png", alt: "Business Blockchain School", href: "https://www.bbschool.fr" },
];

const institutions: Logo[] = [
  { src: "og/acc2.png", alt: "CNM – Centre national de la musique", href: "https://cnm.fr" },
  { src: "og/acc1.png", alt: "CCI Lyon Saint-Étienne Roanne", href: "https://www.cci.fr" },
];

// — Helpers
function SupporterCard({ logo }: { logo: Logo }) {
  const img = (
    <Image
      src={logo.src}
      alt={logo.alt}
      width={160}
      height={60}
      className="h-10 w-auto opacity-85 hover:opacity-100 transition"
      loading="lazy"
    />
  );
  return (
    <div className="mx-6 flex items-center justify-center">
      {logo.href ? (
        <a href={logo.href} target="_blank" rel="noopener noreferrer" aria-label={logo.alt}>
          {img}
        </a>
      ) : img}
    </div>
  );
}

export default function SocialProof() {
  return (
    <>
      {/* Section 1 : Carrousel auto-défilant */}
      <section className="section section-alt">
        <div className="container">
          <h2>Ils nous soutiennent</h2>
          <p className="mt-2 text-white/70 max-w-prose">
            Des entreprises et partenaires croient en notre vision d’une billetterie plus juste et sécurisée.
          </p>

          {/* Marquee wrapper */}
          <div
            className="relative mt-6 overflow-hidden marquee-mask"
            aria-label="Logos des entreprises qui soutiennent Sidetick – défilement horizontal automatique"
          >
            {/* Ligne qui défile : on duplique la série pour boucler */}
            <div
              className="
                group 
                flex w-[200%] 
                animate-marquee 
                [animation-duration:28s] [animation-timing-function:linear] [animation-iteration-count:infinite]
                hover:[animation-play-state:paused]
              "
            >
              {/* 1ère moitié */}
              <div className="flex w-1/2 items-center">
                {supporters.map((s, i) => <SupporterCard key={`a-${i}`} logo={s} />)}
              </div>
              {/* 2ème moitié (duplication) */}
              <div className="flex w-1/2 items-center">
                {supporters.map((s, i) => <SupporterCard key={`b-${i}`} logo={s} />)}
              </div>
            </div>
          </div>

          {/* CTA optionnel (SEO + maillage interne) */}
          <div className="mt-6 text-center">
            <a href="/about" className="underline text-white/80 hover:text-white">
              Voir nos partenaires & références →
            </a>
          </div>
        </div>
      </section>

      {/* Section 2 : Institutions en grille (fixe) */}
      <section className="section">
        <div className="container">
          <h2>Ils nous accompagnent</h2>
          <p className="mt-2 text-white/70 max-w-prose">
            Nous sommes conseillés et formés par des institutions reconnues qui nous aident à structurer le projet.
          </p>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
            {institutions.map((l, i) => (
              <div key={i} className="card flex items-center justify-center py-6">
                <a href={l.href} target="_blank" rel="noopener noreferrer" aria-label={l.alt}>
                  <Image
                    src={l.src}
                    alt={l.alt}
                    width={180}
                    height={70}
                    className="h-12 w-auto opacity-90 hover:opacity-100 transition"
                    loading="lazy"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
