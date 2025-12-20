// app/page.tsx
import Image from "next/image";
import Link from "next/link";

import WaitlistForm from "@/components/WaitlistForm";
import UltraFan from "@/components/UltraFan";
import SocialProof from "@/components/SocialProof";
import FAQHomeLite from "@/components/FAQHomeLite";
import SolutionsScroller from "@/components/SolutionsScroller";
import { SHOW_WAITLIST_COUNT } from "@/lib/env";

export default function Page() {
  return (
    <div>
      {/* =========================
          HERO
        ========================= */}
      <section className="section hero-gradient text-center relative overflow-hidden">
        <Image
          src="/hero/hero_festival_portal.jpg"
          alt="Sidetick – billetterie sécurisée nouvelle génération"
          priority
          fill
          sizes="100vw"
          className="absolute inset-0 -z-10 object-cover"
        />

        <div className="container relative">
          <small className="text-white/70 block">
            Billetterie sécurisée & anti-fraude
          </small>

          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight reveal-up">
            You bring the vibe,{" "}
            <span className="text-orange-400">We bring the ticket !</span>
          </h1>

          <p className="mt-6 text-white/80 max-w-2xl mx-auto text-lg md:text-xl reveal-up">
            La billetterie nouvelle génération : <strong>sécurisée</strong>,{" "}
            <strong>juste</strong> et{" "}
            <strong>faite pour les fans & les artistes</strong>.
          </p>

          {/* Formulaire dans le Hero */}
          <div className="mt-8 max-w-md mx-auto reveal-up">
            <WaitlistForm />
          </div>

          {SHOW_WAITLIST_COUNT && (
            <div className="mt-4">{/* <WaitlistCount /> */}</div>
          )}

          {/* CTA secondaire pro */}
          <div className="mt-6 reveal-up">
            <Link
              href="/pros"
              className="text-sm text-white/80 underline underline-offset-4 hover:text-white"
            >
              Je suis organisateur / artiste →
            </Link>
          </div>
        </div>
      </section>

      {/* =========================
          SECTION PROBLÈMES
        ========================= */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-extrabold reveal-up">
            Pourquoi la billetterie doit changer
          </h2>
          <p className="mt-3 max-w-prose text-white/80 reveal-up">
            Fraude, prix abusifs, impossibilité de revendre, fans invisibles :
            on peut faire mieux.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <ProblemCard
              title="Fraude & faux billets"
              subtitle="Des milliers de fans se font avoir chaque année."
              img="/problems/problems_ticket_fraud.jpg"
            />
            <ProblemCard
              title="Prix abusifs"
              subtitle="La revente sauvage exclut les vrais fans."
              img="/problems/problems_ticket_prices.jpg"
            />
            <ProblemCard
              title="Pas de revente officielle"
              subtitle="Un imprévu ? Ton billet est perdu."
              img="/problems/problems_no_resale.jpg"
            />
            <ProblemCard
              title="Fans invisibles"
              subtitle="Les artistes ne voient pas leurs supporters."
              img="/problems/problems_invisible_fans.jpg"
            />
          </div>

          {/* SEO copy invisible (propre, sans casser l’UX) */}
          <div className="sr-only">
            Sidetick est une billetterie en ligne sécurisée et anti-fraude pour concerts
            et festivals. La plateforme propose une revente officielle encadrée pour
            limiter les prix abusifs, protéger les fans et lutter contre les faux billets.
            Sidetick valorise aussi l’engagement avec le Fan Graph : badges, statuts et
            avantages pour les fans, et une meilleure compréhension des communautés pour
            les artistes et organisateurs.
          </div>
        </div>
      </section>

      {/* =========================
          SECTION SOLUTIONS (scroller)
        ========================= */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-extrabold reveal-up">
            Notre réponse : une billetterie sécurisée, juste et pensée pour les fans
          </h2>

          <p className="mt-3 max-w-3xl text-sm md:text-base text-white/75 reveal-up">
            Une billetterie sécurisée, avec <strong>revente officielle</strong> et{" "}
            <strong>Fan Graph</strong> pour récompenser les fans.{" "}
            <Link
              href="/start"
              className="underline underline-offset-4 hover:text-white"
            >
              Commencer
            </Link>{" "}
            ou découvrir l’espace{" "}
            <Link
              href="/pros"
              className="underline underline-offset-4 hover:text-white"
            >
              organisateurs & artistes
            </Link>
            .
          </p>

          <div className="mt-8">
            <SolutionsScroller
              slides={[
                { src: "/solutions/solutions_empty_stage.jpg", alt: "Scène vide" },
                {
                  src: "/solutions/solutions_half_full_stage.jpg",
                  alt: "Scène à moitié pleine",
                },
                { src: "/solutions/solutions_full_stage.jpg", alt: "Scène pleine" },
              ]}
              steps={[
                {
                  title: "Billets infalsifiables",
                  desc: "Chaque ticket est unique et vérifié — impossible à copier.",
                  colorClass: "from-violet-300 to-violet-500",
                },
                {
                  title: "Revente simple & officielle",
                  desc: "Revends sans stress et sans arnaque, depuis ton smartphone.",
                  colorClass: "from-blue-300 to-blue-500",
                },
                {
                  title: "Fans récompensés • Tout-en-un, mobile",
                  desc: "Plus tu vibres, plus tu gagnes — ton billet, ta revente, tes avantages.",
                  colorClass: "from-orange-300 to-orange-500",
                },
              ]}
              heightVh={320}
              overlay
            />
          </div>

          <div className="mt-10 text-center reveal-up">
            <Link
              href="/start#waitlist"
              className="inline-flex items-center justify-center rounded-xl bg-white/15 px-5 py-3 hover:bg-white/25 transition"
            >
              Rejoindre la Side
            </Link>
          </div>
        </div>
      </section>

      {/* =========================
          ULTRAFAN (Fan Graph B2C)
        ========================= */}
      <UltraFan />

      {/* =========================
          PRE-CTA STRIP (social proof + FAQ light)
        ========================= */}
      <section className="section">
        <div className="container">
          <div className="reveal-up">
            <p className="text-sm uppercase tracking-wide text-white/60">
              Ils construisent le futur du live avec nous
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-extrabold">
              Artistes, marques et institutions nous font confiance
            </h2>

            <div className="mt-6">
              <SocialProof />
            </div>
          </div>

          <div className="mt-12 reveal-up">
            <FAQHomeLite />
          </div>

          {/* Respiration avant CTA final */}
          <div className="mt-14" />
        </div>
      </section>

      {/* =========================
          CTA FINAL (premium)
        ========================= */}
      <section id="waitlist" className="section relative overflow-hidden">
        <Image
          src="/cta/cta_final_lasers.jpg"
          alt="Rejoins la Side avant le lancement"
          fill
          sizes="100vw"
          className="absolute inset-0 -z-10 object-cover opacity-60"
        />
        <div className="absolute inset-0 -z-10 bg-black/35" />

        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm uppercase tracking-wide text-white/70 reveal-up">
              Accès anticipé
            </p>

            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold reveal-up">
              Rejoins la Side avant le lancement
            </h2>

            <p className="mt-3 text-white/80 reveal-up">
              Accès anticipé, <strong>badges fondateurs</strong> et{" "}
              <strong>événements pilotes</strong> réservés aux premiers membres.
            </p>

            <p className="mt-3 text-sm text-white/70 reveal-up">
              Déjà rejoint par des fans, artistes et partenaires du live.
            </p>

            <div className="mt-8 reveal-up">
              <div className="mx-auto max-w-md">
                <WaitlistForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ===========================================================
   Composants locaux
   =========================================================== */

function ProblemCard({
  img,
  title,
  subtitle,
}: {
  img: string;
  title: string;
  subtitle: string;
}) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur reveal-up">
      <div className="relative h-48">
        <Image
          src={img}
          alt={title}
          fill
          sizes="(max-width:768px) 100vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-90" />
      </div>

      <div className="p-4">
        <h3 className="font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-white/75 line-clamp-2 group-hover:line-clamp-none">
          {subtitle}
        </p>
      </div>
    </article>
  );
}
