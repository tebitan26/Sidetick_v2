import Link from "next/link";
import WaitlistForm from "@/components/WaitlistForm";
import UltraFan from "@/components/UltraFan";
import WaitlistCount from "@/components/WaitlistCount";

export default function Page() {
  return (
    <div>
      {/* Hero → hero-gradient avec image + texte */}
      <section className="section hero-gradient text-center relative overflow-hidden">
        {/* Image de fond */}
        <div
          className="absolute inset-0 -z-10 opacity-40"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1518972559570-7cc1309f3229?q=80&w=1600')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="container relative">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Billetterie en ligne <span className="text-orange-400">sécurisée</span> &
            <span className="text-orange-400"> éthique</span>
          </h1>
          <p className="mt-6 text-white/80 max-w-2xl mx-auto text-lg md:text-xl">
            Achetez et revendez vos billets de concerts, festivals et spectacles en toute sécurité.
            Zéro fraude, revente officielle, redistribution équitable grâce à la blockchain.
          </p>
          <div className="mt-8 flex justify-center">
            <a href="#waitlist"
                onClick={() => (window as any).plausible?.("cta_click_hero")}
  className="btn text-lg px-8 py-4"
              🎟 Rejoindre la liste d’attente
            </a>
          </div>
          <div className="mt-4">
            <WaitlistCount />
          </div>
        </div>
      </section>

      {/* Features → section-alt */}
      <section className="section section-alt">
        <div className="container grid md:grid-cols-4 gap-4">
          <div className="card"><strong>Sécurité absolue</strong><p className="mt-2">Blockchain + QR dynamique = zéro fraude.</p></div>
          <div className="card"><strong>Revente officielle</strong><p className="mt-2">Revendez en toute légalité, revenus partagés avec l’artiste.</p></div>
          <div className="card"><strong>Expérience fluide</strong><p className="mt-2">Tout en euros ; aucune connaissance crypto nécessaire.</p></div>
          <div className="card"><strong>Billetterie éthique</strong><p className="mt-2">Modèle juste pour artistes, fans et organisateurs.</p></div>
        </div>
      </section>

      {/* UltraFan → normal */}
      <UltraFan />

      {/* Pourquoi Sidetick ? → section-alt */}
      <section className="section section-alt">
        <div className="container">
          <h2>Pourquoi Sidetick ?</h2>
          <p className="mt-3 max-w-prose">
            Fraude, faux billets, spéculation : la billetterie en ligne a besoin de confiance. 
            Sidetick garantit des tickets authentiques et traçables, avec une revente officielle 
            qui redistribue la valeur de façon équitable.
          </p>
          <div className="mt-8"><WaitlistForm /></div>
          <div className="mt-10 text-center">
            <p className="text-white/70">Besoin d’en savoir plus ?</p>
            <div className="mt-4 flex items-center justify-center gap-4">
              <Link href="/features" className="underline">Fonctionnalités</Link>
              <Link href="/about" className="underline">À propos</Link>
              <Link href="/blog" className="underline">Blog</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
