// app/terms/page.tsx
export const metadata = {
  title: "Conditions d’utilisation — Sidetick",
  description:
    "Règles d’utilisation du service Sidetick : comptes, achats, revente officielle, remboursements et limitations.",
};

export default function Page() {
  return (
    <div className="section">
      <div className="container prose prose-invert max-w-3xl">
        <h1>Conditions d’utilisation</h1>

        <h2>1. Objet</h2>
        <p>
          Sidetick est une billetterie en ligne avec revente officielle,
          anti-fraude et redistribution équitable.
        </p>

        <h2>2. Comptes &amp; sécurité</h2>
        <p>
          Vous êtes responsable de votre compte et des informations fournies.
          Toute activité suspecte peut entraîner la suspension pour raisons de
          sécurité.
        </p>

        <h2>3. Achats</h2>
        <p>
          Les billets sont délivrés numériquement (QR dynamique). Vérifiez les
          informations de l’événement avant paiement.
        </p>

        <h2>4. Revente officielle</h2>
        <p>
          La revente s’effectue exclusivement via Sidetick. Des frais de
          service peuvent s’appliquer. Les revenus sont redistribués selon les
          règles définies par l’organisateur et l’artiste.
        </p>

        <h2>5. Remboursements</h2>
        <p>
          En cas d’annulation ou de modification majeure, l’organisateur
          définit la politique de remboursement. Nous facilitons l’exécution
          conforme.
        </p>

        <h2>6. Usages interdits</h2>
        <ul>
          <li>Revente en dehors de la plateforme officielle.</li>
          <li>Fraude, falsification, contournement technique.</li>
          <li>Atteinte aux droits d’autrui et à la loi.</li>
        </ul>

        <h2>7. Responsabilité</h2>
        <p>
          Le service est fourni “en l’état”. Sidetick n’est pas responsable des
          perturbations indépendantes de sa volonté (hébergeur, réseau, force
          majeure).
        </p>

        <h2>8. Droit applicable</h2>
        <p>Droit français. Juridictions compétentes : tribunaux de Lyon.</p>

        <h2>Contact</h2>
        <p>
          <a href="mailto:contact@sidetick.app">contact@sidetick.app</a>
        </p>

        <p className="text-white/60 text-sm">Dernière mise à jour : 2025-09-13</p>
      </div>
    </div>
  );
}
