export const metadata = { title: "Fonctionnalités – Sidetick" };
export default function FeaturesPage(){
  return(<div className="section"><div className="container grid md:grid-cols-2 gap-6">
    <div className="card"><h2>Sécurité & anti-fraude</h2><p className="mt-2">Chaque billet est unique et traçable, stocké avec une preuve blockchain, validé via QR dynamique.</p></div>
    <div className="card"><h2>Revente officielle</h2><p className="mt-2">Revenez vos billets légalement, avec redistribution équitable vers artistes et organisateurs.</p></div>
    <div className="card"><h2>UX fluide</h2><p className="mt-2">Aucune connaissance crypto nécessaire, paiement en euros, transferts facilités pour les groupes.</p></div>
    <div className="card"><h2>Ultra Fans & Récompenses</h2><p className="mt-2">Cumulez des points et débloquez des avantages exclusifs : early access, drops, backstage.</p></div>
  </div></div>);
}
