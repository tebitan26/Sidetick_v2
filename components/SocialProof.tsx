// components/SocialProof.tsx
import Image from "next/image";

type Logo = { src: string; alt: string; href?: string };

const supporters: Logo[] = [
  // ↳ Remplace par de vrais fichiers dans public/logos/supporters/
  { src: "/logos/supporters/support1.png", alt: "Supporter 1", href: "#" },
  { src: "/logos/supporters/support2.png", alt: "Supporter 2", href: "#" },
  { src: "/logos/supporters/support3.png", alt: "Supporter 3", href: "#" },
  { src: "/logos/supporters/support4.png", alt: "Supporter 4", href: "#" },
  { src: "/logos/supporters/support5.png", alt: "Supporter 5", href: "#" },
];

const institutions: Logo[] = [
  // ↳ Remplace par de vrais fichiers dans public/logos/institutions/
  { src: "/logos/institutions/cnm.png", alt: "CNM – Centre national de la musique", href: "https://cnm.fr" },
  { src: "/logos/institutions/cci-lyon-st-etienne.png", alt: "CCI Lyon Saint-Étienne Roanne", href: "https://www.cci.fr" },
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
