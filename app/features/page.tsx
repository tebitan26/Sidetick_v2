export const metadata = { title: "Fonctionnalités – Sidetick" };

export default function FeaturesPage() {
  return (
    <div className="section">
      <div className="container grid md:grid-cols-2 gap-6">
        <div className="card">
          <h2>Billetterie sécurisée & anti-fraude</h2>
          <p className="mt-2">
            Chaque billet de concert ou festival est unique et traçable grâce aux <strong>tickets blockchain</strong> 
            et au <strong>QR dynamique</strong>, ce qui empêche la duplication et les faux billets.
          </p>
        </div>

        <div className="card">
          <h2>Revente officielle de billets</h2>
          <p className="mt-2">
            Une <strong>marketplace de revente</strong> encadrée met fin à la spéculation : revente légale de vos billets,
            transparence des prix et redistribution plus juste vers les artistes et organisateurs.
          </p>
        </div>

        <div className="card">
          <h2>UX fluide (paiement en euros)</h2>
          <p className="mt-2">
            Achat et revente en <strong>euros</strong> (pas de wallet requis), transfert de billets simplifié pour les groupes,
            expérience mobile rapide et fiable pour tous les événements live.
          </p>
        </div>

        <div className="card">
          <h2>Ultra Fans & récompenses</h2>
          <p className="mt-2">
            Un programme de <strong>fidélité</strong> qui valorise l’engagement : badges, niveaux, early access, drops exclusifs
            et avantages pour les fans les plus actifs.
          </p>
        </div>
      </div>
    </div>
  );
}
