// app/pros/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Organisateurs & artistes — Sidetick",
  description:
    "Solution de billetterie en ligne sécurisée pour organisateurs, salles et artistes : revente officielle encadrée, Fan Graph et données d’engagement.",
};

export default function ProsPage() {
  return (
    <main className="min-h-screen bg-sidetick-bg bg-sidetick-gradient text-white">
      {/* =========================
          HERO B2B
        ========================= */}
      <section className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:flex-row md:items-center">
        <div className="flex-1 space-y-6">
          <p className="text-sm uppercase tracking-wide text-sidetick-pink/80">
            Pour les organisateurs, salles & artistes
          </p>

          <h1 className="text-3xl font-bold md:text-4xl">
            Contrôlez votre billetterie.
            <br />
            Connaissez vos fans. Augmentez vos revenus.
          </h1>

          <p className="text-base text-white/80">
            Sidetick est une plateforme de billetterie Web2.5 qui sécurise les
            tickets, encadre la revente et transforme chaque interaction fan
            (billets, streaming, partage) en données actionnables grâce au{" "}
            <span className="font-semibold text-sidetick-violet">
              Fan Graph
            </span>
            .
          </p>

          <ul className="space-y-2 text-sm text-white/80">
            <li>
              • Revente officielle avec prix plafonnés et royalties automatiques.
            </li>
            <li>
              • Tableau de bord Fan Graph pour identifier vos super-fans.
            </li>
            <li>
              • Données unifiées sur billets, streams et engagement social.
            </li>
            <li>
              • Expérience 100% euro, 0 friction blockchain pour le public.
            </li>
          </ul>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="#waitlist"
              className="inline-flex items-center rounded-full bg-sidetick-violet px-5 py-2.5 text-sm font-semibold text-white shadow-sidetick-glow hover:opacity-90"
            >
              Rejoindre les early partners
            </Link>

            <Link
              href="mailto:contact@sidetick.app?subject=Partenariat%20billetterie"
              className="text-sm font-medium text-white/80 underline-offset-4 hover:underline"
            >
              Parler à l&apos;équipe
            </Link>
          </div>
        </div>

        {/* Mockup Fan Graph côté pro – version plus "dashboard" */}
        <div className="flex-1">
          <div className="relative mx-auto max-w-md rounded-3xl border border-white/12 bg-black/40 p-5 shadow-sidetick-glow backdrop-blur-md">
            <p className="text-xs font-semibold uppercase tracking-wide text-sidetick-pink/80">
              Fan Graph – Vue organisateur
            </p>
            <h2 className="mt-2 text-lg font-semibold">
              Fans d&apos;un festival — Vue synthèse
            </h2>

            {/* KPIs */}
            <div className="mt-4 grid gap-3 text-sm sm:grid-cols-3">
              <div className="rounded-2xl bg-white/5 px-3 py-2">
                <p className="text-[11px] text-white/60">Superfans identifiés</p>
                <p className="mt-1 text-base font-semibold">382</p>
                <p className="text-[11px] text-emerald-300">
                  +26% vs édition précédente
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 px-3 py-2">
                <p className="text-[11px] text-white/60">
                  Taux de revente maîtrisée
                </p>
                <p className="mt-1 text-base font-semibold">91%</p>
                <p className="text-[11px] text-white/60">
                  Prix plafonnés respectés
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 px-3 py-2">
                <p className="text-[11px] text-white/60">
                  Revenus issus de la revente
                </p>
                <p className="mt-1 text-base font-semibold">+14 800 €</p>
                <p className="text-[11px] text-white/60">dont 50% aux artistes</p>
              </div>
            </div>

            {/* Segments Fan Graph */}
            <div className="mt-5 space-y-2 text-sm">
              <FanSegmentRow
                label="Festival Lovers"
                detail="4+ événements sur 18 mois"
                value="27% de la base"
                pill="Cœur de communauté"
              />
              <FanSegmentRow
                label="Early Birds"
                detail="Achètent en prévente 8 fois sur 10"
                value="18% de la base"
                pill="Priorité annonces"
              />
              <FanSegmentRow
                label="Ambassadeurs"
                detail="Recommandent & revendent sans fraude"
                value="7% de la base"
                pill="Invitations VIP"
              />
            </div>

            <p className="mt-4 text-xs text-white/65">
              Utilisez ces segments pour cibler vos préventes, offres VIP et
              campagnes marketing — sans perdre la donnée d&apos;une édition à
              l&apos;autre, ni d&apos;une salle à l&apos;autre.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          FAN GRAPH PRO – SECTION DÉDIÉE
        ========================= */}
      <section className="border-t border-white/10 bg-black/60">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-[1.1fr,0.9fr] md:items-center">
          {/* Texte explicatif Fan Graph Pro */}
          <div>
            <p className="text-sm uppercase tracking-wide text-sidetick-pink/80">
              Fan Graph Pro
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-extrabold">
              Le premier graphique culturel pour piloter vos publics
            </h2>
            <p className="mt-4 text-sm md:text-base text-white/80 max-w-prose">
              Le Fan Graph agrège toutes les interactions de vos publics —
              billets, reventes officielles, streaming, participation sociale —
              pour vous offrir une vue claire sur qui sont vos vrais fans et
              comment ils évoluent dans le temps.
            </p>

            <ul className="mt-5 space-y-3 text-sm text-white/80">
              <li>
                • <strong>Segmentation automatisée</strong> : Superfans,
                Découvreurs, Ambassadeurs, Locaux, Visiteurs internationaux…
              </li>
              <li>
                • <strong>KPIs live</strong> : rétention d&apos;une édition à
                l&apos;autre, taux de revente saine, valeur moyenne par fan.
              </li>
              <li>
                • <strong>Activation ciblée</strong> : préventes privées,
                campagnes e-mail / SMS, invitations VIP.
              </li>
            </ul>

            <p className="mt-4 text-sm text-white/70">
              Vous gardez la main sur vos données. Sidetick agit comme une couche
              intelligente par-dessus vos événements pour vous aider à décider{" "}
              <em>qui inviter, quand et avec quelle offre</em>, dans le respect
              du RGPD.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="mailto:contact@sidetick.app?subject=Demo%20Fan%20Graph%20Pro"
                className="inline-flex items-center rounded-full bg-sidetick-orange px-5 py-2.5 text-sm font-semibold text-black hover:brightness-105 hover:-translate-y-0.5 transition"
              >
                Demander une démo Fan Graph Pro
              </Link>
              <p className="text-xs text-white/70 max-w-xs">
                Idéal pour festivals, salles, tournées d&apos;artistes, marques
                culturelles.
              </p>
            </div>
          </div>

          {/* Mini dashboard "vue chronologique" */}
          <div>
            <div className="rounded-3xl border border-white/10 bg-black/40 p-5 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/70">
                Évolution du public sur 3 éditions
              </p>
              <div className="mt-4 space-y-3 text-xs text-white/75">
                <TimelineRow
                  label="Édition 2023"
                  fans="7 800 billets"
                  detail="Base majoritairement nouveaux publics"
                />
                <TimelineRow
                  label="Édition 2024"
                  fans="9 200 billets"
                  detail="+19% de retours, débuts des Superfans"
                />
                <TimelineRow
                  label="Édition 2025"
                  fans="10 100 billets"
                  detail="+34% Superfans, programme UltraFan lancé"
                  highlight
                />
              </div>

              <div className="mt-4 rounded-2xl bg-white/5 px-4 py-3 text-xs text-white/70">
                <p className="font-semibold">
                  Insight Fan Graph : vos publics ne sont pas que des achats
                  uniques.
                </p>
                <p className="mt-1">
                  En identifiant les Superfans et Ambassadeurs qui reviennent
                  chaque année, vous pouvez stabiliser vos ventes en amont,
                  tester des nouvelles scènes ou formats, et réduire la
                  dépendance aux plateformes de revente sauvage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          CAS D'USAGE PRO
        ========================= */}
      <section className="border-t border-white/10 bg-black/55">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <p className="text-sm uppercase tracking-wide text-sidetick-pink/80">
            Cas d&apos;usage
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-extrabold">
            Comment les pros utilisent Sidetick au quotidien
          </h2>
          <p className="mt-3 max-w-prose text-sm md:text-base text-white/80">
            Le Fan Graph Pro s&apos;adapte à votre réalité : festival en plein
            air, salle de concert, tournée d&apos;artiste ou marque en quête
            d&apos;activations ciblées.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {/* Festival */}
            <UseCaseCard
              icon="🎪"
              title="Festival — Fidéliser sur plusieurs éditions"
              points={[
                "Préventes ciblées pour les Superfans identifiés.",
                "Revente officielle pour gérer les imprévus sans perdre de revenus.",
                "Programme UltraFan qui récompense la fidélité sur plusieurs années.",
              ]}
            />

            {/* Salle de concert */}
            <UseCaseCard
              icon="🎵"
              title="Salle — Remplir plus tôt & mieux connaître les habitués"
              points={[
                "Repérer les publics qui reviennent plusieurs fois par saison.",
                "Envoyer des invitations ciblées sur les soirées plus difficiles.",
                "Construire un noyau d'habitués qui deviennent vos ambassadeurs.",
              ]}
            />

            {/* Marque / partenaire */}
            <UseCaseCard
              icon="🤝"
              title="Marque — Activer une communauté qualifiée"
              points={[
                "Accéder à des segments thématiques (rap, techno, indie, etc.).",
                "Lancer des activations avec des vrais fans plutôt qu’un simple reach social.",
                "Mesurer l’impact de chaque opération via les données d’engagement.",
              ]}
            />
          </div>
        </div>
      </section>

      {/* =========================
          3 BLOCS BÉNÉFICES PRO
        ========================= */}
      <section className="border-t border-white/10 bg-black/40">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
          <div>
            <h2 className="text-base font-semibold">Maîtrisez la revente</h2>
            <p className="mt-3 text-sm text-white/80">
              Définissez des politiques de revente claires : prix plafond,
              frais, période d&apos;ouverture. Sidetick applique vos règles et
              redistribue automatiquement les royalties aux artistes et
              organisateurs.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold">Valorisez vos communautés</h2>
            <p className="mt-3 text-sm text-white/80">
              Identifiez vos fans les plus engagés, récompensez-les avec des
              préventes, du merchandising ou des expériences exclusives, et
              transformez-les en ambassadeurs visibles dans le Fan Graph.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold">Construisez sur la durée</h2>
            <p className="mt-3 text-sm text-white/80">
              D&apos;un événement à l&apos;autre, le Fan Graph vous permet de
              suivre l&apos;évolution de votre base de fans, sans perdre la
              donnée entre billetteries ou campagnes, et de piloter vos revenus
              dans le temps.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ===========================================================
   Sous-composants locaux Fan Graph Pro
   =========================================================== */

