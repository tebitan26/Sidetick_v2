// app/pros/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import WaitlistForm from "@/components/WaitlistForm";
import JSONLD from "@/components/JSONLD";

export const metadata: Metadata = {
  title: "Billetterie organisateurs & artistes — Revente officielle & Fan Graph Pro | Sidetick",
  description:
    "Sidetick : billetterie en ligne sécurisée pour organisateurs, salles, festivals et artistes. Revente officielle encadrée, royalties automatiques, segmentation de fans via Fan Graph Pro.",
};

const faqItems = [
  {
    q: "Sidetick convient-il aux festivals, salles et tournées ?",
    a: "Oui. Sidetick s’adapte aux festivals, salles, tournées et collectifs : billetterie sécurisée, revente officielle encadrée et Fan Graph Pro pour suivre vos communautés dans le temps.",
  },
  {
    q: "Comment la revente officielle est-elle encadrée ?",
    a: "Vous définissez les règles : plafonds de prix, fenêtres de revente, frais éventuels. Sidetick applique automatiquement ces règles et peut gérer des redistributions (ex. royalties).",
  },
  {
    q: "Qu’apporte le Fan Graph Pro ?",
    a: "Le Fan Graph Pro identifie et segmente vos publics (Superfans, Early Birds, Ambassadeurs, Locaux, etc.) pour activer des préventes ciblées, du VIP, et améliorer la rétention d’une édition à l’autre.",
  },
  {
    q: "Est-ce que c’est compliqué pour le public ?",
    a: "Non. L’expérience est pensée Web2.5 : parcours fluide, paiement en euro, sans jargon. La technologie sert surtout à renforcer la sécurité et les règles de revente.",
  },
  {
    q: "RGPD et données : comment rassurer les publics ?",
    a: "Sidetick ne revend pas les données. Les informations servent à lutter contre la fraude, améliorer l’expérience live et vous fournir des insights utiles. Les usages sont pensés pour être responsables et conformes.",
  },
];

