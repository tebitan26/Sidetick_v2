export const dynamic = "force-dynamic";

export const metadata = {
  title: "Merci – Sidetick",
};

export default function ThanksPage() {
  // On génère l’URL côté client uniquement
  const url =
    typeof window !== "undefined"
      ? window.location.origin + "/?utm_source=share&utm_medium=thanks"
      : "";

  return (
    <div className="section">
      <div className="container text-center">
        <h1 className="text-4xl font-bold mb-4">Bienvenue dans la vibe ✨</h1>
        <p className="mt-2">
          Merci pour ton inscription ! Partage Sidetick et aide-nous à bâtir une
          billetterie plus juste.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a
            className="btn"
            href="https://twitter.com/intent/tweet?text=Je%20rejoints%20la%20vibe%20Sidetick!"
            target="_blank"
            rel="noopener noreferrer"
          >
            Partager sur X
          </a>
          <button
            className="btn"
            onClick={() => {
              if (navigator?.clipboard && url) {
                navigator.clipboard.writeText(url);
                alert("Lien copié ✅");
              }
            }}
          >
            Copier le lien
          </button>
        </div>
      </div>
    </div>
  );
}
