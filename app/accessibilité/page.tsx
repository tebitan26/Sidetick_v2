export const metadata = {
  title: "Accessibilité — Sidetick",
  description:
    "Engagement d’accessibilité de Sidetick et moyens de contact si vous rencontrez un problème.",
};

export default function Page() {
  return (
    <div className="section container">
      <h1>Accessibilité</h1>
      <p className="mt-2 max-w-prose">
        Sidetick vise la conformité au RGAA/WCAG niveau AA : contrastes élevés, navigation clavier,
        alternatives textuelles, structure sémantique et tailles de tap cibles suffisantes.
      </p>

      <h2 className="mt-8 text-2xl font-bold">Nous contacter</h2>
      <p className="mt-2 max-w-prose">
        Vous avez détecté un problème d’accessibilité ? Écrivez-nous à{" "}
        <a className="underline" href="mailto:contact@sidetick.app">contact@sidetick.app</a>.
        Nous vous répondrons rapidement et corrigerons le souci prioritairement.
      </p>

      <h2 className="mt-8 text-2xl font-bold">Compatibilité</h2>
      <ul className="list-disc pl-6 text-white/80">
        <li>Mobiles iOS/Android récents, Safari, Chrome, Firefox, Edge.</li>
        <li>Support du zoom, tailles de polices dynamiques et lecteurs d’écran.</li>
      </ul>
    </div>
  );
}
