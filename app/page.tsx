// app/page.tsx
import Link from "next/link";
import WaitlistForm from "@/components/WaitlistForm";
import UltraFan from "@/components/UltraFan";
import SocialProof from "@/components/SocialProof";
import FAQHome from "@/components/FAQHome";
import Image from "next/image";
import dynamic from "next/dynamic";

// ✅ on importe WaitlistCount en mode dynamique (no SSR)
const WaitlistCount = dynamic(() => import("@/components/WaitlistCount"), { ssr: false });

export default function Page() {
  return (
    <div>
      {/* HERO */}
      <section className="section hero-gradient text-center relative overflow-hidden">
        <Image
          src="/og/hero.jpg"
          alt="Billetterie sécurisée Sidetick"
          priority
          fill
          sizes="100vw"
          className="absolute inset-0 -z-10 object-cover"
        />

        <div className="container relative">
          <small className="text-white/70 block">
            Billetterie sécurisée & anti-fraude
          </small>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Billetterie en ligne{" "}
            <span className="text-orange-400">sécurisée</span> &{" "}
            <span className="text-orange-400">éthique</span>
          </h1>
          <p className="mt-6 text-white/80 max-w-2xl mx-auto text-lg md:text-xl">
            Achetez et revendez vos billets de concerts, festivals et spectacles
            en toute sécurité. Zéro fraude, revente officielle, redistribution
            équitable grâce à la blockchain.
          </p>

          {/* Formulaire dans le Hero */}
          <div className="mt-8 max-w-md mx-auto">
            <WaitlistForm />
          </div>

          {/* ✅ compteur waitlist dynamique */}
          <div className="mt-4">
            <WaitlistCount />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section section-alt">
        <div className="container grid md:grid-cols-4 gap-4">
          <div className="card">
            <strong>Sécurité absolue</strong>
            <p className="mt-2">Blockchain + QR dynamique = zéro fraude.</p>
          </div>
          <div className="card">
            <strong>Revente officielle</strong>
            <p className="mt-2">
              Revendez en toute légalité, revenus partagés avec l’artiste.
            </p>
          </div>
          <div className="card">
            <strong>Expérience fluide</strong>
            <p className="mt-2">
              Tout en euros ; aucune connaissance crypto nécessaire.
            </p>
          </div>
          <div className="card">
            <strong>Billetterie éthique</strong>
            <p className="mt-2">
              Modèle juste pour artistes, fans et organisateurs.
            </p>
          </div>
        </div>
      </section>

      {/* ULTRAFAN */}
      <UltraFan />

      {/* Pourquoi Sidetick ? */}
      <section className="section section-alt">
        <div className="container">
          <h2>Pourquoi Sidetick ?</h2>
          <p className="mt-3 max-w-prose">
            Fraude, faux billets, spéculation : la billetterie en ligne a besoin
            de confiance. Sidetick garantit des tickets authentiques et
            traçables, avec une revente officielle qui redistribue la valeur de
            façon équitable.
          </p>

          <SocialProof />
          <FAQHome />

          <div className="mt-8">
            <WaitlistForm />
            {/* ✅ compteur waitlist en bas aussi */}
            <div className="mt-4">
              <WaitlistCount />
            </div>
      </section>
    </div>
  );
}
