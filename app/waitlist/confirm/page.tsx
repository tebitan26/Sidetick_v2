// app/waitlist/confirm/page.tsx
import { redirect } from "next/navigation";
import { supabaseServer } from "@/lib/supabase/server";

export const metadata = {
  title: "Confirmation — Sidetick",
  description: "Email confirmé. Bienvenue sur la waiting list Sidetick !",
};

export default async function ConfirmPage({
  searchParams,
}: {
  searchParams: { ref?: string; src?: string; came_from?: string };
}) {
  const sb = supabaseServer();

  // 1) Récupérer l'email via la session du magic link
  const { data } = await sb.auth.getUser();
  const email = data.user?.email;
  if (!email) redirect("/?verify=failed");

  // 2) Confirmer côté BDD, en passant éventuellement le ref reçu (si quelqu'un t'a invité)
  const { data: code, error } = await sb.rpc("confirm_waitlist", {
    p_email: email,
    p_referrer: searchParams.ref ?? null,
  });

  // 3) Se déconnecter immédiatement pour ne PAS “connecter” l’utilisateur au site
  await sb.auth.signOut();

  // 4) Rediriger vers /thanks avec mon propre code (pour pouvoir partager)
  const myCode = typeof code === "string" ? code : "";
  redirect(`/thanks${myCode ? `?me=${encodeURIComponent(myCode)}` : ""}`);
}
