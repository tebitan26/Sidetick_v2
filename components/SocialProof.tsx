// components/SocialProof.tsx
import Image from "next/image";

type Logo = { src: string; alt: string; href?: string };

const supporters: Logo[] = [
  // ↳ Remplace par de vrais fichiers dans public/logos/supporters/
  { src: "public/og/supporter1.png", alt: "Waldos Legend", href: "https://www.waldoslegend.com" },
  { src: "/og/supporter2.png", alt: "Sato Creative", href: "https://satocreative.com" },
  { src: "/og/supporter3.png", alt: "Allfeat", href: "https://allfeat.com" },
  { src: "/og/supporter4.png", alt: "Smoothy Labs", href: "https://www.smoothy-labs.com" },
  { src: "/og/supporter5.png", alt: "Web3 Society", href: "https://web3society.io" },
  { src: "/og/supporter6.png", alt: "Business Blockchain School", href: "https://www.bbschool.fr" },
];

const institutions: Logo[] = [
  // ↳ Remplace par de vrais fichiers dans public/logos/institutions/
  { src: "/og/Acc2.png", alt: "CNM – Centre national de la musique", href: "https://cnm.fr" },
  { src: "/og/Acc1.png", alt: "CCI Lyon Saint-Étienne Roanne", href: "https://www.cci.fr" },
  // { src: "/logos/institutions/incubateur.png", alt: "Nom de l’incubateur", href: "#" },
];

function LogoGrid({ items }: { items: Logo[] }) {
  return (
    <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-4 items-center">
      {items.map((l, i) => (
        <div key={i} className="card flex items-center justify-center py-6">
          {l.src ? (
            l.href ? (
              <a href={l.href} target="_blank" rel="noopener noreferrer" aria-label={l.alt}>
                <Image
                  src={l.src}
                  alt={l.alt}
                  width={160}
                  height={60}
                  className="opacity-80 hover:opacity-100 transition"
                />
              </a>
            ) : (
              <Image
                src={l.src}
                alt={l.alt}
                width={160}
                height={60}
                className="opacity-80"
              />
            )
          ) : (
            <span className="text-white/60 text-sm">{l.alt}</span>
          )}
        </div>
      ))}
    </div>
  );
}

export default function SocialProof() {
  return (
    <>
      {/* Section 1 : Soutiens (entreprises / partenaires moraux) */}
      <section className="section section-alt">
        <div className="container">
          <h2>Ils nous soutiennent</h2>
          <p className="mt-2 text-white/70 max-w-prose">
            Des entreprises et partenaires croient en notre vision d’une billetterie plus juste et sécurisée.
          </p>
          <LogoGrid items={supporters} />
        </div>
      </section>

      {/* Section 2 : Accompagnement (structures / formations / coaching) */}
      <section className="section">
        <div className="container">
          <h2>Ils nous accompagnent</h2>
          <p className="mt-2 text-white/70 max-w-prose">
            Nous sommes conseillés et formés par des institutions reconnues qui nous aident à structurer le projet.
          </p>
          <LogoGrid items={institutions} />
        </div>
      </section>
    </>
  );
}
