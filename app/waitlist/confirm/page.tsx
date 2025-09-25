// app/waitlist/confirm/page.tsx
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { cookies } from "next/headers";
import { supabaseServer } from "@/lib/supabase/server";

export default async function ConfirmPage({
  searchParams,
}: {
  searchParams: { ref?: string; consent?: string; src?: string; came_from?: string };
}) {
  const sb = supabaseServer(cookies());
  const { data } = await sb.auth.getUser();
  const email = data.user?.email;
  if (!email) redirect("/?verify=failed");

  const referrer_code = searchParams.ref || null;
  const consent = searchParams.consent === "1";
  const source = searchParams.src || "website";
  const referer = searchParams.came_from || headers().get("referer") || null;

  // upsert pour éviter les doublons si quelqu’un re-clique
  await sb.from("waitlist").upsert(
    {
      email,
      referrer_code,
      consent,
      source,
      referer,
      confirmed_at: new Date().toISOString(),
    },
    { onConflict: "email" }
  );

  // récupère mon code
  const { data: me } = await sb
    .from("waitlist")
    .select("ref_code")
    .eq("email", email)
    .single();

  await sb.auth.signOut();

  redirect(`/thanks?me=${me?.ref_code || ""}`);
}
