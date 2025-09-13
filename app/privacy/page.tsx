// app/privacy/page.tsx
export const metadata = {
  title: "Confidentialité — Sidetick",
  description:
    "Politique de confidentialité de Sidetick : données collectées, usage, conservation et droits RGPD.",
};

export default function Page() {
  return (
    <div className="section">
      <div className="container prose prose-invert max-w-3xl">
        <h1>Politique de confidentialité</h1>
        <p className="lead">
          Nous respectons votre vie privée. Cette page explique quelles données
          nous collectons et comment nous les utilisons.
        </p>

        <h2>Données que nous collectons</h2>
        <ul>
          <li>
            <strong>Email</strong> (liste d’attente &amp; newsletters).
          </li>
          <li>
            <strong>Logs techniques</strong> (IP tronquée, user-agent) pour la
            sécurité et la prévention de la fraude.
          </li>
        </ul>

        <h2>Pourquoi nous les utilisons</h2>
        <ul>
          <li>Vous informer du lancement et des nouveautés de Sidetick.</li>
          <li>Assurer la sécurité du service et mesurer l’audience agrégée.</li>
        </ul>

        <h2>Base légale</h2>
        <p>
          Consentement (inscription volontaire) et intérêt légitime (sécurité,
          anti-fraude).
        </p>

        <h2>Durée de conservation</h2>
        <p>
          Email : jusqu’à désinscription. Logs techniques : durée limitée
          strictement nécessaire à la sécurité.
        </p>

        <h2>Vos droits</h2>
        <p>
          Accès, rectification, effacement, opposition et portabilité. Pour
          exercer vos droits :{" "}
          <a href="mailto:contact@sidetick.app">contact@sidetick.app</a>. Chaque
          email contient un lien de désinscription en 1 clic.
        </p>

        <h2>Partage</h2>
        <p>
          Pas de vente de données. Des sous-traitants conformes (hébergement,
          emailing) peuvent traiter vos données pour notre compte.
        </p>

        <h2>Contact</h2>
        <p>
          Sidetick SAS — 9 Rue Albert Schweitzer, 69600 Oullins-Pierre-Bénite —
          <a href="mailto:contact@sidetick.app">contact@sidetick.app</a>
        </p>

        <p className="text-white/60 text-sm">Dernière mise à jour : 2025-09-13</p>
      </div>
    </div>
  );
}
