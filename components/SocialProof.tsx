// components/SocialProof.tsx
import Image from "next/image";

type Logo = { src: string; alt: string; href?: string };

const supporters: Logo[] = [
  { src: "/og/supporter1.png", alt: "Waldos Legend", href: "https://www.waldoslegend.com" },
  { src: "/og/supporter2.png", alt: "Sato Creative", href: "https://satocreative.com" },
  { src: "/og/supporter3.png", alt: "Allfeat", href: "https://allfeat.com" },
  { src: "/og/supporter4.png", alt: "Smoothy Labs", href: "https://www.smoothy-labs.com" },
  { src: "/og/supporter5.png", alt: "Web3 Society", href: "https://web3society.io" },
  { src: "/og/supporter6.png", alt: "Business Blockchain School", href: "https://www.bbschool.fr" },
];

const institutions: Logo[] = [
  { src: "/og/acc2.png", alt: "CNM – Centre national de la musique", href: "https://cnm.fr" },
  { src: "/og/acc1.png", alt: "CCI Lyon Saint-Étienne Roanne", href: "https://www.cci.fr" },
];

function RowMarquee({ items, duration = 28 }: { items: Logo[]; duration?: number }) {
  // On duplique le tableau pour obtenir un défilement “bouclé”
  const loop = [...items, ...items];

  return (
    <div className="relative overflow-hidden group marquee-mask">
      <ul
        className="flex items-center gap-10 animate-marquee group-hover:[animation-play-state:paused] motion-reduce:[animation:none]"
        style={{ ["--marquee-duration" as any]: `${duration}s` }}
      >
        {loop.map((l, i) => {
          const img = (
            <Image
              src={l.src}
              alt={l.alt}
              width={180}
              height={72}
              className="h-12 w-auto md:h-14 lg:h-16 opacity-90 hover:opacity-100 transition"
              sizes="(min-width:1024px) 180px, (min-width:768px) 150px, 120px"
              loading="lazy"
            />
          );
          return (
            <li key={`${l.src}-${i}`} className="shrink-0">
              {l.href ? (
                <a href={l.href} target="_blank" rel="noopener noreferrer" aria-label={l.alt}>
                  {img}
                </a>
              ) : (
                img
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function SocialProof() {
  return (
    <>
      {/* Section 1 : Soutiens */}
      <section className="section section-alt">
        <div className="container">
          <h2>Ils nous soutiennent</h2>
          <p className="mt-2 text-white/70 max-w-prose">
            Des entreprises et partenaires croient en notre vision d’une billetterie plus juste et sécurisée.
          </p>
          <div className="mt-6">
            <RowMarquee items={supporters} duration={32} />
          </div>
        </div>
      </section>

      {/* Section 2 : Accompagnateurs */}
      <section className="section">
        <div className="container">
          <h2>Ils nous accompagnent</h2>
          <p className="mt-2 text-white/70 max-w-prose">
            Nous sommes conseillés et formés par des institutions reconnues qui nous aident à structurer le projet.
          </p>
          <div className="mt-6">
            <RowMarquee items={institutions} duration={22} />
          </div>
        </div>
      </section>
    </>
  );
}
