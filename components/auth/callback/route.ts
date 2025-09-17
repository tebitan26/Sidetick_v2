// app/auth/callback/route.ts
import { NextResponse, NextRequest } from "next/server";
import { createSupabaseServer } from "@/lib/supabase/server";

// Ce callback fonctionne pour Google/Apple/Email.
// Il: 1) échange le code OAuth -> session 2) lit l'email 3) insère en waitlist (UPSERT) 4) logout 5) redirige vers /waitlist/success
export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const code = url.searchParams.get("code");
  const flow = url.searchParams.get("flow") || "waitlist";

  const supabase = createSupabaseServer();

  if (code) {
    // 1) établir la session (pose les cookies)
    const { error: exchangeError } = await supabase.auth.exchangeCodeForSession(code);
    if (exchangeError) {
      return NextResponse.redirect(`${url.origin}/waitlist/error?m=${encodeURIComponent(exchangeError.message)}`);
    }
  }

  // 2) récupérer l'utilisateur (email)
  const { data: { user }, error: userError } = await supabase.auth.getUser();
  if (userError || !user?.email) {
    return NextResponse.redirect(`${url.origin}/waitlist/error?m=${encodeURIComponent(userError?.message || "Aucun email")}`);
  }

  // 3) insérer en waitlist (UPSERT sur email)
  const email = user.email.toLowerCase();
  const source = flow; // ex: "waitlist"
  const { error: insertError } = await supabase
    .from("waitlist")
    .upsert({ email, context: source }, { onConflict: "email" });

  // 4) logout pour ne PAS garder de session ouverte
  await supabase.auth.signOut();

  if (insertError) {
    return NextResponse.redirect(`${url.origin}/waitlist/error?m=${encodeURIComponent(insertError.message)}`);
  }

  // 5) redirige vers une page de succès
  return NextResponse.redirect(`${url.origin}/waitlist/success`);
}
