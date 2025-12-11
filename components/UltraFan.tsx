// components/UltraFan.tsx
import Link from "next/link";

type FanRow = {
  rank: number;
  name: string;
  badges: string[];
  score: string;
};

const TOP_FANS: FanRow[] = [
  {
    rank: 1,
    name: "@side_superfan",
    badges: ["Festival Lover", "Ambassadeur"],
    score: "UltraFan • 9 420 pts",
  },
  {
    rank: 2,
    name: "@club_kid",
    badges: ["Early Bird", "Streamer"],
    score: "Superfan • 7 310 pts",
  },
  {
    rank: 3,
    name: "@underground_soul",
    badges: ["Collector"],
    score: "Fan • 4 980 pts",
  },
];

export default function UltraFan() {
  return (
    <section className="section">
      <div className="container grid gap-10 md:grid-cols-2 md:items-center">
        {/* Texte côté fan */}
        <div className="reveal-up">
          <p className="text-sm uppercase tracking-wide text-sidetick-pink/80">
            Fan Graph • UltraFan
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">
            De fan à UltraFan : ton engagement devient visible
          </h2>

          <p className="mt-4 text-white/80 max-w-prose">
            Sur Sidetick, chaque concert, chaque festival, chaque partage
            construit ton <strong>Fan Graph</strong>. Quand ton engagement
            explose, tu passes au niveau <strong>UltraFan</strong> et tu
            débloques des avantages réels, pas juste des likes.
          </p>

          <ul className="mt-5 space-y-3 text-sm text-white/80">
            <li>
              • <strong>Classement dynamique</strong> : vois où tu te situes
              parmi les fans d&apos;un artiste ou d&apos;un festival.
            </li>
            <li>
              • <strong>Badges & niveaux</strong> : Découvreur, Fan, Superfan,
              UltraFan — ton statut en dit long.
            </li>
            <li>
              • <strong>Avantages exclusifs</strong> : préventes privées,
              places limitées, zones VIP, expériences backstage.
            </li>
          </ul>

          <p className="mt-4 text-sm text-white/70">
            L&apos;objectif ? Récompenser celles et ceux qui font vivre la
            scène au quotidien — pas juste ceux qui ont la carte bancaire la
            plus lourde.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="#waitlist"
              className="inline-flex items-center justify-center rounded-full bg-sidetick-violet px-6 py-3 text-sm font-semibold text-white shadow-sidetick-glow hover:opacity-90 hover:-translate-y-0.5 transition"
            >
              Rejoindre les futurs UltraFans
            </Link>
            <p className="text-xs text-white/70 max-w-xs">
              Inscris-toi pour être parmi les premiers à voir ton Fan Graph et
              ton classement UltraFan.
            </p>
          </div>
        </div>

        {/* Leaderboard côté UI (Fan Graph concret) */}
        <div className="reveal-up">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur shadow-sidetick-glow">
            <p className="text-xs font-semibold uppercase tracking-wide text-white/70">
              Classement UltraFan – Artiste exemple
            </p>

            <p className="mt-1 text-xs text-white/60">
              Basé sur les billets, la présence aux événements et le soutien
              continu.
            </p>

            <div className="mt-4 space-y-3">
              {TOP_FANS.map((fan) => (
                <FanRow key={fan.rank} fan={fan} />
              ))}
            </div>

            <div className="mt-5 rounded-2xl bg-black/40 px-4 py-3 text-xs text-white/70">
              <p>
                Les artistes et organisateurs peuvent utiliser ce classement
                pour :
              </p>
              <ul className="mt-2 list-disc pl-4 space-y-1">
                <li>inviter les UltraFans à des events privés,</li>
                <li>tester des nouveaux formats (release party, listening session),</li>
                <li>récompenser les ambassadeurs les plus actifs.</li>
              </ul>
            </div>

            <p className="mt-4 text-[11px] text-white/60">
              Les points et badges affichés ici sont un exemple. À terme, chaque
              artiste pourra définir ses propres règles d&apos;UltraFan.
            </p>
          </div>
        </div>
      </div>

      {/* Sous-bloc pour la passerelle B2B (sans casser ton B2C) */}
      <div className="container mt-12 grid gap-6 md:grid-cols-3 reveal-up">
        <UltraCard
          title="Pour les fans"
          desc="Tu vois enfin ton engagement reconnu. Ton Fan Graph te suit d’un événement à l’autre, quelle que soit la salle ou le festival."
          accent="text-sidetick-orange"
        />
        <UltraCard
          title="Pour les artistes"
          desc="Ils identifient leurs vrais supporters, pas seulement les chiffres anonymes. Idéal pour remercier et activer les bonnes personnes."
          accent="text-sidetick-violet"
        />
        <UltraCard
          title="Pour les organisateurs"
          desc="Ils accèdent à un outil simple pour segmenter, inviter et fidéliser les publics les plus engagés — sans perdre la donnée."
          accent="text-sidetick-pink"
        />
      </div>
    </section>
  );
}

function FanRow({ fan }: { fan: FanRow }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-black/40 px-3 py-3">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs font-semibold">
        #{fan.rank}
      </div>
      <div className="flex-1">
        <p className="text-sm font-semibold">{fan.name}</p>
        <div className="mt-1 flex flex-wrap gap-1">
          {fan.badges.map((badge) => (
            <span
              key={badge}
              className="rounded-full bg-white/10 px-2 py-0.5 text-[11px] text-white/80"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
      <div className="text-right text-xs text-white/70">{fan.score}</div>
    </div>
  );
}

function UltraCard({
  title,
  desc,
  accent,
}: {
  title: string;
  desc: string;
  accent?: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
      <h3 className={`text-sm font-semibold ${accent ?? ""}`}>{title}</h3>
      <p className="mt-2 text-sm text-white/80">{desc}</p>
    </div>
  );
}
