// app/page.tsx
import Image from "next/image";
import dynamic from "next/dynamic";
import WaitlistForm from "@/components/WaitlistForm";
import UltraFan from "@/components/UltraFan";
import SocialProof from "@/components/SocialProof";
import FAQHome from "@/components/FAQHome";
import Link from "next/link";
import SolutionsScroller from "@/components/SolutionsScroller";

// ✅ import dynamique (pas de SSR) pour alléger le bundle initial
const WaitlistCount = dynamic(() => import("@/components/WaitlistCount"), { ssr: false });

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
          <small className="text-white/70 block">Billetterie sécurisée & anti-fraude</small>

          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight reveal-up">
            You bring the vibe, <span className="text-orange-400">We bring the ticket !</span>
          </h1>

          <p className="mt-6 text-white/80 max-w-2xl mx-auto text-lg md:text-xl reveal-up">
            La billetterie nouvelle génération : <strong>sécurisée</strong>, <strong>juste</strong> et
            <strong> faite pour les fans & les artistes</strong>.
          </p>

          {/* Formulaire dans le Hero */}
          <div className="mt-8 max-w-md mx-auto reveal-up">
            <WaitlistForm />
          </div>

          {/* ✅ compteur waitlist dynamique */}
          <div className="mt-4 reveal-up">
            <WaitlistCount />
          </div>
        </div>
      </section>

      {/* =========================
          SECTION PROBLÈMES (cartes interactives)
        ========================= */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-extrabold reveal-up">
            Pourquoi la billetterie doit changer
          </h2>
          <p className="mt-3 max-w-prose text-white/80 reveal-up">
            Fraude, prix abusifs, impossibilité de revendre, fans invisibles : on peut faire mieux.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Carte 1 */}
            <ProblemCard
              title="Fraude & faux billets"
              subtitle="Des milliers de fans se font avoir chaque année."
              img="/problems/problems_ticket_fraud.jpg"
            />
            {/* Carte 2 */}
            <ProblemCard
              title="Prix abusifs"
              subtitle="La revente sauvage exclut les vrais fans."
              img="/problems/problems_ticket_prices.jpg"
            />
            {/* Carte 3 */}
            <ProblemCard
              title="Pas de revente officielle"
              subtitle="Un imprévu ? Ton billet est perdu."
              img="/problems/problems_no_resale.jpg"
            />
            {/* Carte 4 */}
            <ProblemCard
              title="Fans invisibles"
              subtitle="Les artistes ne voient pas leurs supporters."
              img="/problems/problems_invisible_fans.jpg"
            />
          </div>
        </div>
      </section>

      {/* =========================
          SECTION SOLUTIONS (scène qui se remplit)
        ========================= */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-extrabold reveal-up">
            Notre réponse : une billetterie juste et fun
          </h2>

          <ul className="mt-4 grid gap-3 text-white/85 reveal-up">
            <li>• <strong>Billets infalsifiables</strong> — chaque ticket est unique et vérifié.</li>
            <li>• <strong>Revente simple & officielle</strong> — revends sans stress, sans arnaque.</li>
            <li>• <strong>Fans récompensés</strong> — plus tu vibres, plus tu gagnes.</li>
            <li>• <strong>Tout-en-un, mobile</strong> — ton billet, ta revente, tes avantages.</li>
          </ul>

          <SolutionsScroller
  slides={[
    { src: "/solutions/solutions_empty_stage.jpg", alt: "Scène vide" },
    { src: "/solutions/solutions_half_full_stage.jpg", alt: "Scène à moitié pleine" },
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
  heightVh={320} // ~3 écrans de scroll; ajuste à ton goût (260–360)
  overlay
/>

          {/* CTA secondaire */}
          <div className="mt-10 text-center reveal-up">
            <Link
              href="#waitlist"
              className="inline-flex items-center justify-center rounded-xl bg-white/15 px-5 py-3 hover:bg-white/25 transition"
            >
              Rejoins la waiting list
            </Link>
          </div>
        </div>
      </section>

      {/* =========================
          ULTRAFAN (composant existant)
        ========================= */}
      <UltraFan />

      {/* =========================
          SOCIAL PROOF + FAQ + FORM
        ========================= */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-extrabold reveal-up">Ils croient déjà en nous</h2>
          <p className="mt-3 max-w-prose text-white/80 reveal-up">
            Artistes, marques et institutions nous soutiennent pour protéger l’expérience live.
          </p>

          <div className="mt-8 reveal-up">
            <SocialProof />
          </div>

          <div className="mt-12 reveal-up">
            <FAQHome />
          </div>

          {/* Formulaire + compteur en bas de page */}
          <div id="waitlist" className="mt-12 max-w-md reveal-up">
            <WaitlistForm />
            <div className="mt-4">
              <WaitlistCount />
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          CTA FINAL
        ========================= */}
      <section className="section relative overflow-hidden">
        <Image
          src="/cta/cta_final_lasers.jpg"
          alt="Rejoins la Side aujourd’hui"
          fill
          sizes="100vw"
          className="absolute inset-0 -z-10 object-cover opacity-60"
        />
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold reveal-up">
            Le futur du live commence avec toi.
          </h2>
          <p className="mt-3 text-white/80 max-w-2xl mx-auto reveal-up">
            Rejoins une communauté qui veut une billetterie <strong>plus juste</strong> et
            <strong> plus fun</strong>.
          </p>
          <div className="mt-8 reveal-up">
            <Link
              href="#waitlist"
              className="inline-flex items-center justify-center rounded-xl bg-white/15 px-6 py-3 hover:bg-white/25 transition"
            >
              Rejoins la Side aujourd’hui
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ===========================================================
   Composants locaux (pas de state → pas de "use client")
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
        <p className="mt-1 text-sm text-white/75 line-clamp-2 group-hover:line-clamp-none transition-[line-clamp]">
          {subtitle}
        </p>
      </div>
    </article>
  );
}

function StageImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur reveal-up">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        className="object-cover"
        priority={false}
      />
    </div>
  );
}