function FanSegmentRow({
  label,
  detail,
  value,
  pill,
}: {
  label: string;
  detail: string;
  value: string;
  pill: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-white/5 px-3 py-2">
      <div>
        <p className="text-sm font-medium">{label}</p>
        <p className="text-[11px] text-white/60">{detail}</p>
      </div>
      <div className="text-right">
        <p className="text-xs text-white/70">{value}</p>
        <span className="mt-1 inline-block rounded-full bg-black/40 px-2 py-0.5 text-[10px] text-white/70">
          {pill}
        </span>
      </div>
    </div>
  );
}

function TimelineRow({
  label,
  fans,
  detail,
  highlight,
}: {
  label: string;
  fans: string;
  detail: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`flex items-start justify-between rounded-2xl px-3 py-2 ${
        highlight ? "bg-sidetick-violet/20" : "bg-white/5"
      }`}
    >
      <div>
        <p className="text-xs font-semibold">{label}</p>
        <p className="text-[11px] text-white/60">{detail}</p>
      </div>
      <p className="text-xs font-medium text-white/80">{fans}</p>
    </div>
  );
}

function UseCaseCard({
  icon,
  title,
  points,
}: {
  icon: string;
  title: string;
  points: string[];
}) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-xl">
          <span>{icon}</span>
        </div>
        <h3 className="text-sm font-semibold">{title}</h3>
      </div>
      <ul className="mt-3 space-y-1.5 text-xs text-white/80">
        {points.map((point) => (
          <li key={point} className="flex gap-2">
            <span className="mt-[3px] h-1 w-1 flex-shrink-0 rounded-full bg-white/60" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
