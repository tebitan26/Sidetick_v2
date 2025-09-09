import Link from "next/link";
import WaitlistForm from "@/components/WaitlistForm";
import UltraFan from "@/components/UltraFan";
import WaitlistCount from "@/components/WaitlistCount";

export default function Page(){
  return(<div>
    {/* Hero → on garde hero-gradient */}
    <section className="section hero-gradient text-center relative overflow-hidden">
      ...
    </section>

    {/* Features → on met section-alt pour casser le rythme */}
    <section className="section section-alt">
      <div className="container grid md:grid-cols-4 gap-4">
        <div className="card"><strong>Sécurité absolue</strong><p className="mt-2">Blockchain + QR dynamique = zéro fraude.</p></div>
        <div className="card"><strong>Revente officielle</strong><p className="mt-2">Revendez en toute légalité, revenus partagés avec l’artiste.</p></div>
        <div className="card"><strong>Expérience fluide</strong><p className="mt-2">Tout en euros ; aucune connaissance crypto nécessaire.</p></div>
        <div className="card"><strong>Billetterie éthique</strong><p className="mt-2">Modèle juste pour artistes, fans et organisateurs.</p></div>
      </div>
    </section>

    {/* UltraFan → normal (fond sombre) */}
    <UltraFan/>

    {/* Pourquoi Sidetick ? → on peut aussi mettre section-alt */}
    <section className="section section-alt">
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
