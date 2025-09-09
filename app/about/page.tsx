export const metadata = { title: "À propos – Sidetick" };

export default function AboutPage() {
  return (
    <div className="section">
      <div className="container">
        <h1>Une billetterie en ligne éthique et sécurisée</h1>
        <p className="mt-4 max-w-prose">
          Sidetick redonne confiance aux fans et aux artistes. Notre marketplace de <strong>billets de concert et de festival</strong> 
          protège contre la fraude et simplifie la revente, tout en redistribuant la valeur de manière équitable.
        </p>

        <h2>Notre histoire</h2>
        <p className="mt-2 max-w-prose">
          Après plus de 10 ans à Disneyland Paris, Esteban a vu des familles bloquées pour cause de faux billets. 
          Plus tard, un concert sold-out sans <strong>revente officielle</strong> a été le déclic : Sidetick devait naître. 
          Avec Paul-Denis (Pehoz), créatif et beatmaker, nous bâtissons une billetterie qui danse au rythme des fans et des artistes.
        </p>

        <h2>Notre mission</h2>
        <p className="mt-2 max-w-prose">
          Construire une <strong>billetterie en ligne</strong> sécurisée, fluide et équitable. Grâce aux <strong>tickets blockchain</strong>,
          chaque billet est authentique et traçable, et la <strong>revente de billets</strong> se fait sur un <strong>marché secondaire</strong> 
          officiel et transparent. Objectif : protéger les fans, mieux rémunérer les artistes et simplifier l’expérience pour tous
          les événements live.
        </p>

        <h2>L’équipe</h2>
        <ul className="mt-3 list-disc pl-6 max-w-prose">
          <li><strong>Esteban Luna</strong> — Chef de projet blockchain & produit, 11 ans dans l’événementiel.</li>
          <li><strong>Paul-Denis (Pehoz)</strong> — Directeur créatif, beatmaker & producteur, vision artistique au cœur de Sidetick.</li>
        </ul>
      </div>
    </div>
  );
}
