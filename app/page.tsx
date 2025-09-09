import Link from "next/link";
import WaitlistForm from "@/components/WaitlistForm";
import UltraFan from "@/components/UltraFan";
import WaitlistCount from "@/components/WaitlistCount";

export default function Page(){
  return(<div>
    <section className="section hero-gradient text-center">
      <div className="container">
        <h1>You bring the vibe, we bring the ticket!</h1>
        <p className="mt-4 text-white/80 max-w-3xl mx-auto">
          Billetterie en ligne sécurisée et éthique pour concerts, festivals et spectacles.
          Achetez et revendez vos billets en toute sécurité grâce aux tickets blockchain.
        </p>
        <div className="mt-6 flex justify-center"><a href="#waitlist" className="btn">Rejoindre la liste d’attente</a></div>
        <div className="mt-3"><WaitlistCount/></div>
      </div>
    </section>

    <section className="section">
      <div className="container grid md:grid-cols-4 gap-4">
        <div className="card"><strong>Sécurité absolue</strong><p className="mt-2">Blockchain + QR dynamique = zéro fraude.</p></div>
        <div className="card"><strong>Revente officielle</strong><p className="mt-2">Revendez en toute légalité, revenus partagés avec l’artiste.</p></div>
        <div className="card"><strong>Expérience fluide</strong><p className="mt-2">Tout en euros ; aucune connaissance crypto nécessaire.</p></div>
        <div className="card"><strong>Billetterie éthique</strong><p className="mt-2">Modèle juste pour artistes, fans et organisateurs.</p></div>
      </div>
    </section>

    <UltraFan/>

    <section className="section">
      <div className="container">
        <h2>Pourquoi Sidetick ?</h2>
        <p className="mt-3 max-w-prose">Fraude, faux billets, spéculation : la billetterie en ligne a besoin de confiance. Sidetick garantit des tickets authentiques et traçables, avec une revente officielle qui redistribue la valeur de façon équitable.</p>
        <div className="mt-8"><WaitlistForm/></div>
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
  </div>);
}
