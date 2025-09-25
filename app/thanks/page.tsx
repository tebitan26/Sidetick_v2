// app/thanks/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Merci — Sidetick",
  robots: { index: false },
};

export default function ThanksPage({
  searchParams,
}: {
  searchParams?: { status?: "ok" | "already"; me?: string; count?: string };
}) {
  const status = searchParams?.status === "already" ? "already" : "ok";
  const myCode = searchParams?.me || "";
  const count  = Number(searchParams?.count || "0");
  const share  = myCode ? `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.sidetick.app"}?ref=${myCode}` : "";

  return (
    <div className="section">
      <div className="container text-center max-w-2xl">
        <h1 className="text-3xl font-extrabold">
          {status === "ok" ? "Bienvenue sur la waiting list 🎉" : "Tu es déjà inscrit 👋"}
        </h1>

        <p className="mt-3 text-white/80">
          {status === "ok"
            ? "On te prévient dès que l’app sort."
            : "Ravi de te revoir — ton inscription est déjà confirmée."}
        </p>

        {myCode && (
          <>
            <p className="mt-6 text-white/80">
              Ton lien de parrainage :
            </p>
            <div className="mt-2 inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-3">
              <span className="text-sm text-white/80">{share}</span>
            </div>
            <p className="mt-3 text-white/70 text-sm">
              Filleuls confirmés : <strong>{count}</strong>
            </p>
          </>
        )}

        <div className="mt-8">
          <Link href="/" className="btn">Retour à l’accueil</Link>
        </div>
      </div>
    </div>
  );
}
