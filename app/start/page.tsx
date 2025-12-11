// app/start/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import WaitlistForm from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: "Commencer avec Sidetick",
  description:
    "Rejoins Sidetick en tant que fan ou organisateur : sécurise tes billets, découvre le Fan Graph et prépare ta place dans la prochaine vague d’événements.",
};

export default function StartPage() {
  return (
    <main className="min-h-screen bg-sidetick-bg bg-sidetick-gradient text-white">
      {/* =========================
          HERO START
        ========================= */}
      <section className="section hero-gradient relative overflow-hidden text-center">
        <div className="container relative">
          <p className="text-sm uppercase tracking-wide text-sidetick-pink/80">
            Commencer avec Sidetick
          </p>

          <h1 className="mt-2 text-4xl font-extrabold tracking-tight md:text-5xl">
            Une porte d&apos;entrée unique
            <br />
            pour les fans & les organisateurs.
          </h1>

          <p className="mt-5 mx-auto max-w-2xl text-sm text-white/80 md:text-base">
            Que tu viennes pour vivre plus de concerts ou pour organiser des
            événements, cette page est ton point de départ. Rejoins la liste
            d&apos;attente, précise ton profil, et nous te guidons pour la
            suite.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="#fans"
              className="inline-flex items-center justify-center rounded-full bg-sidetick-orange px-5 py-2.5 text-sm font-semibold text-black hover:brightness-105 hover:-translate-y-0.5 transition"
            >
              Je suis fan
            </Link>
            <Link
              href="#pros"
              className="inline-flex items-center justify-center rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/20 transition"
            >
              Je suis organisateur / artiste
            </Link>
          </div>

          <div className="mt-10 max-w-md mx-auto">
            <h2 className="text-sm font-semibold text-white/80">
              Rejoins la waiting list
            </h2>
            <p className="mt-2 text-xs text-white/70">
              Tu pourras préciser ton profil (fan ou pro) directement dans le
              formulaire.
            </p>
            <div className="mt-4">
              <WaitlistForm />
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          BLOC FANS
        ========================= */}
      <section id="fans" className="section section-alt">
        <div className="container grid gap-10 md:grid-cols-2 md:items-start">
          {/* Texte fans */}
          <div className="reveal-up">
            <p className="text-sm uppercase tracking-wide text-sidetick-pink/80">
              Pour les fans
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-extrabold">
              De simple billet...
              <br />
              à Fan Graph & UltraFan.
            </h2>
            <p className="mt-4 text-sm md:text-base text-white/80 max-w-prose">
              Sidetick te donne plus qu&apos;un ticket. Tu construis ton{" "}
              <strong>Fan Graph</strong> — une carte d&apos;identité culturelle
              qui reflète ta vraie passion : festivals, concerts, streams,
              partages, soutien aux artistes.
            </p>

            <ul className="mt-5 space-y-3 text-sm text-white/80">
              <li>
                • <strong>Billets sécurisés & anti-fraude</strong> : tu sais
                toujours d&apos;où vient ton ticket.
              </li>
              <li>
                • <strong>Revente officielle encadrée</strong> : plus besoin de
                marketplaces douteuses.
              </li>
              <li>
                • <strong>Badges & niveaux</strong> : Festival Lover, Early
                Bird, Ambassadeur, UltraFan…
              </li>
              <li>
                • <strong>Avantages concrets</strong> : préventes, zones
                spéciales, expériences uniques.
              </li>
            </ul>

            <p className="mt-4 text-xs text-white/70">
              En rejoignant maintenant, tu fais partie des premiers profils
              fans à être intégrés dans Sidetick et à tester les futures
              fonctionnalités.
            </p>
          </div>

          {/* Steps fans */}
          <div className="reveal-up">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/70">
                Comment ça se passe pour toi
              </p>

              <div className="mt-4 space-y-3 text-sm">
                <StepRow
                  number={1}
                  title="Rejoins la waiting list"
                  desc="Indique que tu es fan, et quels types d’événements tu aimes (festivals, clubs, concerts, etc.)."
                />
                <StepRow
                  number={2}
                  title="Reçois les premières actus Sidetick"
                  desc="Tu seras prévenu·e dès que les premiers événements seront disponibles dans ta zone."
                />
                <StepRow
                  number={3}
                  title="Commence ton Fan Graph"
                  desc="Tes billets Sidetick, ta présence et ton engagement commencent à nourrir ton Fan Graph & ton futur statut UltraFan."
                />
              </div>

              <div className="mt-5">
                <Link
                  href="#waitlist-fans"
                  className="inline-flex items-center justify-center rounded-full bg-sidetick-violet px-5 py-2.5 text-sm font-semibold text-white shadow-sidetick-glow hover:opacity-90 hover:-translate-y-0.5 transition"
                >
                  M&apos;inscrire en tant que fan
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Formulaire fans en bas de section */}
        <div id="waitlist-fans" className="container mt-10 max-w-md">
          <h3 className="text-sm font-semibold text-white/80">
            Waiting list — côté fans
          </h3>
          <p className="mt-2 text-xs text-white/70">
            Même formulaire, même base — mais tu peux préciser dans le message
            que tu t&apos;inscris comme fan.
          </p>
          <div className="mt-4">
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* =========================
          BLOC PROS (ORGANISATEURS, SALLES, ARTISTES, MARQUES)
        ========================= */}
      <section id="pros" className="section">
        <div className="container grid gap-10 md:grid-cols-2 md:items-start">
          {/* Texte pros */}
          <div className="reveal-up">
            <p className="text-sm uppercase tracking-wide text-sidetick-pink/80">
              Pour les organisateurs, salles, artistes & marques
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-extrabold">
              Une billetterie maîtrisée,
              <br />
              des fans identifiés, des revenus optimisés.
            </h2>
            <p className="mt-4 text-sm md:text-base text-white/80 max-w-prose">
              Sidetick combine une billetterie sécurisée avec un{" "}
              <strong>Fan Graph Pro</strong> : vous gardez la main sur la
              revente, les données d&apos;engagement et l&apos;activation de vos
              communautés, dans le respect du RGPD.
            </p>

            <ul className="mt-5 space-y-3 text-sm text-white/80">
              <li>
                • <strong>Revente encadrée</strong> : prix plafond, règles
                définies par vous, royalties automatiques.
              </li>
              <li>
                • <strong>Vue Fan Graph</strong> : Superfans, Ambassadeurs,
                Locaux, visiteurs occasionnels…
              </li>
              <li>
                • <strong>Activation ciblée</strong> : préventes, VIP, campagnes
                marketing sur vos segments les plus chauds.
              </li>
              <li>
                • <strong>Expérience 100% euro</strong> pour le public, sans
                jargon blockchain.
              </li>
            </ul>

            <p className="mt-4 text-xs text-white/70">
              Nous ne revendons jamais les données à des tiers. Les insights
              restent un outil pour améliorer l’expérience live et vos
              relations avec vos publics.
            </p>
          </div>

          {/* Steps pros */}
          <div className="reveal-up">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/70">
                Comment démarrer côté pro
              </p>

              <div className="mt-4 space-y-3 text-sm">
                <StepRow
                  number={1}
                  title="Manifestez votre intérêt"
                  desc="Inscrivez-vous comme organisateur, salle, label, collectif ou marque via le formulaire."
                />
                <StepRow
                  number={2}
                  title="On vous recontacte"
                  desc="L’équipe Sidetick revient vers vous pour comprendre vos besoins (fraude, revente, fidélisation, data…)."
                />
                <StepRow
                  number={3}
                  title="Préparez votre premier événement Sidetick"
                  desc="On définit ensemble un premier cas d’usage : festival, tournée, club night ou activation de marque."
                />
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="#waitlist-pros"
                  className="inline-flex items-center justify-center rounded-full bg-sidetick-violet px-5 py-2.5 text-sm font-semibold text-white shadow-sidetick-glow hover:opacity-90 hover:-translate-y-0.5 transition"
                >
                  M&apos;inscrire en tant que pro
                </Link>
                <Link
                  href="/pros"
                  className="text-xs font-medium text-white/80 underline-offset-4 hover:underline"
                >
                  Voir la page détaillée pour les pros
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Formulaire pros en bas de section */}
        <div id="waitlist-pros" className="container mt-10 max-w-md">
          <h3 className="text-sm font-semibold text-white/80">
            Waiting list — côté pro
          </h3>
          <p className="mt-2 text-xs text-white/70">
            Utilisez le même formulaire, mais précisez si vous êtes organisateur,
            salle, label, collectif ou marque, ainsi que votre ville/pays.
          </p>
          <div className="mt-4">
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* =========================
          BLOC RASSURANCE DATA
        ========================= */}
      <section className="section section-alt">
        <div className="container max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold">
            Vos données servent la scène, pas l&apos;inverse.
          </h2>
          <p className="mt-4 text-sm md:text-base text-white/80">
            Sidetick a été conçu pour protéger les fans et soutenir les artistes
            & organisateurs. Les données d&apos;usage sont traitées dans le
            respect du RGPD, de manière responsable, pour mieux lutter contre la
            fraude, offrir une billetterie plus juste et créer des expériences
            live plus fortes.
          </p>
          <p className="mt-3 text-xs text-white/70">
            En clair : pas de revente sauvage des données, pas de tracking
            opaque — uniquement des insights utiles pour améliorer la culture
            live.
          </p>
        </div>
      </section>

      {/* =========================
          CTA FINAL
        ========================= */}
      <section className="section">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold">
            Prêt·e à rejoindre la Side ?
          </h2>
          <p className="mt-3 text-sm md:text-base text-white/80 max-w-xl mx-auto">
            Que tu sois fan, organisateur, salle, label ou marque, tu peux
            déjà réserver ta place dans l&apos;écosystème Sidetick. On construit
            la suite ensemble.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="#fans"
              className="inline-flex items-center justify-center rounded-full bg-sidetick-orange px-5 py-2.5 text-sm font-semibold text-black hover:brightness-105 hover:-translate-y-0.5 transition"
            >
              Je commence en tant que fan
            </Link>
            <Link
              href="#pros"
              className="inline-flex items-center justify-center rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/20 transition"
            >
              Je commence en tant que pro
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ===========================================================
   Sous-composants locaux
   =========================================================== */

function StepRow({
  number,
  title,
  desc,
}: {
  number: number;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex gap-3 rounded-2xl bg-black/40 px-3 py-3">
      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-semibold">
        {number}
      </div>
      <div>
        <p className="text-sm font-semibold">{title}</p>
        <p className="mt-1 text-xs text-white/70">{desc}</p>
      </div>
    </div>
  );
}
