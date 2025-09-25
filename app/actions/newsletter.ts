// app/actions/newsletter.ts
"use server";

import { supabaseServer } from "@/lib/supabase/server";

export async function subscribeNewsletter(formData: FormData) {
  const email = String(formData.get("email") || "").trim().toLowerCase();

  // petite validation rapide
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Email invalide." as const };
  }

  const sb = supabaseServer();

  // insertion simple (RLS: prévoir une policy INSERT pour anon sur public.newsletter)
  const { error } = await sb.from("newsletter").insert({
    email,
    source: "website",
    // ip / user_agent si tu veux (stocke uniquement si c'est utile et RGPD-ok)
    // ip: headers().get("x-forwarded-for") ?? null,
    // user_agent: headers().get("user-agent") ?? null,
    created_at: new Date().toISOString(),
  });

  if (error) {
    // 23505 = unique violation (déjà inscrit)
    // @ts-ignore (code propre au driver PG)
    if (error.code === "23505") {
      return { ok: true, message: "Tu es déjà inscrit·e 👋" as const };
    }
    return { ok: false, error: "Oups, réessaie dans un instant." as const };
  }

  return { ok: true, message: "Merci ! Tu es inscrit·e à la newsletter 💌" as const };
}
