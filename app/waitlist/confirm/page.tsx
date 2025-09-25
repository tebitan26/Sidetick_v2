// app/waitlist/confirm/page.tsx
import { redirect } from "next/navigation";
import Link from "next/link";
import { supabaseServer } from "@/lib/supabase/server";
import CopyButton from "@/components/CopyButton";

export const metadata = {
  title: "Confirmation — Sidetick",
  description: "Email confirmé. Bienvenue sur la waiting list Sidetick !",
};

export default async function ConfirmPage({
  searchParams,
}: {
  searchParams: { ref?: string; consent?: string; src?: string; came_from?: string };
}) {
  // ✅ create server client (no args)
  const sb = supabaseServer();

  // On récupère l’utilisateur lié au lien magique (si tu envoies des magic links)
  const { data } = await sb.auth.getUser();
  const email = data.user?.email;

  // Si aucun email (par ex. lien direct /confirm sans magic link), on renvoie à l’accueil
  if (!email) redirect("/?verify=failed");

  // (Optionnel) Tu peux utiliser searchParams.ref/src pour construire ton lien de parrainage
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sidetick.app";
  const myRef = encodeURIComponent(searchParams.ref || email);
  const shareUrl = `${base}/?ref=${myRef}`;

  return (
    <div className="container py-16 text-center">
      <h1 className="text-2xl md:text-3xl font-bold">✅ Email confirmé</h1>
      <p className="mt-3 text-white/80">Bienvenue sur la waiting list, {email} 🎉</p>

      <div className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-3">
        <span className="text-sm text-white/80">{shareUrl}</span>
        <CopyButton text={shareUrl} />
      </div>

      <p className="mt-3 text-white/70 text-sm">
        Partage ce lien pour inviter des amis et gagner des avantages Ultra Fan.
      </p>

      <div className="mt-8">
        <Link href="/" className="underline">
          ← Retour à l’accueil
        </Link>
      </div>
    </div>
  );
}
