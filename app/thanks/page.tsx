// app/thanks/page.tsx
import Link from "next/link";
import { supabaseServer } from "@/lib/supabase/server";
import CopyButton from "@/components/CopyButton";

export const metadata = {
  title: "Merci — Sidetick",
  description: "Tu es bien inscrit·e à la waiting list. Invite tes amis pour booster la liste !",
  alternates: { canonical: "/thanks" },
};

const SHOW_MY_REFERRALS = false; // active plus tard si tu veux afficher le compteur

export default async function ThanksPage({
  searchParams,
}: {
  searchParams?: { me?: string };
}) {
  const me = searchParams?.me || "";
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.sidetick.app";
  const share = me ? `${base}/?ref=${me}` : base;

  let referrals = 0;
  if (SHOW_MY_REFERRALS && me) {
    const sb = supabaseServer();
    const { data } = await sb.rpc("get_waitlist_referrals", { code: me });
    referrals = typeof data === "number" ? data : 0;
  }

  return (
    <div className="section">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold">Merci 🎉</h1>
        <p className="mt-3 text-white/80">
          Ton inscription est confirmée. Tu recevras les infos de lancement très bientôt.
        </p>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 inline-block text-left">
          <p className="text-sm text-white/70">Ton lien à partager</p>
          <div className="mt-2 flex items-center gap-2">
            <input
              readOnly
              value={share}
              className="w-[min(80vw,520px)] rounded-xl bg-white/10 px-3 py-2 text-sm"
            />
            <CopyButton
              text={share}
              className="rounded-xl bg-white/15 px-3 py-2 hover:bg-white/25 transition text-sm"
            />
          </div>

          {SHOW_MY_REFERRALS && me ? (
            <p className="mt-2 text-sm text-white/70">
              Filleuls confirmés : <strong>{referrals}</strong>
            </p>
          ) : null}
        </div>

        <div className="mt-8">
          <Link href="/" className="underline text-white/80">
            ← Retour à l’accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
