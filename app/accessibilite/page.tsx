// app/accessibilite/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibilité — Sidetick",
  description:
    "Engagement d’accessibilité de Sidetick et moyens de contact si vous rencontrez un problème.",
};

export default function Page() {
  return (
    <main className="section container">
      <h1>Accessibilité</h1>

      <p className="mt-3 max-w-prose text-white/80">
        Sidetick s’engage à améliorer l’accessibilité de son site (structure
        sémantique, contrastes, navigation clavier, tailles de tap cibles,
        compatibilité lecteurs d’écran).
      </p>

      <h2 className="mt-10 text-2xl font-bold">Nous contacter</h2>
      <p className="mt-3 max-w-prose text-white/80">
        Si vous rencontrez un problème d’accessibilité, écrivez-nous à{" "}
        <a className="underline" href="mailto:contact@sidetick.app">
          contact@sidetick.app
        </a>{" "}
        et nous traiterons la demande en priorité.
      </p>

      <h2 className="mt-10 text-2xl font-bold">Compatibilité</h2>
      <ul className="mt-3 list-disc pl-6 text-white/80">
        <li>Navigateurs : Chrome, Safari, Firefox, Edge (versions récentes).</li>
        <li>Support du zoom et des tailles de polices dynamiques.</li>
      </ul>
    </main>
  );
}
