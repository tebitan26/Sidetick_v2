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
      {/* HERO B2B */}
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
            <li>• Revente officielle avec prix plafonnés et royalties automatiques.</li>
            <li>• Tableau de bord Fan Graph pour identifier vos super-fans.</li>
            <li>• Données unifiées sur billets, streams et engagement social.</li>
            <li>• Expérience 100% euro, 0 friction blockchain pour le public.</li>
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

        {/* Mockup Fan Graph côté pro */}
        <div className="flex-1">
          <div className="relative mx-auto max-w-md rounded-3xl border border-white/12 bg-black/40 p-5 shadow-sidetick-glow backdrop-blur-md">
            <p className="text-xs font-semibold uppercase tracking-wide text-sidetick-pink/80">
              Aperçu Fan Graph
            </p>
            <h2 className="mt-2 text-lg font-semibold">
              Top fans — Dernière tournée
            </h2>

            <div className="mt-4 space-y-2 text-sm">
              <div className="flex items-center justify-between rounded-2xl bg-white/5 px-3 py-2">
                <div>
                  <p className="font-medium">Festival Lover</p>
                  <p className="text-xs text-white/60">
                    12 événements sur 18 mois
                  </p>
                </div>
                <span className="rounded-full bg-sidetick-violet/20 px-2 py-1 text-xs text-sidetick-violet">
                  Superfan
                </span>
              </div>

              <div className="flex items-center justify-between rounded-2xl bg-white/5 px-3 py-2">
                <div>
                  <p className="font-medium">Early Bird</p>
                  <p className="text-xs text-white/60">
                    Achète en prévente 9 fois sur 10
                  </p>
                </div>
                <span className="rounded-full bg-sidetick-pink/20 px-2 py-1 text-xs text-sidetick-pink">
                  Priorité préventes
                </span>
              </div>

              <div className="flex items-center justify-between rounded-2xl bg-white/5 px-3 py-2">
                <div>
                  <p className="font-medium">Ambassadeur</p>
                  <p className="text-xs text-white/60">
                    +37 billets vendus via ses recommandations
                  </p>
                </div>
                <span className="rounded-full bg-sidetick-red/20 px-2 py-1 text-xs text-sidetick-red">
                  VIP / Backstage
                </span>
              </div>
            </div>

            <p className="mt-4 text-xs text-white/65">
              Utilisez ces segments pour cibler vos prochaines préventes, offres
              VIP et campagnes marketing — sans perdre la donnée d&apos;un
              événement à l&apos;autre.
            </p>
          </div>
        </div>
      </section>

      {/* 3 BLOCS BÉNÉFICES PRO */}
      <section className="border-t border-white/10 bg-black/40">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
          <div>
            <h2 className="text-base font-semibold">Maîtrisez la revente</h2>
            <p className="mt-3 text-sm text-white/80">
              Définissez des politiques de revente claires : prix plafond, frais,
              période d&apos;ouverture. Sidetick applique vos règles et redistribue
              automatiquement les royalties aux artistes et organisateurs.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold">
              Valorisez vos communautés
            </h2>
            <p className="mt-3 text-sm text-white/80">
              Identifiez vos fans les plus engagés, récompensez-les avec des
              préventes, du merchandising ou des expériences exclusives, et
              transformez-les en ambassadeurs visibles dans le Fan Graph.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold">Construisez sur la durée</h2>
            <p className="mt-3 text-sm text-white/80">
              D&apos;un événement à l&apos;autre, le Fan Graph vous permet de suivre
              l&apos;évolution de votre base de fans, sans perdre la donnée entre
              billetteries ou campagnes, et de piloter vos revenus dans le temps.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
