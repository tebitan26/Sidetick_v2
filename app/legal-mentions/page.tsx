// app/legal-mentions/page.tsx
export const metadata = {
  title: "Mentions légales — Sidetick",
  description:
    "Informations légales de Sidetick : éditeur du site, contact, hébergeur et propriété intellectuelle.",
};

export default function Page() {
  return (
    <div className="section">
      <div className="container prose prose-invert max-w-3xl">
        <h1>Mentions légales</h1>

        <h2>Éditeur</h2>
        <p>
          <strong>Sidetick SAS</strong> — SIREN 989 002 266<br />
          9 Rue Albert Schweitzer, 69600 Oullins-Pierre-Bénite, France<br />
          Email : <a href="mailto:contact@sidetick.app">contact@sidetick.app</a>
        </p>

        <h2>Directeur de la publication</h2>
        <p>Le représentant légal de Sidetick SAS.</p>

        <h2>Hébergement</h2>
        <p>
          Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA —
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            vercel.com
          </a>
        </p>

        <h2>Propriété intellectuelle</h2>
        <p>
          Les marques, logos, textes et contenus présents sur ce site sont la
          propriété de leurs titulaires respectifs. Toute reproduction non
          autorisée est interdite.
        </p>

        <h2>Contact</h2>
        <p>
          Pour toute question :{" "}
          <a href="mailto:contact@sidetick.app">contact@sidetick.app</a>
        </p>

        <p className="text-white/60 text-sm">Dernière mise à jour : 2025-09-13</p>
      </div>
    </div>
  );
}