export default function ProsPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  // Bonus : Page schema (léger mais propre)
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Billetterie organisateurs & artistes — Sidetick",
    url: "https://www.sidetick.app/pros",
    description:
      "Billetterie sécurisée, revente officielle encadrée, Fan Graph Pro et segmentation d’audience pour organisateurs, salles, festivals et artistes.",
  };

  return (
    <main className="min-h-screen bg-sidetick-bg bg-sidetick-gradient text-white">
      <JSONLD data={faqSchema} />
      <JSONLD data={pageSchema} />

      {/* =========================
          HERO B2B
        ========================= */}
      <section className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:flex-row md:items-center">
        <div className="flex-1 space-y-6">
          <p className="text-sm uppercase tracking-wide text-sidetick-pink/80">
            Pour les organisateurs, salles, festivals & artistes
          </p>

          <h1 className="text-3xl font-extrabold md:text-4xl">
            Billetterie sécurisée.
            <br />
            Revente officielle encadrée.
            <br />
            Fan Graph Pro pour activer vos publics.
          </h1>

          <p className="text-base text-white/80">
            Sidetick est une solution de <strong>billetterie en ligne</strong> pensée pour le live :
            elle sécurise les tickets, encadre la revente et transforme l’engagement fan
            (billets, revente, streaming, recommandations) en{" "}
            <span className="font-semibold text-sidetick-violet">données actionnables</span>{" "}
            via le <strong>Fan Graph Pro</strong>.
          </p>

          <ul className="space-y-2 text-sm text-white/80">
            <li>• Revente officielle avec prix plafonnés & règles définies par vous.</li>
            <li>• Royalties / redistribution automatisée (selon vos choix).</li>
            <li>• Segments fans : Superfans, Early Birds, Ambassadeurs…</li>
            <li>• Parcours fan fluide (euro, mobile, sans jargon).</li>
          </ul>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="#waitlist"
              className="inline-flex items-center rounded-full bg-sidetick-violet px-5 py-2.5 text-sm font-semibold text-white shadow-sidetick-glow hover:opacity-90 hover:-translate-y-0.5 transition"
            >
              Rejoindre les early partners
            </Link>

            <Link
              href="/start"
              className="text-sm font-medium text-white/80 underline-offset-4 hover:underline"
            >
              Voir la page “Commencer”
            </Link>

            <Link
              href="mailto:contact@sidetick.app?subject=Partenariat%20billetterie%20Sidetick"
              className="text-sm font-medium text-white/80 underline-offset-4 hover:underline"
            >
              Parler à l&apos;équipe
            </Link>
          </div>

          <p className="text-xs text-white/60 max-w-prose">
            Mots-clés (SEO) : billetterie organisateurs, billetterie festivals, billetterie salle de concert,
            revente officielle billets, anti-fraude billetterie, royalties revente, segmentation fans.
          </p>
        </div>

        {/* Mockup Fan Graph côté pro – version "dashboard" */}
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
              Utilisez ces segments pour vos préventes, offres VIP et campagnes marketing —
              sans perdre la donnée d’une édition à l’autre.
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
              Une lecture claire de vos publics, au-delà d’un achat unique
            </h2>
            <p className="mt-4 text-sm md:text-base text-white/80 max-w-prose">
              Le Fan Graph Pro agrège les interactions (billets, revente officielle, streaming,
              engagement social) pour vous aider à identifier vos fans les plus engagés et
              augmenter la rétention événement après événement.
            </p>

            <ul className="mt-5 space-y-3 text-sm text-white/80">
              <li>
                • <strong>Segmentation automatisée</strong> : Superfans, Découvreurs,
                Ambassadeurs, Locaux, Visiteurs internationaux…
              </li>
              <li>
                • <strong>KPIs</strong> : rétention, valeur par fan, revente saine, taux de retour.
              </li>
              <li>
                • <strong>Activation ciblée</strong> : préventes privées, VIP, campagnes SMS/e-mail.
              </li>
            </ul>

            <p className="mt-4 text-sm text-white/70">
              Vous gardez la main. Sidetick agit comme une couche intelligente au service du live,
              dans le respect du RGPD — pas de tracking opaque, pas de revente de données.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="mailto:contact@sidetick.app?subject=Demo%20Fan%20Graph%20Pro"
                className="inline-flex items-center rounded-full bg-sidetick-orange px-5 py-2.5 text-sm font-semibold text-black hover:brightness-105 hover:-translate-y-0.5 transition"
              >
                Demander une démo Fan Graph Pro
              </Link>
              <Link
                href="#waitlist"
                className="text-sm font-medium text-white/80 underline-offset-4 hover:underline"
              >
                Devenir early partner
              </Link>
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
                  Insight Fan Graph : vos publics ne sont pas que des achats uniques.
                </p>
                <p className="mt-1">
                  En identifiant les Superfans et Ambassadeurs, vous stabilisez vos ventes en amont
                  et réduisez la dépendance aux plateformes de revente sauvage.
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
            Comment les pros utilisent Sidetick
          </h2>
          <p className="mt-3 max-w-prose text-sm md:text-base text-white/80">
            Le Fan Graph Pro s’adapte à votre réalité : festival, salle, tournée ou marque.
            L’objectif : mieux connaître les publics, sécuriser la billetterie et activer les fans
            les plus engagés.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <UseCaseCard
              icon="🎪"
              title="Festival — Fidéliser sur plusieurs éditions"
              points={[
                "Préventes ciblées pour les Superfans identifiés.",
                "Revente officielle pour gérer les imprévus sans perdre de revenus.",
                "Programme UltraFan qui récompense la fidélité sur plusieurs années.",
              ]}
            />

            <UseCaseCard
              icon="🎵"
              title="Salle — Remplir plus tôt & mieux connaître les habitués"
              points={[
                "Repérer les publics qui reviennent plusieurs fois par saison.",
                "Invitations ciblées sur les dates plus difficiles.",
                "Noyau d'habitués transformé en ambassadeurs.",
              ]}
            />

            <UseCaseCard
              icon="🤝"
              title="Marque — Activer une communauté qualifiée"
              points={[
                "Segments thématiques (rap, techno, indie, etc.).",
                "Activations avec de vrais fans plutôt qu’un simple reach social.",
                "Mesure d’impact via des indicateurs d’engagement.",
              ]}
            />
          </div>

          <div className="mt-10 text-sm text-white/70">
            Pour une entrée universelle (fan + pro) :{" "}
            <Link href="/start" className="underline hover:text-white">
              Commencer avec Sidetick
            </Link>
            .
          </div>
        </div>
      </section>

      {/* =========================
          FAQ PRO (on-page SEO + JSON-LD)
        ========================= */}
      <section className="border-t border-white/10 bg-black/40">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <p className="text-sm uppercase tracking-wide text-sidetick-pink/80">
            FAQ Pro
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-extrabold">
            Questions fréquentes des organisateurs & artistes
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {faqItems.map((item) => (
              <details
                key={item.q}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
              >
                <summary className="cursor-pointer text-sm font-semibold">
                  {item.q}
                </summary>
                <p className="mt-2 text-sm text-white/80">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          WAITLIST PRO (fix du #waitlist)
        ========================= */}
      <section id="waitlist" className="border-t border-white/10 bg-black/60">
        <div className="mx-auto max-w-6xl px-4 py-14 md:flex md:items-start md:justify-between md:gap-10">
          <div className="max-w-xl">
            <p className="text-sm uppercase tracking-wide text-sidetick-pink/80">
              Early partners
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-extrabold">
              Devenez partenaire pilote Sidetick
            </h2>
            <p className="mt-3 text-sm md:text-base text-white/80">
              Laissez-nous un message en précisant votre profil (festival, salle, label, artiste,
              collectif, marque) et votre zone (ville/pays). On revient vers vous pour cadrer un
              premier pilote.
            </p>
            <p className="mt-3 text-xs text-white/60">
              Conseil : mentionnez votre volumétrie (capacité/éditions), et vos enjeux (fraude,
              revente, fidélisation, data).
            </p>
          </div>

          <div className="mt-8 max-w-md md:mt-0 md:w-full">
            <WaitlistForm />
            <p className="mt-3 text-xs text-white/60">
              Option rapide :{" "}
              <a
                className="underline hover:text-white"
                href="mailto:contact@sidetick.app?subject=Partenariat%20Sidetick%20-%20Early%20Partner"
              >
                contact@sidetick.app
              </a>
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
