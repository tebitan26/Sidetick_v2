// components/SocialProofStrip.tsx
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
  { src: "/og/acc1.png", alt: "CCI – Chambre du Commerce et de l'Industrie", href: "https://www.cci.fr/" },
  { src: "/og/acc2.png", alt: "CNM - Centre National de la Musique", href: "https://cnm.fr/" },
  { src: "/og/acc3.png", alt: "France 2030", href: "https://www.economie.gouv.fr/france-2030" },
  { src: "/og/acc4.png", alt: "BPI France", href: "https://www.bpifrance.fr/" },
];

function RowMarquee({ items, duration = 18 }: { items: Logo[]; duration?: number }) {
  const loop = [...items, ...items];
  return (
    <div className="relative overflow-hidden marquee-mask">
      <ul
        className="flex items-center gap-10 animate-marquee motion-reduce:[animation:none]"
        style={{ ["--marquee-duration" as any]: `${duration}s` }}
      >
        {loop.map((l, i) => (
          <li key={`${l.src}-${i}`} className="shrink-0">
            {l.href ? (
              <a href={l.href} target="_blank" rel="noreferrer" aria-label={l.alt}>
                <Image
                  src={l.src}
                  alt={l.alt}
                  width={160}
                  height={64}
                  className="h-10 w-auto md:h-12 opacity-90 hover:opacity-100 transition"
                />
              </a>
            ) : (
              <Image
                src={l.src}
                alt={l.alt}
                width={160}
                height={64}
                className="h-10 w-auto md:h-12 opacity-90"
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SocialProofStrip() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
      <p className="text-sm font-semibold text-white/85">Ils nous soutiennent</p>
      <p className="mt-1 text-sm text-white/70 max-w-prose">
        Des partenaires croient en notre vision d’une billetterie plus juste et sécurisée.
      </p>

      <div className="mt-5">
        <RowMarquee items={supporters} duration={18} />
      </div>

      <div className="mt-6 pt-6 border-t border-white/10">
        <p className="text-sm font-semibold text-white/85">Ils nous accompagnent</p>
        <p className="mt-1 text-sm text-white/70 max-w-prose">
          Institutions et programmes qui nous aident à structurer le projet.
        </p>
        <div className="mt-5">
          <RowMarquee items={institutions} duration={22} />
        </div>
      </div>
    </div>
  );
}
