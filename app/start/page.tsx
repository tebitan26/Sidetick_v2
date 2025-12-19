// app/start/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import WaitlistForm from "@/components/WaitlistForm";
import JSONLD from "@/components/JSONLD";

export const metadata: Metadata = {
  title: "Commencer avec Sidetick — Billetterie sécurisée & Fan Graph",
  description:
    "Rejoins Sidetick : billetterie en ligne sécurisée, anti-fraude, revente officielle encadrée. Fans récompensés via le Fan Graph (badges, statuts, avantages).",
};

const faqItems = [
  {
    q: "Sidetick, c’est quoi exactement ?",
    a: "Sidetick est une billetterie en ligne nouvelle génération : anti-fraude, revente officielle encadrée et un système de récompenses pour les fans via le Fan Graph (badges, statuts, avantages).",
  },
  {
    q: "Est-ce que la revente est autorisée ?",
    a: "Oui. Sidetick propose une revente officielle : simple, sécurisée, et encadrée (ex. règles, plafonds, royalties). L’objectif : protéger les fans et l’expérience live.",
  },
  {
    q: "Est-ce que je dois utiliser la blockchain ?",
    a: "Non. L’expérience est pensée en mode Web2.5 : paiement en euro, parcours fluide, sans jargon. La couche technique sert surtout à sécuriser les tickets et automatiser des règles (ex. royalties).",
  },
  {
    q: "Que gagne un fan avec le Fan Graph ?",
    a: "Le Fan Graph met en valeur ton engagement (événements, soutien, recommandations) et débloque des badges/statuts (ex. Early Bird, Ambassadeur, UltraFan) pouvant donner accès à des avantages (préventes, expériences, zones dédiées).",
  },
  {
    q: "Je suis organisateur / artiste : comment ça marche ?",
    a: "Tu rejoins la liste “pro”, on échange sur ton besoin (fraude, revente, fidélisation) puis on prépare un premier événement pilote sur Sidetick avec une vue Fan Graph Pro (segments de fans, activation, insights).",
  },
];

