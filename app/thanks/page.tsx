// app/thanks/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Merci — Sidetick",
  description: "Inscription confirmée à la waiting list Sidetick.",
  alternates: { canonical: "/thanks" },
};

export default function ThanksPage({
  searchParams,
}: {
  searchParams?: { me?: string; status?: "new" | "already" };
}) {
  const me = searchParams?.me || "";
  const isAlready = searchParams?.status === "already";

  return (
    <div className="section">
      <div className="container text-center max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-extrabold">
          {isAlready ? "Tu es déjà sur la liste 👋" : "Bienvenue sur la liste 🎉"}
        </h1>

        <p className="mt-3 text-white/80">
          {isAlready
            ? "Ton email était déjà confirmé. Merci pour ton soutien !"
            : "Ton email est confirmé. On te prévient dès que l’app sort."}
        </p>

        {me ? (
          <div className="mt-6">
            <p className="text-white/70 text-sm">Ton lien de parrainage :</p>
            <div className="mt-2 inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-3">
              <span className="text-sm text-white/80">
                {`${process.env.NEXT_PUBLIC_SITE_URL || "https://www.sidetick.app"}?ref=${me}`}
              </span>
            </div>
            <p className="mt-2 text-xs text-white/60">
              Partage-le à tes amis : chaque inscription compte pour les futures récompenses Ultra Fan.
            </p>
          </div>
        ) : null}

        <div className="mt-8">
          <Link
            className="inline-flex items-center justify-center rounded-xl bg-white/15 px-5 py-3 hover:bg-white/25 transition"
            href="/"
          >
            Retour à l’accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