export default function StartPage() {
  // FAQ Schema (FAQPage)
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

  return (
    <main className="min-h-screen bg-sidetick-bg bg-sidetick-gradient text-white">
      <JSONLD data={faqSchema} />

      {/* =========================
          HERO
        ========================= */}
      <section className="section hero-gradient relative overflow-hidden text-center">
        <div className="container relative">
          <p className="text-sm uppercase tracking-wide text-sidetick-pink/80">
            Commencer avec Sidetick
          </p>

          <h1 className="mt-2 text-4xl font-extrabold tracking-tight md:text-5xl">
            Billetterie sécurisée.
            <br />
            Revente officielle.
            <br />
            Fans récompensés.
          </h1>

          <p className="mt-5 mx-auto max-w-2xl text-sm text-white/80 md:text-base">
            Sidetick est une <strong>billetterie en ligne anti-fraude</strong> qui protège les fans,
            encadre la revente et aide les organisateurs à mieux connaître leurs publics grâce au{" "}
            <strong>Fan Graph</strong>.
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

          {/* WAITLIST (anchor globale utilisée par le header/footer) */}
          <div id="waitlist" className="mt-10 max-w-md mx-auto scroll-mt-24">
            <h2 className="text-sm font-semibold text-white/80">
              Rejoins la waiting list
            </h2>
            <p className="mt-2 text-xs text-white/70">
              (Fans & Pros) — Indique ton profil dans le message, et on te recontacte.
            </p>
            <div className="mt-4">
              <WaitlistForm />
            </div>

            <div className="mt-4 text-xs text-white/60">
              Tu veux plus de détails ?{" "}
              <Link href="/features" className="underline hover:text-white">
                Voir les fonctionnalités
              </Link>{" "}
              •{" "}
              <Link href="/faq" className="underline hover:text-white">
                Lire la FAQ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          PROBLÈMES (SEO keywords + crédibilité)
        ========================= */}
      <section className="section section-alt">
        <div className="container max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold">
            Pourquoi une nouvelle billetterie ?
          </h2>
          <p className="mt-3 text-sm md:text-base text-white/80">
            Aujourd’hui, la billetterie souffre de problèmes connus : <strong>faux billets</strong>,
            <strong> fraude</strong>, <strong>revente sauvage</strong>, prix abusifs et absence de
            lien durable entre artistes et fans. Sidetick apporte une réponse claire :
            <strong> sécuriser</strong>, <strong>encadrer</strong>, <strong>récompenser</strong>.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <ValueCard title="Anti-fraude" desc="Tickets uniques, vérification fiable, moins d’arnaques." />
            <ValueCard title="Revente officielle" desc="Revente simple, encadrée, plus juste pour les fans." />
            <ValueCard title="Fan Graph" desc="Badges, statuts, avantages : la passion devient visible." />
          </div>
        </div>
      </section>

      {/* =========================
          FANS
        ========================= */}
      <section id="fans" className="section">
        <div className="container grid gap-10 md:grid-cols-2 md:items-start">
          <div className="reveal-up">
            <p className="text-sm uppercase tracking-wide text-sidetick-pink/80">
              Pour les fans
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-extrabold">
              De simple billet à identité culturelle : le Fan Graph
            </h2>
            <p className="mt-4 text-sm md:text-base text-white/80 max-w-prose">
              Sidetick te permet d’acheter et de revendre tes <strong>billets de concert</strong> et{" "}
              <strong>billets de festival</strong> en toute sécurité. Ensuite, ton engagement nourrit ton{" "}
              <strong>Fan Graph</strong> : badges, niveaux, et accès à des avantages concrets.
            </p>

            <ul className="mt-5 space-y-3 text-sm text-white/80">
              <li>• Billetterie sécurisée & anti-fraude</li>
              <li>• Revente officielle encadrée (moins d’arnaques)</li>
              <li>• Badges & statuts (Early Bird, Ambassadeur, UltraFan…)</li>
              <li>• Avantages : préventes, expériences, zones dédiées</li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="#waitlist"
                className="inline-flex items-center rounded-full bg-sidetick-violet px-5 py-2.5 text-sm font-semibold text-white shadow-sidetick-glow hover:opacity-90 hover:-translate-y-0.5 transition"
              >
                M’inscrire en tant que fan
              </Link>
              <Link
                href="/"
                className="text-sm font-medium text-white/70 underline-offset-4 hover:underline"
              >
                Voir la page d’accueil
              </Link>
            </div>
          </div>

          <div className="reveal-up">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/70">
                Ton parcours (simple)
              </p>
              <div className="mt-4 space-y-3 text-sm">
                <StepRow
                  number={1}
                  title="Tu rejoins la waiting list"
                  desc="Tu indiques ton style d’événements (festival, club, concert)."
                />
                <StepRow
                  number={2}
                  title="Tu accèdes aux premiers événements Sidetick"
                  desc="Tu es informé·e des sorties et préventes en priorité."
                />
                <StepRow
                  number={3}
                  title="Ton Fan Graph démarre"
                  desc="Badges, statut, avantages : ton engagement devient reconnu."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          PROS
        ========================= */}
      <section id="pros" className="section section-alt">
        <div className="container grid gap-10 md:grid-cols-2 md:items-start">
          <div className="reveal-up">
            <p className="text-sm uppercase tracking-wide text-sidetick-pink/80">
              Pour les organisateurs, salles, artistes & marques
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-extrabold">
              Une billetterie maîtrisée + Fan Graph Pro
            </h2>
            <p className="mt-4 text-sm md:text-base text-white/80 max-w-prose">
              Sidetick aide les pros à sécuriser la billetterie, encadrer la revente et
              activer les meilleurs segments de fans (Superfans, Ambassadeurs, Early Birds…).
            </p>

            <ul className="mt-5 space-y-3 text-sm text-white/80">
              <li>• Revente encadrée (règles, plafonds, royalties)</li>
              <li>• Segmentation Fan Graph (insights actionnables)</li>
              <li>• Activation : préventes, VIP, campagnes ciblées</li>
              <li>• Expérience euro & fluide pour le public</li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="#waitlist"
                className="inline-flex items-center rounded-full bg-sidetick-orange px-5 py-2.5 text-sm font-semibold text-black hover:brightness-105 hover:-translate-y-0.5 transition"
              >
                M’inscrire en tant que pro
              </Link>
              <Link
                href="/pros"
                className="text-sm font-medium text-white/70 underline-offset-4 hover:underline"
              >
                Voir la page Pro détaillée
              </Link>
            </div>
          </div>

          <div className="reveal-up">
            <div className="rounded-3xl border border-white/10 bg-black/40 p-5 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/70">
                Exemple d’utilisation
              </p>
              <p className="mt-2 text-sm text-white/80">
                “On veut une revente plus saine + mieux identifier nos fans fidèles.”
              </p>
              <div className="mt-4 space-y-2 text-xs text-white/70">
                <p>• Pilotage de la revente officielle</p>
                <p>• Segmentation Superfans / Ambassadeurs</p>
                <p>• Préventes ciblées + expériences VIP</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          FAQ (On-page SEO)
        ========================= */}
      <section className="section">
        <div className="container max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold">
            Questions fréquentes
          </h2>
          <p className="mt-3 text-sm md:text-base text-white/80">
            Voici les réponses aux questions les plus fréquentes. Pour la version complète :{" "}
            <Link href="/faq" className="underline hover:text-white">
              consulte la FAQ
            </Link>
            .
          </p>

          <div className="mt-6 space-y-3">
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
          CTA FINAL
        ========================= */}
      <section className="section section-alt">
        <div className="container text-center max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-extrabold">
            Prêt·e à rejoindre Sidetick ?
          </h2>
          <p className="mt-3 text-sm md:text-base text-white/80">
            Inscris-toi à la waiting list : fans & pros. On te recontacte pour le lancement
            et les premiers pilotes.
          </p>
          <div className="mt-6">
            <Link
              href="#waitlist"
              className="inline-flex items-center justify-center rounded-full bg-sidetick-violet px-6 py-3 text-sm font-semibold text-white shadow-sidetick-glow hover:opacity-90 hover:-translate-y-0.5 transition"
            >
              Rejoindre la waiting list
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

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
    <div className="flex gap-3 rounded-2xl bg-white/5 px-3 py-3">
      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-black/40 text-xs font-semibold">
        {number}
      </div>
      <div>
        <p className="text-sm font-semibold">{title}</p>
        <p className="mt-1 text-xs text-white/70">{desc}</p>
      </div>
    </div>
  );
}

function ValueCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
      <p className="text-sm font-semibold">{title}</p>
      <p className="mt-2 text-sm text-white/80">{desc}</p>
    </div>
  );
}
